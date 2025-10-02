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
import { VoteOnProposalInput, VoteOnProposalOutput } from "../models/models_0";
import { de_VoteOnProposalCommand, se_VoteOnProposalCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link VoteOnProposalCommand}.
 */
export interface VoteOnProposalCommandInput extends VoteOnProposalInput {}
/**
 * @public
 *
 * The output of {@link VoteOnProposalCommand}.
 */
export interface VoteOnProposalCommandOutput extends VoteOnProposalOutput, __MetadataBearer {}

/**
 * <p>Casts a vote for a specified <code>ProposalId</code> on behalf of a member. The member to vote as, specified by <code>VoterMemberId</code>, must be in the same Amazon Web Services account as the principal that calls the action.</p>
 *          <p>Applies only to Hyperledger Fabric.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainClient, VoteOnProposalCommand } from "@aws-sdk/client-managedblockchain"; // ES Modules import
 * // const { ManagedBlockchainClient, VoteOnProposalCommand } = require("@aws-sdk/client-managedblockchain"); // CommonJS import
 * // import type { ManagedBlockchainClientConfig } from "@aws-sdk/client-managedblockchain";
 * const config = {}; // type is ManagedBlockchainClientConfig
 * const client = new ManagedBlockchainClient(config);
 * const input = { // VoteOnProposalInput
 *   NetworkId: "STRING_VALUE", // required
 *   ProposalId: "STRING_VALUE", // required
 *   VoterMemberId: "STRING_VALUE", // required
 *   Vote: "YES" || "NO", // required
 * };
 * const command = new VoteOnProposalCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param VoteOnProposalCommandInput - {@link VoteOnProposalCommandInput}
 * @returns {@link VoteOnProposalCommandOutput}
 * @see {@link VoteOnProposalCommandInput} for command's `input` shape.
 * @see {@link VoteOnProposalCommandOutput} for command's `response` shape.
 * @see {@link ManagedBlockchainClientResolvedConfig | config} for ManagedBlockchainClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action.</p>
 *
 * @throws {@link IllegalActionException} (client fault)
 *  <p></p>
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
export class VoteOnProposalCommand extends $Command
  .classBuilder<
    VoteOnProposalCommandInput,
    VoteOnProposalCommandOutput,
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
  .s("TaigaWebService", "VoteOnProposal", {})
  .n("ManagedBlockchainClient", "VoteOnProposalCommand")
  .f(void 0, void 0)
  .ser(se_VoteOnProposalCommand)
  .de(de_VoteOnProposalCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: VoteOnProposalInput;
      output: {};
    };
    sdk: {
      input: VoteOnProposalCommandInput;
      output: VoteOnProposalCommandOutput;
    };
  };
}
