// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteHostInput, DeleteHostOutput } from "../models/models_0";
import { DeleteHost$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteHostCommand}.
 */
export interface DeleteHostCommandInput extends DeleteHostInput {}
/**
 * @public
 *
 * The output of {@link DeleteHostCommand}.
 */
export interface DeleteHostCommandOutput extends DeleteHostOutput, __MetadataBearer {}

/**
 * The host to be deleted. Before you delete a host, all connections associated to the host must be deleted.
 *
 * > **Note:** A host cannot be deleted if it is in the VPC_CONFIG_INITIALIZING or VPC_CONFIG_DELETING state.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeConnectionsClient, DeleteHostCommand } from "@aws-sdk/client-codeconnections"; // ES Modules import
 * // const { CodeConnectionsClient, DeleteHostCommand } = require("@aws-sdk/client-codeconnections"); // CommonJS import
 * // import type { CodeConnectionsClientConfig } from "@aws-sdk/client-codeconnections";
 * const config = {}; // type is CodeConnectionsClientConfig
 * const client = new CodeConnectionsClient(config);
 * const input = { // DeleteHostInput
 *   HostArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteHostCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteHostCommandInput - {@link DeleteHostCommandInput}
 * @returns {@link DeleteHostCommandOutput}
 * @see {@link DeleteHostCommandInput} for command's `input` shape.
 * @see {@link DeleteHostCommandOutput} for command's `response` shape.
 * @see {@link CodeConnectionsClientResolvedConfig | config} for CodeConnectionsClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Resource not found. Verify the connection resource ARN and try again.
 *
 * @throws {@link ResourceUnavailableException} (client fault)
 *
 * Resource not found. Verify the ARN for the host resource and try again.
 *
 * @throws {@link CodeConnectionsServiceException}
 *
 * Base exception class for all service exceptions from CodeConnections service.
 *
 * @public
 */
export class DeleteHostCommand extends command<DeleteHostCommandInput, DeleteHostCommandOutput>(
  _ep0,
  _mw0,
  "DeleteHost",
  DeleteHost$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteHostInput;
      output: {};
    };
    sdk: {
      input: DeleteHostCommandInput;
      output: DeleteHostCommandOutput;
    };
  };
}
