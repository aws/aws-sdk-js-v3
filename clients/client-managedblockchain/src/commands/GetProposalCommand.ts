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
import { GetProposalInput, GetProposalOutput } from "../models/models_0";
import { de_GetProposalCommand, se_GetProposalCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetProposalCommand}.
 */
export interface GetProposalCommandInput extends GetProposalInput {}
/**
 * @public
 *
 * The output of {@link GetProposalCommand}.
 */
export interface GetProposalCommandOutput extends GetProposalOutput, __MetadataBearer {}

/**
 * <p>Returns detailed information about a proposal.</p>
 *          <p>Applies only to Hyperledger Fabric.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainClient, GetProposalCommand } from "@aws-sdk/client-managedblockchain"; // ES Modules import
 * // const { ManagedBlockchainClient, GetProposalCommand } = require("@aws-sdk/client-managedblockchain"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ManagedBlockchainClient(config);
 * const input = { // GetProposalInput
 *   NetworkId: "STRING_VALUE", // required
 *   ProposalId: "STRING_VALUE", // required
 * };
 * const command = new GetProposalCommand(input);
 * const response = await client.send(command);
 * // { // GetProposalOutput
 * //   Proposal: { // Proposal
 * //     ProposalId: "STRING_VALUE",
 * //     NetworkId: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Actions: { // ProposalActions
 * //       Invitations: [ // InviteActionList
 * //         { // InviteAction
 * //           Principal: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       Removals: [ // RemoveActionList
 * //         { // RemoveAction
 * //           MemberId: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //     ProposedByMemberId: "STRING_VALUE",
 * //     ProposedByMemberName: "STRING_VALUE",
 * //     Status: "IN_PROGRESS" || "APPROVED" || "REJECTED" || "EXPIRED" || "ACTION_FAILED",
 * //     CreationDate: new Date("TIMESTAMP"),
 * //     ExpirationDate: new Date("TIMESTAMP"),
 * //     YesVoteCount: Number("int"),
 * //     NoVoteCount: Number("int"),
 * //     OutstandingVoteCount: Number("int"),
 * //     Tags: { // OutputTagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     Arn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetProposalCommandInput - {@link GetProposalCommandInput}
 * @returns {@link GetProposalCommandOutput}
 * @see {@link GetProposalCommandInput} for command's `input` shape.
 * @see {@link GetProposalCommandOutput} for command's `response` shape.
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
export class GetProposalCommand extends $Command
  .classBuilder<
    GetProposalCommandInput,
    GetProposalCommandOutput,
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
  .s("TaigaWebService", "GetProposal", {})
  .n("ManagedBlockchainClient", "GetProposalCommand")
  .f(void 0, void 0)
  .ser(se_GetProposalCommand)
  .de(de_GetProposalCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetProposalInput;
      output: GetProposalOutput;
    };
    sdk: {
      input: GetProposalCommandInput;
      output: GetProposalCommandOutput;
    };
  };
}
