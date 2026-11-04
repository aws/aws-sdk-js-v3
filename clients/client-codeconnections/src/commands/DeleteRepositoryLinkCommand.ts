// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteRepositoryLinkInput, DeleteRepositoryLinkOutput } from "../models/models_0";
import { DeleteRepositoryLink$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes the association between your connection and a specified external Git repository.
 *
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * Exception thrown as a result of concurrent modification to an application. For example, two individuals attempting to edit the same application at the same time.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Received an internal server exception. Try again later.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The input is not valid. Verify that the action is typed correctly.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Resource not found. Verify the connection resource ARN and try again.
 *
 * @throws {@link SyncConfigurationStillExistsException} (client fault)
 *
 * Unable to continue. The sync blocker still exists.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link UnsupportedProviderTypeException} (client fault)
 *
 * The specified provider type is not supported for connections.
 *
 * @throws {@link CodeConnectionsServiceException}
 *
 * Base exception class for all service exceptions from CodeConnections service.
 *
 * @public
 */
export class DeleteRepositoryLinkCommand extends command<DeleteRepositoryLinkCommandInput, DeleteRepositoryLinkCommandOutput>(
  _ep0,
  _mw0,
  "DeleteRepositoryLink",
  DeleteRepositoryLink$
) {
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
