// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataPipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataPipelineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ValidatePipelineDefinitionInput, ValidatePipelineDefinitionOutput } from "../models/models_0";
import { de_ValidatePipelineDefinitionCommand, se_ValidatePipelineDefinitionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ValidatePipelineDefinitionCommand}.
 */
export interface ValidatePipelineDefinitionCommandInput extends ValidatePipelineDefinitionInput {}
/**
 * @public
 *
 * The output of {@link ValidatePipelineDefinitionCommand}.
 */
export interface ValidatePipelineDefinitionCommandOutput extends ValidatePipelineDefinitionOutput, __MetadataBearer {}

/**
 * <p>Validates the specified pipeline definition to ensure that it is well formed and can be run without error.</p>
 *
 *         <examples>
 *             <example>
 *                 <name>Example 1</name>
 *                 <description>
 *                     This example sets an valid pipeline configuration and returns success.
 *                 </description>
 *             <request>
 *
 * POST / HTTP/1.1
 * Content-Type: application/x-amz-json-1.1
 * X-Amz-Target: DataPipeline.ValidatePipelineDefinition
 * Content-Length: 936
 * Host: datapipeline.us-east-1.amazonaws.com
 * X-Amz-Date: Mon, 12 Nov 2012 17:49:52 GMT
 * Authorization: AuthParams
 *
 * \{"pipelineId": "df-06372391ZG65EXAMPLE",
 *  "pipelineObjects":
 *   [
 *     \{"id": "Default",
 *      "name": "Default",
 *      "fields":
 *       [
 *         \{"key": "workerGroup",
 *          "stringValue": "MyworkerGroup"\}
 *       ]
 *     \},
 *     \{"id": "Schedule",
 *      "name": "Schedule",
 *      "fields":
 *       [
 *        \{"key": "startDateTime",
 *          "stringValue": "2012-09-25T17:00:00"\},
 *         \{"key": "type",
 *          "stringValue": "Schedule"\},
 *         \{"key": "period",
 *          "stringValue": "1 hour"\},
 *         \{"key": "endDateTime",
 *          "stringValue": "2012-09-25T18:00:00"\}
 *       ]
 *     \},
 *     \{"id": "SayHello",
 *      "name": "SayHello",
 *      "fields":
 *       [
 *         \{"key": "type",
 *          "stringValue": "ShellCommandActivity"\},
 *         \{"key": "command",
 *          "stringValue": "echo hello"\},
 *         \{"key": "parent",
 *          "refValue": "Default"\},
 *         \{"key": "schedule",
 *          "refValue": "Schedule"\}
 *
 *       ]
 *     \}
 *   ]
 * \}
 *
 *             </request>
 *             <response>
 *
 * x-amzn-RequestId: 92c9f347-0776-11e2-8a14-21bb8a1f50ef
 * Content-Type: application/x-amz-json-1.1
 * Content-Length: 18
 * Date: Mon, 12 Nov 2012 17:50:53 GMT
 *
 * \{"errored": false\}
 *
 *             </response>
 *             </example>
 *             <example>
 *              <name>Example 2</name>
 *             <description>
 *                 This example sets an invalid pipeline configuration and returns the associated set of validation errors.
 *             </description>
 *
 *             <request>
 *
 * POST / HTTP/1.1
 * Content-Type: application/x-amz-json-1.1
 * X-Amz-Target: DataPipeline.ValidatePipelineDefinition
 * Content-Length: 903
 * Host: datapipeline.us-east-1.amazonaws.com
 * X-Amz-Date: Mon, 12 Nov 2012 17:49:52 GMT
 * Authorization: AuthParams
 *
 * \{"pipelineId": "df-06372391ZG65EXAMPLE",
 *  "pipelineObjects":
 *   [
 *     \{"id": "Default",
 *      "name": "Default",
 *      "fields":
 *       [
 *         \{"key": "workerGroup",
 *          "stringValue": "MyworkerGroup"\}
 *       ]
 *     \},
 *     \{"id": "Schedule",
 *      "name": "Schedule",
 *      "fields":
 *       [
 *        \{"key": "startDateTime",
 *          "stringValue": "bad-time"\},
 *         \{"key": "type",
 *          "stringValue": "Schedule"\},
 *         \{"key": "period",
 *          "stringValue": "1 hour"\},
 *         \{"key": "endDateTime",
 *          "stringValue": "2012-09-25T18:00:00"\}
 *       ]
 *     \},
 *     \{"id": "SayHello",
 *      "name": "SayHello",
 *      "fields":
 *       [
 *         \{"key": "type",
 *          "stringValue": "ShellCommandActivity"\},
 *         \{"key": "command",
 *          "stringValue": "echo hello"\},
 *         \{"key": "parent",
 *          "refValue": "Default"\},
 *         \{"key": "schedule",
 *          "refValue": "Schedule"\}
 *
 *       ]
 *     \}
 *   ]
 * \}
 *
 *             </request>
 *             <response>
 *
 * x-amzn-RequestId: 496a1f5a-0e6a-11e2-a61c-bd6312c92ddd
 * Content-Type: application/x-amz-json-1.1
 * Content-Length: 278
 * Date: Mon, 12 Nov 2012 17:50:53 GMT
 *
 * \{"errored": true,
 *  "validationErrors":
 *   [
 *     \{"errors":
 *       ["INVALID_FIELD_VALUE:  'startDateTime' value must be a literal datetime value."],
 *      "id": "Schedule"\}
 *   ]
 * \}
 *
 *             </response>
 *                 </example>
 *         </examples>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataPipelineClient, ValidatePipelineDefinitionCommand } from "@aws-sdk/client-data-pipeline"; // ES Modules import
 * // const { DataPipelineClient, ValidatePipelineDefinitionCommand } = require("@aws-sdk/client-data-pipeline"); // CommonJS import
 * const client = new DataPipelineClient(config);
 * const input = { // ValidatePipelineDefinitionInput
 *   pipelineId: "STRING_VALUE", // required
 *   pipelineObjects: [ // PipelineObjectList // required
 *     { // PipelineObject
 *       id: "STRING_VALUE", // required
 *       name: "STRING_VALUE", // required
 *       fields: [ // fieldList // required
 *         { // Field
 *           key: "STRING_VALUE", // required
 *           stringValue: "STRING_VALUE",
 *           refValue: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   ],
 *   parameterObjects: [ // ParameterObjectList
 *     { // ParameterObject
 *       id: "STRING_VALUE", // required
 *       attributes: [ // ParameterAttributeList // required
 *         { // ParameterAttribute
 *           key: "STRING_VALUE", // required
 *           stringValue: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *   ],
 *   parameterValues: [ // ParameterValueList
 *     { // ParameterValue
 *       id: "STRING_VALUE", // required
 *       stringValue: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new ValidatePipelineDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // ValidatePipelineDefinitionOutput
 * //   validationErrors: [ // ValidationErrors
 * //     { // ValidationError
 * //       id: "STRING_VALUE",
 * //       errors: [ // validationMessages
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   validationWarnings: [ // ValidationWarnings
 * //     { // ValidationWarning
 * //       id: "STRING_VALUE",
 * //       warnings: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   errored: true || false, // required
 * // };
 *
 * ```
 *
 * @param ValidatePipelineDefinitionCommandInput - {@link ValidatePipelineDefinitionCommandInput}
 * @returns {@link ValidatePipelineDefinitionCommandOutput}
 * @see {@link ValidatePipelineDefinitionCommandInput} for command's `input` shape.
 * @see {@link ValidatePipelineDefinitionCommandOutput} for command's `response` shape.
 * @see {@link DataPipelineClientResolvedConfig | config} for DataPipelineClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request was not valid. Verify that your request was properly formatted, that the signature was generated with the correct credentials, and that you haven't exceeded any of the service limits for your account.</p>
 *
 * @throws {@link PipelineDeletedException} (client fault)
 *  <p>The specified pipeline has been deleted.</p>
 *
 * @throws {@link PipelineNotFoundException} (client fault)
 *  <p>The specified pipeline was not found. Verify that you used the correct user and account identifiers.</p>
 *
 * @throws {@link DataPipelineServiceException}
 * <p>Base exception class for all service exceptions from DataPipeline service.</p>
 *
 * @public
 */
export class ValidatePipelineDefinitionCommand extends $Command
  .classBuilder<
    ValidatePipelineDefinitionCommandInput,
    ValidatePipelineDefinitionCommandOutput,
    DataPipelineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DataPipelineClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DataPipeline", "ValidatePipelineDefinition", {})
  .n("DataPipelineClient", "ValidatePipelineDefinitionCommand")
  .f(void 0, void 0)
  .ser(se_ValidatePipelineDefinitionCommand)
  .de(de_ValidatePipelineDefinitionCommand)
  .build() {}
