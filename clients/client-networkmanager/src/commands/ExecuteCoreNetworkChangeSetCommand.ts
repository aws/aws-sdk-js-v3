// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ExecuteCoreNetworkChangeSetRequest, ExecuteCoreNetworkChangeSetResponse } from "../models/models_0";
import { ExecuteCoreNetworkChangeSet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ExecuteCoreNetworkChangeSetCommand}.
 */
export interface ExecuteCoreNetworkChangeSetCommandInput extends ExecuteCoreNetworkChangeSetRequest {}
/**
 * @public
 *
 * The output of {@link ExecuteCoreNetworkChangeSetCommand}.
 */
export interface ExecuteCoreNetworkChangeSetCommandOutput extends ExecuteCoreNetworkChangeSetResponse, __MetadataBearer {}

/**
 * Executes a change set on your core network. Deploys changes globally based on the policy submitted..
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, ExecuteCoreNetworkChangeSetCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, ExecuteCoreNetworkChangeSetCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // ExecuteCoreNetworkChangeSetRequest
 *   CoreNetworkId: "STRING_VALUE", // required
 *   PolicyVersionId: Number("int"), // required
 * };
 * const command = new ExecuteCoreNetworkChangeSetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ExecuteCoreNetworkChangeSetCommandInput - {@link ExecuteCoreNetworkChangeSetCommandInput}
 * @returns {@link ExecuteCoreNetworkChangeSetCommandOutput}
 * @see {@link ExecuteCoreNetworkChangeSetCommandInput} for command's `input` shape.
 * @see {@link ExecuteCoreNetworkChangeSetCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There was a conflict processing the request. Updating or deleting the resource can cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed due to an internal error.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource could not be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints.
 *
 * @throws {@link NetworkManagerServiceException}
 *
 * Base exception class for all service exceptions from NetworkManager service.
 *
 * @public
 */
export class ExecuteCoreNetworkChangeSetCommand extends command<ExecuteCoreNetworkChangeSetCommandInput, ExecuteCoreNetworkChangeSetCommandOutput>(
  _ep0,
  _mw0,
  "ExecuteCoreNetworkChangeSet",
  ExecuteCoreNetworkChangeSet$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ExecuteCoreNetworkChangeSetRequest;
      output: {};
    };
    sdk: {
      input: ExecuteCoreNetworkChangeSetCommandInput;
      output: ExecuteCoreNetworkChangeSetCommandOutput;
    };
  };
}
