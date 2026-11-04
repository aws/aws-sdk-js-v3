// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutPipelineDefinitionInput, PutPipelineDefinitionOutput } from "../models/models_0";
import { PutPipelineDefinition$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutPipelineDefinitionCommand}.
 */
export interface PutPipelineDefinitionCommandInput extends PutPipelineDefinitionInput {}
/**
 * @public
 *
 * The output of {@link PutPipelineDefinitionCommand}.
 */
export interface PutPipelineDefinitionCommandOutput extends PutPipelineDefinitionOutput, __MetadataBearer {}

/**
 * Adds tasks, schedules, and preconditions to the specified pipeline. You can use `PutPipelineDefinition` to populate a new pipeline.
 *
 * `PutPipelineDefinition` also validates the configuration as it adds it to the pipeline. Changes to the pipeline are saved unless one of the following three validation errors exists in the pipeline.
 *
 * 1. An object is missing a name or identifier field.
 * 2. A string or reference field is empty.
 * 3. The number of objects in the pipeline exceeds the maximum allowed objects.
 * 4. The pipeline is in a FINISHED state.
 *
 * Pipeline object definitions are passed to the `PutPipelineDefinition` action and returned by the GetPipelineDefinition action.
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
 * X-Amz-Target: DataPipeline.PutPipelineDefinition
 * Content-Length: 914
 * Host: datapipeline.us-east-1.amazonaws.com
 * X-Amz-Date: Mon, 12 Nov 2012 17:49:52 GMT
 * Authorization: AuthParams
 *
 * \{"pipelineId": "df-0937003356ZJEXAMPLE",
 *  "pipelineObjects":
 *   [
 *    \{"id": "Default",
 *      "name": "Default",
 *      "fields":
 *       [
 *         \{"key": "workerGroup",
 *          "stringValue": "workerGroup"\}
 *       ]
 *     \},
 *     \{"id": "Schedule",
 *      "name": "Schedule",
 *      "fields":
 *       [
 *        \{"key": "startDateTime",
 *          "stringValue": "2012-12-12T00:00:00"\},
 *         \{"key": "type",
 *          "stringValue": "Schedule"\},
 *         \{"key": "period",
 *          "stringValue": "1 hour"\},
 *         \{"key": "endDateTime",
 *          "stringValue": "2012-12-21T18:00:00"\}
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
 *       ]
 *     \}
 *   ]
 * \}
 *
 *             </request>
 *             <response>
 *
 * HTTP/1.1 200
 * x-amzn-RequestId: f74afc14-0754-11e2-af6f-6bc7a6be60d9
 * Content-Type: application/x-amz-json-1.1
 * Content-Length: 18
 * Date: Mon, 12 Nov 2012 17:50:53 GMT
 *
 * \{"errored": false\}
 *
 *
 *             </response>
 *             </example>
 *             <example>
 *                 <name>Example 2</name>
 *                 <description>
 *                     This example sets an invalid pipeline configuration (the value for `workerGroup` is an empty string) and returns an error message.
 *                 </description>
 *                 <request>
 *
 * POST / HTTP/1.1
 * Content-Type: application/x-amz-json-1.1
 * X-Amz-Target: DataPipeline.PutPipelineDefinition
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
 *          "stringValue": ""\}
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
 *                 </request>
 *                 <response>
 *
 * HTTP/1.1 200
 * x-amzn-RequestId: f74afc14-0754-11e2-af6f-6bc7a6be60d9
 * Content-Type: application/x-amz-json-1.1
 * Content-Length: 18
 * Date: Mon, 12 Nov 2012 17:50:53 GMT
 *
 * \{"__type": "com.amazon.setl.webservice#InvalidRequestException",
 *  "message": "Pipeline definition has errors: Could not save the pipeline definition due to FATAL errors: [com.amazon.setl.webservice.ValidationError@108d7ea9] Please call Validate to validate your pipeline"\}
 *
 *
 *                 </response>
 *             </example>
 *         </examples>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataPipelineClient, PutPipelineDefinitionCommand } from "@aws-sdk/client-data-pipeline"; // ES Modules import
 * // const { DataPipelineClient, PutPipelineDefinitionCommand } = require("@aws-sdk/client-data-pipeline"); // CommonJS import
 * // import type { DataPipelineClientConfig } from "@aws-sdk/client-data-pipeline";
 * const config = {}; // type is DataPipelineClientConfig
 * const client = new DataPipelineClient(config);
 * const input = { // PutPipelineDefinitionInput
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
 * const command = new PutPipelineDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // PutPipelineDefinitionOutput
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
 * @param PutPipelineDefinitionCommandInput - {@link PutPipelineDefinitionCommandInput}
 * @returns {@link PutPipelineDefinitionCommandOutput}
 * @see {@link PutPipelineDefinitionCommandInput} for command's `input` shape.
 * @see {@link PutPipelineDefinitionCommandOutput} for command's `response` shape.
 * @see {@link DataPipelineClientResolvedConfig | config} for DataPipelineClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request was not valid. Verify that your request was properly formatted, that the signature was generated with the correct credentials, and that you haven't exceeded any of the service limits for your account.
 *
 * @throws {@link PipelineDeletedException} (client fault)
 *
 * The specified pipeline has been deleted.
 *
 * @throws {@link PipelineNotFoundException} (client fault)
 *
 * The specified pipeline was not found. Verify that you used the correct user and account identifiers.
 *
 * @throws {@link DataPipelineServiceException}
 *
 * Base exception class for all service exceptions from DataPipeline service.
 *
 * @public
 */
export class PutPipelineDefinitionCommand extends command<PutPipelineDefinitionCommandInput, PutPipelineDefinitionCommandOutput>(
  _ep0,
  _mw0,
  "PutPipelineDefinition",
  PutPipelineDefinition$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutPipelineDefinitionInput;
      output: PutPipelineDefinitionOutput;
    };
    sdk: {
      input: PutPipelineDefinitionCommandInput;
      output: PutPipelineDefinitionCommandOutput;
    };
  };
}
