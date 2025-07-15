// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteDirectQueryDataSourceRequest } from "../models/models_0";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import {
  de_DeleteDirectQueryDataSourceCommand,
  se_DeleteDirectQueryDataSourceCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDirectQueryDataSourceCommand}.
 */
export interface DeleteDirectQueryDataSourceCommandInput extends DeleteDirectQueryDataSourceRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDirectQueryDataSourceCommand}.
 */
export interface DeleteDirectQueryDataSourceCommandOutput extends __MetadataBearer {}

/**
 * <p> Deletes a previously configured direct query data source from Amazon OpenSearch Service.
 *   </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, DeleteDirectQueryDataSourceCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, DeleteDirectQueryDataSourceCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * const client = new OpenSearchClient(config);
 * const input = { // DeleteDirectQueryDataSourceRequest
 *   DataSourceName: "STRING_VALUE", // required
 * };
 * const command = new DeleteDirectQueryDataSourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDirectQueryDataSourceCommandInput - {@link DeleteDirectQueryDataSourceCommandInput}
 * @returns {@link DeleteDirectQueryDataSourceCommandOutput}
 * @see {@link DeleteDirectQueryDataSourceCommandInput} for command's `input` shape.
 * @see {@link DeleteDirectQueryDataSourceCommandOutput} for command's `response` shape.
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
export class DeleteDirectQueryDataSourceCommand extends $Command
  .classBuilder<
    DeleteDirectQueryDataSourceCommandInput,
    DeleteDirectQueryDataSourceCommandOutput,
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
  .s("AmazonOpenSearchService", "DeleteDirectQueryDataSource", {})
  .n("OpenSearchClient", "DeleteDirectQueryDataSourceCommand")
  .f(void 0, void 0)
  .ser(se_DeleteDirectQueryDataSourceCommand)
  .de(de_DeleteDirectQueryDataSourceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDirectQueryDataSourceRequest;
      output: {};
    };
    sdk: {
      input: DeleteDirectQueryDataSourceCommandInput;
      output: DeleteDirectQueryDataSourceCommandOutput;
    };
  };
}
