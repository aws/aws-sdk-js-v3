// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteSyncConfigurationInput, DeleteSyncConfigurationOutput } from "../models/models_0";
import { DeleteSyncConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteSyncConfigurationCommand}.
 */
export interface DeleteSyncConfigurationCommandInput extends DeleteSyncConfigurationInput {}
/**
 * @public
 *
 * The output of {@link DeleteSyncConfigurationCommand}.
 */
export interface DeleteSyncConfigurationCommandOutput extends DeleteSyncConfigurationOutput, __MetadataBearer {}

/**
 * Deletes the sync configuration for a specified repository and connection.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarConnectionsClient, DeleteSyncConfigurationCommand } from "@aws-sdk/client-codestar-connections"; // ES Modules import
 * // const { CodeStarConnectionsClient, DeleteSyncConfigurationCommand } = require("@aws-sdk/client-codestar-connections"); // CommonJS import
 * // import type { CodeStarConnectionsClientConfig } from "@aws-sdk/client-codestar-connections";
 * const config = {}; // type is CodeStarConnectionsClientConfig
 * const client = new CodeStarConnectionsClient(config);
 * const input = { // DeleteSyncConfigurationInput
 *   SyncType: "CFN_STACK_SYNC", // required
 *   ResourceName: "STRING_VALUE", // required
 * };
 * const command = new DeleteSyncConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSyncConfigurationCommandInput - {@link DeleteSyncConfigurationCommandInput}
 * @returns {@link DeleteSyncConfigurationCommandOutput}
 * @see {@link DeleteSyncConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteSyncConfigurationCommandOutput} for command's `response` shape.
 * @see {@link CodeStarConnectionsClientResolvedConfig | config} for CodeStarConnectionsClient's `config` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *
 * Exceeded the maximum limit for connections.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link CodeStarConnectionsServiceException}
 *
 * Base exception class for all service exceptions from CodeStarConnections service.
 *
 * @public
 */
export class DeleteSyncConfigurationCommand extends command<DeleteSyncConfigurationCommandInput, DeleteSyncConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteSyncConfiguration",
  DeleteSyncConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSyncConfigurationInput;
      output: {};
    };
    sdk: {
      input: DeleteSyncConfigurationCommandInput;
      output: DeleteSyncConfigurationCommandOutput;
    };
  };
}
