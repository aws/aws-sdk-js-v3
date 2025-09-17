// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataPipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataPipelineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeObjectsInput, DescribeObjectsOutput } from "../models/models_0";
import { de_DescribeObjectsCommand, se_DescribeObjectsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeObjectsCommand}.
 */
export interface DescribeObjectsCommandInput extends DescribeObjectsInput {}
/**
 * @public
 *
 * The output of {@link DescribeObjectsCommand}.
 */
export interface DescribeObjectsCommandOutput extends DescribeObjectsOutput, __MetadataBearer {}

/**
 * <p>Gets the object definitions for a set of objects associated with the pipeline. Object definitions are composed of
 *             a set of fields that define the properties of the object.</p>
 *
 *         <examples>
 *             <request>
 *
 * POST / HTTP/1.1
 * Content-Type: application/x-amz-json-1.1
 * X-Amz-Target: DataPipeline.DescribeObjects
 * Content-Length: 98
 * Host: datapipeline.us-east-1.amazonaws.com
 * X-Amz-Date: Mon, 12 Nov 2012 17:49:52 GMT
 * Authorization: AuthParams
 *
 * \{"pipelineId": "df-06372391ZG65EXAMPLE",
 *  "objectIds":
 *   ["Schedule"],
 *  "evaluateExpressions": true\}
 *
 *             </request>
 *
 *             <response>
 *
 * x-amzn-RequestId: 4c18ea5d-0777-11e2-8a14-21bb8a1f50ef
 * Content-Type: application/x-amz-json-1.1
 * Content-Length: 1488
 * Date: Mon, 12 Nov 2012 17:50:53 GMT
 *
 * \{"hasMoreResults": false,
 *  "pipelineObjects":
 *   [
 *     \{"fields":
 *       [
 *         \{"key": "startDateTime",
 *          "stringValue": "2012-12-12T00:00:00"\},
 *         \{"key": "parent",
 *          "refValue": "Default"\},
 *         \{"key": "@sphere",
 *          "stringValue": "COMPONENT"\},
 *         \{"key": "type",
 *          "stringValue": "Schedule"\},
 *         \{"key": "period",
 *          "stringValue": "1 hour"\},
 *         \{"key": "endDateTime",
 *          "stringValue": "2012-12-21T18:00:00"\},
 *         \{"key": "@version",
 *          "stringValue": "1"\},
 *         \{"key": "@status",
 *          "stringValue": "PENDING"\},
 *         \{"key": "@pipelineId",
 *          "stringValue": "df-06372391ZG65EXAMPLE"\}
 *       ],
 *      "id": "Schedule",
 *      "name": "Schedule"\}
 *   ]
 * \}
 *
 *             </response>
 *         </examples>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataPipelineClient, DescribeObjectsCommand } from "@aws-sdk/client-data-pipeline"; // ES Modules import
 * // const { DataPipelineClient, DescribeObjectsCommand } = require("@aws-sdk/client-data-pipeline"); // CommonJS import
 * // import type { DataPipelineClientConfig } from "@aws-sdk/client-data-pipeline";
 * const config = {}; // type is DataPipelineClientConfig
 * const client = new DataPipelineClient(config);
 * const input = { // DescribeObjectsInput
 *   pipelineId: "STRING_VALUE", // required
 *   objectIds: [ // idList // required
 *     "STRING_VALUE",
 *   ],
 *   evaluateExpressions: true || false,
 *   marker: "STRING_VALUE",
 * };
 * const command = new DescribeObjectsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeObjectsOutput
 * //   pipelineObjects: [ // PipelineObjectList // required
 * //     { // PipelineObject
 * //       id: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       fields: [ // fieldList // required
 * //         { // Field
 * //           key: "STRING_VALUE", // required
 * //           stringValue: "STRING_VALUE",
 * //           refValue: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   marker: "STRING_VALUE",
 * //   hasMoreResults: true || false,
 * // };
 *
 * ```
 *
 * @param DescribeObjectsCommandInput - {@link DescribeObjectsCommandInput}
 * @returns {@link DescribeObjectsCommandOutput}
 * @see {@link DescribeObjectsCommandInput} for command's `input` shape.
 * @see {@link DescribeObjectsCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class DescribeObjectsCommand extends $Command
  .classBuilder<
    DescribeObjectsCommandInput,
    DescribeObjectsCommandOutput,
    DataPipelineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataPipelineClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DataPipeline", "DescribeObjects", {})
  .n("DataPipelineClient", "DescribeObjectsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeObjectsCommand)
  .de(de_DescribeObjectsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeObjectsInput;
      output: DescribeObjectsOutput;
    };
    sdk: {
      input: DescribeObjectsCommandInput;
      output: DescribeObjectsCommandOutput;
    };
  };
}
