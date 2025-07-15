// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateDirectQueryDataSourceRequest, UpdateDirectQueryDataSourceResponse } from "../models/models_1";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import {
  de_UpdateDirectQueryDataSourceCommand,
  se_UpdateDirectQueryDataSourceCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDirectQueryDataSourceCommand}.
 */
export interface UpdateDirectQueryDataSourceCommandInput extends UpdateDirectQueryDataSourceRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDirectQueryDataSourceCommand}.
 */
export interface UpdateDirectQueryDataSourceCommandOutput
  extends UpdateDirectQueryDataSourceResponse,
    __MetadataBearer {}

/**
 * <p> Updates the configuration or properties of an existing direct query data source in Amazon
 *    OpenSearch Service. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, UpdateDirectQueryDataSourceCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, UpdateDirectQueryDataSourceCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * const client = new OpenSearchClient(config);
 * const input = { // UpdateDirectQueryDataSourceRequest
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
 * };
 * const command = new UpdateDirectQueryDataSourceCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDirectQueryDataSourceResponse
 * //   DataSourceArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateDirectQueryDataSourceCommandInput - {@link UpdateDirectQueryDataSourceCommandInput}
 * @returns {@link UpdateDirectQueryDataSourceCommandOutput}
 * @see {@link UpdateDirectQueryDataSourceCommandInput} for command's `input` shape.
 * @see {@link UpdateDirectQueryDataSourceCommandOutput} for command's `response` shape.
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
export class UpdateDirectQueryDataSourceCommand extends $Command
  .classBuilder<
    UpdateDirectQueryDataSourceCommandInput,
    UpdateDirectQueryDataSourceCommandOutput,
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
  .s("AmazonOpenSearchService", "UpdateDirectQueryDataSource", {})
  .n("OpenSearchClient", "UpdateDirectQueryDataSourceCommand")
  .f(void 0, void 0)
  .ser(se_UpdateDirectQueryDataSourceCommand)
  .de(de_UpdateDirectQueryDataSourceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDirectQueryDataSourceRequest;
      output: UpdateDirectQueryDataSourceResponse;
    };
    sdk: {
      input: UpdateDirectQueryDataSourceCommandInput;
      output: UpdateDirectQueryDataSourceCommandOutput;
    };
  };
}
