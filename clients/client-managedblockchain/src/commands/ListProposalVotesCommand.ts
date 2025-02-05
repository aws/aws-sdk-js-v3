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
import { ListProposalVotesInput, ListProposalVotesOutput } from "../models/models_0";
import { de_ListProposalVotesCommand, se_ListProposalVotesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListProposalVotesCommand}.
 */
export interface ListProposalVotesCommandInput extends ListProposalVotesInput {}
/**
 * @public
 *
 * The output of {@link ListProposalVotesCommand}.
 */
export interface ListProposalVotesCommandOutput extends ListProposalVotesOutput, __MetadataBearer {}

/**
 * <p>Returns the list of votes for a specified proposal, including the value of each vote and the unique identifier of the member that cast the vote.</p>
 *          <p>Applies only to Hyperledger Fabric.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainClient, ListProposalVotesCommand } from "@aws-sdk/client-managedblockchain"; // ES Modules import
 * // const { ManagedBlockchainClient, ListProposalVotesCommand } = require("@aws-sdk/client-managedblockchain"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ManagedBlockchainClient(config);
 * const input = { // ListProposalVotesInput
 *   NetworkId: "STRING_VALUE", // required
 *   ProposalId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListProposalVotesCommand(input);
 * const response = await client.send(command);
 * // { // ListProposalVotesOutput
 * //   ProposalVotes: [ // ProposalVoteList
 * //     { // VoteSummary
 * //       Vote: "YES" || "NO",
 * //       MemberName: "STRING_VALUE",
 * //       MemberId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListProposalVotesCommandInput - {@link ListProposalVotesCommandInput}
 * @returns {@link ListProposalVotesCommandOutput}
 * @see {@link ListProposalVotesCommandInput} for command's `input` shape.
 * @see {@link ListProposalVotesCommandOutput} for command's `response` shape.
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
export class ListProposalVotesCommand extends $Command
  .classBuilder<
    ListProposalVotesCommandInput,
    ListProposalVotesCommandOutput,
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
  .s("TaigaWebService", "ListProposalVotes", {})
  .n("ManagedBlockchainClient", "ListProposalVotesCommand")
  .f(void 0, void 0)
  .ser(se_ListProposalVotesCommand)
  .de(de_ListProposalVotesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListProposalVotesInput;
      output: ListProposalVotesOutput;
    };
    sdk: {
      input: ListProposalVotesCommandInput;
      output: ListProposalVotesCommandOutput;
    };
  };
}
