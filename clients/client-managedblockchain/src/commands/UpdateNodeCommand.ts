// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ManagedBlockchainClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ManagedBlockchainClient";
import { UpdateNodeInput, UpdateNodeOutput } from "../models/models_0";
import { de_UpdateNodeCommand, se_UpdateNodeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateNodeCommand}.
 */
export interface UpdateNodeCommandInput extends UpdateNodeInput {}
/**
 * @public
 *
 * The output of {@link UpdateNodeCommand}.
 */
export interface UpdateNodeCommandOutput extends UpdateNodeOutput, __MetadataBearer {}

/**
 * <p>Updates a node configuration with new parameters.</p>
 *          <p>Applies only to Hyperledger Fabric.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainClient, UpdateNodeCommand } from "@aws-sdk/client-managedblockchain"; // ES Modules import
 * // const { ManagedBlockchainClient, UpdateNodeCommand } = require("@aws-sdk/client-managedblockchain"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ManagedBlockchainClient(config);
 * const input = { // UpdateNodeInput
 *   NetworkId: "STRING_VALUE", // required
 *   MemberId: "STRING_VALUE",
 *   NodeId: "STRING_VALUE", // required
 *   LogPublishingConfiguration: { // NodeLogPublishingConfiguration
 *     Fabric: { // NodeFabricLogPublishingConfiguration
 *       ChaincodeLogs: { // LogConfigurations
 *         Cloudwatch: { // LogConfiguration
 *           Enabled: true || false,
 *         },
 *       },
 *       PeerLogs: {
 *         Cloudwatch: {
 *           Enabled: true || false,
 *         },
 *       },
 *     },
 *   },
 * };
 * const command = new UpdateNodeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateNodeCommandInput - {@link UpdateNodeCommandInput}
 * @returns {@link UpdateNodeCommandOutput}
 * @see {@link UpdateNodeCommandInput} for command's `input` shape.
 * @see {@link UpdateNodeCommandOutput} for command's `response` shape.
 * @see {@link ManagedBlockchainClientResolvedConfig | config} for ManagedBlockchainClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The action or operation requested is invalid. Verify that the action is typed correctly.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A requested resource doesn't exist. It may have been deleted or referenced incorrectly.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request or operation couldn't be performed because a service is
 *          throttling requests. The most common source of throttling errors is
 *          creating resources that exceed your service limit for this resource type.
 *          Request a limit increase or delete unused resources if possible.</p>
 *
 * @throws {@link ManagedBlockchainServiceException}
 * <p>Base exception class for all service exceptions from ManagedBlockchain service.</p>
 *
 * @public
 */
export class UpdateNodeCommand extends $Command
  .classBuilder<
    UpdateNodeCommandInput,
    UpdateNodeCommandOutput,
    ManagedBlockchainClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ManagedBlockchainClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("TaigaWebService", "UpdateNode", {})
  .n("ManagedBlockchainClient", "UpdateNodeCommand")
  .f(void 0, void 0)
  .ser(se_UpdateNodeCommand)
  .de(de_UpdateNodeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateNodeInput;
      output: {};
    };
    sdk: {
      input: UpdateNodeCommandInput;
      output: UpdateNodeCommandOutput;
    };
  };
}
