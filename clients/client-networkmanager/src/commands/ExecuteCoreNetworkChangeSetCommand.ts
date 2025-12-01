// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ExecuteCoreNetworkChangeSetRequest, ExecuteCoreNetworkChangeSetResponse } from "../models/models_0";
import type {
  NetworkManagerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../NetworkManagerClient";
import { ExecuteCoreNetworkChangeSet } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface ExecuteCoreNetworkChangeSetCommandOutput
  extends ExecuteCoreNetworkChangeSetResponse,
    __MetadataBearer {}

/**
 * <p>Executes a change set on your core network. Deploys changes globally based on the policy submitted..</p>
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict processing the request. Updating or deleting the resource can
 *             cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints.</p>
 *
 * @throws {@link NetworkManagerServiceException}
 * <p>Base exception class for all service exceptions from NetworkManager service.</p>
 *
 *
 * @public
 */
export class ExecuteCoreNetworkChangeSetCommand extends $Command
  .classBuilder<
    ExecuteCoreNetworkChangeSetCommandInput,
    ExecuteCoreNetworkChangeSetCommandOutput,
    NetworkManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkManager", "ExecuteCoreNetworkChangeSet", {})
  .n("NetworkManagerClient", "ExecuteCoreNetworkChangeSetCommand")
  .sc(ExecuteCoreNetworkChangeSet)
  .build() {
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
