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
import { UpdateMemberInput, UpdateMemberOutput } from "../models/models_0";
import { de_UpdateMemberCommand, se_UpdateMemberCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateMemberCommand}.
 */
export interface UpdateMemberCommandInput extends UpdateMemberInput {}
/**
 * @public
 *
 * The output of {@link UpdateMemberCommand}.
 */
export interface UpdateMemberCommandOutput extends UpdateMemberOutput, __MetadataBearer {}

/**
 * <p>Updates a member configuration with new parameters.</p>
 *          <p>Applies only to Hyperledger Fabric.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainClient, UpdateMemberCommand } from "@aws-sdk/client-managedblockchain"; // ES Modules import
 * // const { ManagedBlockchainClient, UpdateMemberCommand } = require("@aws-sdk/client-managedblockchain"); // CommonJS import
 * // import type { ManagedBlockchainClientConfig } from "@aws-sdk/client-managedblockchain";
 * const config = {}; // type is ManagedBlockchainClientConfig
 * const client = new ManagedBlockchainClient(config);
 * const input = { // UpdateMemberInput
 *   NetworkId: "STRING_VALUE", // required
 *   MemberId: "STRING_VALUE", // required
 *   LogPublishingConfiguration: { // MemberLogPublishingConfiguration
 *     Fabric: { // MemberFabricLogPublishingConfiguration
 *       CaLogs: { // LogConfigurations
 *         Cloudwatch: { // LogConfiguration
 *           Enabled: true || false,
 *         },
 *       },
 *     },
 *   },
 * };
 * const command = new UpdateMemberCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateMemberCommandInput - {@link UpdateMemberCommandInput}
 * @returns {@link UpdateMemberCommandOutput}
 * @see {@link UpdateMemberCommandInput} for command's `input` shape.
 * @see {@link UpdateMemberCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class UpdateMemberCommand extends $Command
  .classBuilder<
    UpdateMemberCommandInput,
    UpdateMemberCommandOutput,
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
  .s("TaigaWebService", "UpdateMember", {})
  .n("ManagedBlockchainClient", "UpdateMemberCommand")
  .f(void 0, void 0)
  .ser(se_UpdateMemberCommand)
  .de(de_UpdateMemberCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateMemberInput;
      output: {};
    };
    sdk: {
      input: UpdateMemberCommandInput;
      output: UpdateMemberCommandOutput;
    };
  };
}
