// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ExecuteCoreNetworkChangeSetRequest, ExecuteCoreNetworkChangeSetResponse } from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import {
  de_ExecuteCoreNetworkChangeSetCommand,
  se_ExecuteCoreNetworkChangeSetCommand,
} from "../protocols/Aws_restJson1";

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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("NetworkManager", "ExecuteCoreNetworkChangeSet", {})
  .n("NetworkManagerClient", "ExecuteCoreNetworkChangeSetCommand")
  .f(void 0, void 0)
  .ser(se_ExecuteCoreNetworkChangeSetCommand)
  .de(de_ExecuteCoreNetworkChangeSetCommand)
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
