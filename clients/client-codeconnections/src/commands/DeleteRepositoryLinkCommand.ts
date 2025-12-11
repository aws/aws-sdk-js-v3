// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CodeConnectionsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CodeConnectionsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteRepositoryLinkInput, DeleteRepositoryLinkOutput } from "../models/models_0";
import { DeleteRepositoryLink } from "../schemas/schemas_0";

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
 * import { CodeConnectionsClient, DeleteRepositoryLinkCommand } from "@aws-sdk/client-codeconnections"; // ES Modules import
 * // const { CodeConnectionsClient, DeleteRepositoryLinkCommand } = require("@aws-sdk/client-codeconnections"); // CommonJS import
 * // import type { CodeConnectionsClientConfig } from "@aws-sdk/client-codeconnections";
 * const config = {}; // type is CodeConnectionsClientConfig
 * const client = new CodeConnectionsClient(config);
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
 * @see {@link CodeConnectionsClientResolvedConfig | config} for CodeConnectionsClient's `config` shape.
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
 * @throws {@link CodeConnectionsServiceException}
 * <p>Base exception class for all service exceptions from CodeConnections service.</p>
 *
 *
 * @public
 */
export class DeleteRepositoryLinkCommand extends $Command
  .classBuilder<
    DeleteRepositoryLinkCommandInput,
    DeleteRepositoryLinkCommandOutput,
    CodeConnectionsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeConnectionsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeConnections_20231201", "DeleteRepositoryLink", {})
  .n("CodeConnectionsClient", "DeleteRepositoryLinkCommand")
  .sc(DeleteRepositoryLink)
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
