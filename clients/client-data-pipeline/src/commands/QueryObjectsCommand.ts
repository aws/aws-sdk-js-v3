// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataPipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataPipelineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { QueryObjectsInput, QueryObjectsOutput } from "../models/models_0";
import { QueryObjects } from "../schemas/schemas_1_Task";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link QueryObjectsCommand}.
 */
export interface QueryObjectsCommandInput extends QueryObjectsInput {}
/**
 * @public
 *
 * The output of {@link QueryObjectsCommand}.
 */
export interface QueryObjectsCommandOutput extends QueryObjectsOutput, __MetadataBearer {}

/**
 * <p>Queries the specified pipeline for the names of objects that match the specified set of conditions.</p>
 *
 *         <examples>
 *             <request>
 *
 * POST / HTTP/1.1
 * Content-Type: application/x-amz-json-1.1
 * X-Amz-Target: DataPipeline.QueryObjects
 * Content-Length: 123
 * Host: datapipeline.us-east-1.amazonaws.com
 * X-Amz-Date: Mon, 12 Nov 2012 17:49:52 GMT
 * Authorization: AuthParams
 *
 * \{"pipelineId": "df-06372391ZG65EXAMPLE",
 *  "query":
 *   \{"selectors":
 *     [
 *     ]
 *   \},
 *  "sphere": "INSTANCE",
 *  "marker": "",
 *  "limit": 10\}
 *
 *             </request>
 *
 *
 *             <response>
 *
 * x-amzn-RequestId: 14d704c1-0775-11e2-af6f-6bc7a6be60d9
 * Content-Type: application/x-amz-json-1.1
 * Content-Length: 72
 * Date: Mon, 12 Nov 2012 17:50:53 GMT
 *
 * \{"hasMoreResults": false,
 *  "ids":
 *   ["@SayHello_1_2012-09-25T17:00:00"]
 * \}
 *          </response>
 *         </examples>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataPipelineClient, QueryObjectsCommand } from "@aws-sdk/client-data-pipeline"; // ES Modules import
 * // const { DataPipelineClient, QueryObjectsCommand } = require("@aws-sdk/client-data-pipeline"); // CommonJS import
 * // import type { DataPipelineClientConfig } from "@aws-sdk/client-data-pipeline";
 * const config = {}; // type is DataPipelineClientConfig
 * const client = new DataPipelineClient(config);
 * const input = { // QueryObjectsInput
 *   pipelineId: "STRING_VALUE", // required
 *   query: { // Query
 *     selectors: [ // SelectorList
 *       { // Selector
 *         fieldName: "STRING_VALUE",
 *         operator: { // Operator
 *           type: "EQ" || "REF_EQ" || "LE" || "GE" || "BETWEEN",
 *           values: [ // stringList
 *             "STRING_VALUE",
 *           ],
 *         },
 *       },
 *     ],
 *   },
 *   sphere: "STRING_VALUE", // required
 *   marker: "STRING_VALUE",
 *   limit: Number("int"),
 * };
 * const command = new QueryObjectsCommand(input);
 * const response = await client.send(command);
 * // { // QueryObjectsOutput
 * //   ids: [ // idList
 * //     "STRING_VALUE",
 * //   ],
 * //   marker: "STRING_VALUE",
 * //   hasMoreResults: true || false,
 * // };
 *
 * ```
 *
 * @param QueryObjectsCommandInput - {@link QueryObjectsCommandInput}
 * @returns {@link QueryObjectsCommandOutput}
 * @see {@link QueryObjectsCommandInput} for command's `input` shape.
 * @see {@link QueryObjectsCommandOutput} for command's `response` shape.
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
export class QueryObjectsCommand extends $Command
  .classBuilder<
    QueryObjectsCommandInput,
    QueryObjectsCommandOutput,
    DataPipelineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataPipelineClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataPipeline", "QueryObjects", {})
  .n("DataPipelineClient", "QueryObjectsCommand")
  .sc(QueryObjects)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: QueryObjectsInput;
      output: QueryObjectsOutput;
    };
    sdk: {
      input: QueryObjectsCommandInput;
      output: QueryObjectsCommandOutput;
    };
  };
}
