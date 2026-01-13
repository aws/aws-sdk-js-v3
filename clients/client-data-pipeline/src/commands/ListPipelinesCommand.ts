// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DataPipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataPipelineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListPipelinesInput, ListPipelinesOutput } from "../models/models_0";
import { ListPipelines$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPipelinesCommand}.
 */
export interface ListPipelinesCommandInput extends ListPipelinesInput {}
/**
 * @public
 *
 * The output of {@link ListPipelinesCommand}.
 */
export interface ListPipelinesCommandOutput extends ListPipelinesOutput, __MetadataBearer {}

/**
 * <p>Lists the pipeline identifiers for all active pipelines that you have permission to access.</p>
 *
 *         <examples>
 *             <request>
 *
 * POST / HTTP/1.1
 * Content-Type: application/x-amz-json-1.1
 * X-Amz-Target: DataPipeline.ListPipelines
 * Content-Length: 14
 * Host: datapipeline.us-east-1.amazonaws.com
 * X-Amz-Date: Mon, 12 Nov 2012 17:49:52 GMT
 * Authorization: AuthParams
 *
 * \{\}</request>
 *
 *             <response>
 *
 * Status:
 * x-amzn-RequestId: b3104dc5-0734-11e2-af6f-6bc7a6be60d9
 * Content-Type: application/x-amz-json-1.1
 * Content-Length: 39
 * Date: Mon, 12 Nov 2012 17:50:53 GMT
 *
 * \{"PipelineIdList":
 *   [
 *     \{"id": "df-08785951KAKJEXAMPLE",
 *      "name": "MyPipeline"\},
 *     \{"id": "df-08662578ISYEXAMPLE",
 *      "name": "MySecondPipeline"\}
 *   ]
 * \}</response>
 *         </examples>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataPipelineClient, ListPipelinesCommand } from "@aws-sdk/client-data-pipeline"; // ES Modules import
 * // const { DataPipelineClient, ListPipelinesCommand } = require("@aws-sdk/client-data-pipeline"); // CommonJS import
 * // import type { DataPipelineClientConfig } from "@aws-sdk/client-data-pipeline";
 * const config = {}; // type is DataPipelineClientConfig
 * const client = new DataPipelineClient(config);
 * const input = { // ListPipelinesInput
 *   marker: "STRING_VALUE",
 * };
 * const command = new ListPipelinesCommand(input);
 * const response = await client.send(command);
 * // { // ListPipelinesOutput
 * //   pipelineIdList: [ // pipelineList // required
 * //     { // PipelineIdName
 * //       id: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //     },
 * //   ],
 * //   marker: "STRING_VALUE",
 * //   hasMoreResults: true || false,
 * // };
 *
 * ```
 *
 * @param ListPipelinesCommandInput - {@link ListPipelinesCommandInput}
 * @returns {@link ListPipelinesCommandOutput}
 * @see {@link ListPipelinesCommandInput} for command's `input` shape.
 * @see {@link ListPipelinesCommandOutput} for command's `response` shape.
 * @see {@link DataPipelineClientResolvedConfig | config} for DataPipelineClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request was not valid. Verify that your request was properly formatted, that the signature was generated with the correct credentials, and that you haven't exceeded any of the service limits for your account.</p>
 *
 * @throws {@link DataPipelineServiceException}
 * <p>Base exception class for all service exceptions from DataPipeline service.</p>
 *
 *
 * @public
 */
export class ListPipelinesCommand extends $Command
  .classBuilder<
    ListPipelinesCommandInput,
    ListPipelinesCommandOutput,
    DataPipelineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataPipelineClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataPipeline", "ListPipelines", {})
  .n("DataPipelineClient", "ListPipelinesCommand")
  .sc(ListPipelines$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPipelinesInput;
      output: ListPipelinesOutput;
    };
    sdk: {
      input: ListPipelinesCommandInput;
      output: ListPipelinesCommandOutput;
    };
  };
}
