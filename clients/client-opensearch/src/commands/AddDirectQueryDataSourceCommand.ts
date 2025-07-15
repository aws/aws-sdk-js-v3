// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { AddDirectQueryDataSourceRequest, AddDirectQueryDataSourceResponse } from "../models/models_0";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { de_AddDirectQueryDataSourceCommand, se_AddDirectQueryDataSourceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AddDirectQueryDataSourceCommand}.
 */
export interface AddDirectQueryDataSourceCommandInput extends AddDirectQueryDataSourceRequest {}
/**
 * @public
 *
 * The output of {@link AddDirectQueryDataSourceCommand}.
 */
export interface AddDirectQueryDataSourceCommandOutput extends AddDirectQueryDataSourceResponse, __MetadataBearer {}

/**
 * <p> Adds a new data source in Amazon OpenSearch Service so that you can perform direct queries
 *    on external data. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, AddDirectQueryDataSourceCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, AddDirectQueryDataSourceCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * const client = new OpenSearchClient(config);
 * const input = { // AddDirectQueryDataSourceRequest
 *   DataSourceName: "STRING_VALUE", // required
 *   DataSourceType: { // DirectQueryDataSourceType Union: only one key present
 *     CloudWatchLog: { // CloudWatchDirectQueryDataSource
 *       RoleArn: "STRING_VALUE", // required
 *     },
 *     SecurityLake: { // SecurityLakeDirectQueryDataSource
 *       RoleArn: "STRING_VALUE", // required
 *     },
 *   },
 *   Description: "STRING_VALUE",
 *   OpenSearchArns: [ // DirectQueryOpenSearchARNList // required
 *     "STRING_VALUE",
 *   ],
 *   TagList: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new AddDirectQueryDataSourceCommand(input);
 * const response = await client.send(command);
 * // { // AddDirectQueryDataSourceResponse
 * //   DataSourceArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AddDirectQueryDataSourceCommandInput - {@link AddDirectQueryDataSourceCommandInput}
 * @returns {@link AddDirectQueryDataSourceCommandOutput}
 * @see {@link AddDirectQueryDataSourceCommandInput} for command's `input` shape.
 * @see {@link AddDirectQueryDataSourceCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>An exception for trying to create more than the allowed number of resources or sub-resources.</p>
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
export class AddDirectQueryDataSourceCommand extends $Command
  .classBuilder<
    AddDirectQueryDataSourceCommandInput,
    AddDirectQueryDataSourceCommandOutput,
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
  .s("AmazonOpenSearchService", "AddDirectQueryDataSource", {})
  .n("OpenSearchClient", "AddDirectQueryDataSourceCommand")
  .f(void 0, void 0)
  .ser(se_AddDirectQueryDataSourceCommand)
  .de(de_AddDirectQueryDataSourceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddDirectQueryDataSourceRequest;
      output: AddDirectQueryDataSourceResponse;
    };
    sdk: {
      input: AddDirectQueryDataSourceCommandInput;
      output: AddDirectQueryDataSourceCommandOutput;
    };
  };
}
