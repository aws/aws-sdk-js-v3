// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  ManagedBlockchainClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ManagedBlockchainClient";
import type { CreateProposalInput, CreateProposalOutput } from "../models/models_0";
import { CreateProposal } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates a proposal for a change to the network that other members of the network can vote on, for example, a proposal to add a new member to the network. Any member can create a proposal.</p>
 *          <p>Applies only to Hyperledger Fabric.</p>
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
 * @throws {@link ResourceNotReadyException} (client fault)
 *  <p>The requested resource exists but isn't in a status that can complete the operation.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request or operation couldn't be performed because a service is
 *          throttling requests. The most common source of throttling errors is
 *          creating resources that exceed your service limit for this resource type.
 *          Request a limit increase or delete unused resources if possible.</p>
 *
 * @throws {@link TooManyTagsException} (client fault)
 *  <p></p>
 *
 * @throws {@link ManagedBlockchainServiceException}
 * <p>Base exception class for all service exceptions from ManagedBlockchain service.</p>
 *
 *
 * @public
 */
export class CreateProposalCommand extends $Command
  .classBuilder<
    CreateProposalCommandInput,
    CreateProposalCommandOutput,
    ManagedBlockchainClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ManagedBlockchainClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("TaigaWebService", "CreateProposal", {})
  .n("ManagedBlockchainClient", "CreateProposalCommand")
  .sc(CreateProposal)
  .build() {
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
