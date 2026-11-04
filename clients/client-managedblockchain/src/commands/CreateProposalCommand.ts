// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateProposalInput, CreateProposalOutput } from "../models/models_0";
import { CreateProposal$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateProposalCommand}.
 */
export interface CreateProposalCommandInput extends CreateProposalInput {}
/**
 * @public
 *
 * The output of {@link CreateProposalCommand}.
 */
export interface CreateProposalCommandOutput extends CreateProposalOutput, __MetadataBearer {}

/**
 * Creates a proposal for a change to the network that other members of the network can vote on, for example, a proposal to add a new member to the network. Any member can create a proposal.
 *
 * Applies only to Hyperledger Fabric.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainClient, CreateProposalCommand } from "@aws-sdk/client-managedblockchain"; // ES Modules import
 * // const { ManagedBlockchainClient, CreateProposalCommand } = require("@aws-sdk/client-managedblockchain"); // CommonJS import
 * // import type { ManagedBlockchainClientConfig } from "@aws-sdk/client-managedblockchain";
 * const config = {}; // type is ManagedBlockchainClientConfig
 * const client = new ManagedBlockchainClient(config);
 * const input = { // CreateProposalInput
 *   ClientRequestToken: "STRING_VALUE", // required
 *   NetworkId: "STRING_VALUE", // required
 *   MemberId: "STRING_VALUE", // required
 *   Actions: { // ProposalActions
 *     Invitations: [ // InviteActionList
 *       { // InviteAction
 *         Principal: "STRING_VALUE", // required
 *       },
 *     ],
 *     Removals: [ // RemoveActionList
 *       { // RemoveAction
 *         MemberId: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 *   Description: "STRING_VALUE",
 *   Tags: { // InputTagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateProposalCommand(input);
 * const response = await client.send(command);
 * // { // CreateProposalOutput
 * //   ProposalId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateProposalCommandInput - {@link CreateProposalCommandInput}
 * @returns {@link CreateProposalCommandOutput}
 * @see {@link CreateProposalCommandInput} for command's `input` shape.
 * @see {@link CreateProposalCommandOutput} for command's `response` shape.
 * @see {@link ManagedBlockchainClientResolvedConfig | config} for ManagedBlockchainClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient access to perform this action.
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The action or operation requested is invalid. Verify that the action is typed correctly.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * A requested resource doesn't exist. It may have been deleted or referenced incorrectly.
 *
 * @throws {@link ResourceNotReadyException} (client fault)
 *
 * The requested resource exists but isn't in a status that can complete the operation.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request or operation couldn't be performed because a service is throttling requests. The most common source of throttling errors is creating resources that exceed your service limit for this resource type. Request a limit increase or delete unused resources if possible.
 *
 * @throws {@link TooManyTagsException} (client fault)
 *
 * @throws {@link ManagedBlockchainServiceException}
 *
 * Base exception class for all service exceptions from ManagedBlockchain service.
 *
 * @public
 */
export class CreateProposalCommand extends command<CreateProposalCommandInput, CreateProposalCommandOutput>(
  _ep0,
  _mw0,
  "CreateProposal",
  CreateProposal$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateProposalInput;
      output: CreateProposalOutput;
    };
    sdk: {
      input: CreateProposalCommandInput;
      output: CreateProposalCommandOutput;
    };
  };
}
