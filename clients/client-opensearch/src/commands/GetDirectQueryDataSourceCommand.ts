// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetDirectQueryDataSourceRequest, GetDirectQueryDataSourceResponse } from "../models/models_0";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { de_GetDirectQueryDataSourceCommand, se_GetDirectQueryDataSourceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDirectQueryDataSourceCommand}.
 */
export interface GetDirectQueryDataSourceCommandInput extends GetDirectQueryDataSourceRequest {}
/**
 * @public
 *
 * The output of {@link GetDirectQueryDataSourceCommand}.
 */
export interface GetDirectQueryDataSourceCommandOutput extends GetDirectQueryDataSourceResponse, __MetadataBearer {}

/**
 * <p> Returns detailed configuration information for a specific direct query data source in
 *    Amazon OpenSearch Service. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, GetDirectQueryDataSourceCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, GetDirectQueryDataSourceCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * const client = new OpenSearchClient(config);
 * const input = { // GetDirectQueryDataSourceRequest
 *   DataSourceName: "STRING_VALUE", // required
 * };
 * const command = new GetDirectQueryDataSourceCommand(input);
 * const response = await client.send(command);
 * // { // GetDirectQueryDataSourceResponse
 * //   DataSourceName: "STRING_VALUE",
 * //   DataSourceType: { // DirectQueryDataSourceType Union: only one key present
 * //     CloudWatchLog: { // CloudWatchDirectQueryDataSource
 * //       RoleArn: "STRING_VALUE", // required
 * //     },
 * //     SecurityLake: { // SecurityLakeDirectQueryDataSource
 * //       RoleArn: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   Description: "STRING_VALUE",
 * //   OpenSearchArns: [ // DirectQueryOpenSearchARNList
 * //     "STRING_VALUE",
 * //   ],
 * //   DataSourceArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDirectQueryDataSourceCommandInput - {@link GetDirectQueryDataSourceCommandInput}
 * @returns {@link GetDirectQueryDataSourceCommandOutput}
 * @see {@link GetDirectQueryDataSourceCommandInput} for command's `input` shape.
 * @see {@link GetDirectQueryDataSourceCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link DisabledOperationException} (client fault)
 *  <p>An error occured because the client wanted to access an unsupported operation.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Request processing failed because of an unknown error, exception, or internal failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link OpenSearchServiceException}
 * <p>Base exception class for all service exceptions from OpenSearch service.</p>
 *
 *
 * @public
 */
export class GetDirectQueryDataSourceCommand extends $Command
  .classBuilder<
    GetDirectQueryDataSourceCommandInput,
    GetDirectQueryDataSourceCommandOutput,
    OpenSearchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OpenSearchClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonOpenSearchService", "GetDirectQueryDataSource", {})
  .n("OpenSearchClient", "GetDirectQueryDataSourceCommand")
  .f(void 0, void 0)
  .ser(se_GetDirectQueryDataSourceCommand)
  .de(de_GetDirectQueryDataSourceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDirectQueryDataSourceRequest;
      output: GetDirectQueryDataSourceResponse;
    };
    sdk: {
      input: GetDirectQueryDataSourceCommandInput;
      output: GetDirectQueryDataSourceCommandOutput;
    };
  };
}
