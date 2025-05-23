// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  CodeStarConnectionsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CodeStarConnectionsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteRepositoryLinkInput, DeleteRepositoryLinkOutput } from "../models/models_0";
import { de_DeleteRepositoryLinkCommand, se_DeleteRepositoryLinkCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteRepositoryLinkCommand}.
 */
export interface DeleteRepositoryLinkCommandInput extends DeleteRepositoryLinkInput {}
/**
 * @public
 *
 * The output of {@link DeleteRepositoryLinkCommand}.
 */
export interface DeleteRepositoryLinkCommandOutput extends DeleteRepositoryLinkOutput, __MetadataBearer {}

/**
 * <p>Deletes the association between your connection and a specified external Git repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarConnectionsClient, DeleteRepositoryLinkCommand } from "@aws-sdk/client-codestar-connections"; // ES Modules import
 * // const { CodeStarConnectionsClient, DeleteRepositoryLinkCommand } = require("@aws-sdk/client-codestar-connections"); // CommonJS import
 * const client = new CodeStarConnectionsClient(config);
 * const input = { // DeleteRepositoryLinkInput
 *   RepositoryLinkId: "STRING_VALUE", // required
 * };
 * const command = new DeleteRepositoryLinkCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRepositoryLinkCommandInput - {@link DeleteRepositoryLinkCommandInput}
 * @returns {@link DeleteRepositoryLinkCommandOutput}
 * @see {@link DeleteRepositoryLinkCommandInput} for command's `input` shape.
 * @see {@link DeleteRepositoryLinkCommandOutput} for command's `response` shape.
 * @see {@link CodeStarConnectionsClientResolvedConfig | config} for CodeStarConnectionsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Exception thrown as a result of concurrent modification to an application. For example, two individuals attempting to edit the same application at the same time. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Received an internal server exception. Try again later.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input is not valid. Verify that the action is typed correctly.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found. Verify the connection resource ARN and try again.</p>
 *
 * @throws {@link SyncConfigurationStillExistsException} (client fault)
 *  <p>Unable to continue. The sync blocker still exists.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link UnsupportedProviderTypeException} (client fault)
 *  <p>The specified provider type is not supported for connections.</p>
 *
 * @throws {@link CodeStarConnectionsServiceException}
 * <p>Base exception class for all service exceptions from CodeStarConnections service.</p>
 *
 *
 * @public
 */
export class DeleteRepositoryLinkCommand extends $Command
  .classBuilder<
    DeleteRepositoryLinkCommandInput,
    DeleteRepositoryLinkCommandOutput,
    CodeStarConnectionsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeStarConnectionsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeStar_connections_20191201", "DeleteRepositoryLink", {})
  .n("CodeStarConnectionsClient", "DeleteRepositoryLinkCommand")
  .f(void 0, void 0)
  .ser(se_DeleteRepositoryLinkCommand)
  .de(de_DeleteRepositoryLinkCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRepositoryLinkInput;
      output: {};
    };
    sdk: {
      input: DeleteRepositoryLinkCommandInput;
      output: DeleteRepositoryLinkCommandOutput;
    };
  };
}
