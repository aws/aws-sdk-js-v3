// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateMemberInput, UpdateMemberOutput } from "../models/models_0";
import { UpdateMember$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Updates a member configuration with new parameters.
 *
 * Applies only to Hyperledger Fabric.
 *
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
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request or operation couldn't be performed because a service is throttling requests. The most common source of throttling errors is creating resources that exceed your service limit for this resource type. Request a limit increase or delete unused resources if possible.
 *
 * @throws {@link ManagedBlockchainServiceException}
 *
 * Base exception class for all service exceptions from ManagedBlockchain service.
 *
 * @public
 */
export class UpdateMemberCommand extends command<UpdateMemberCommandInput, UpdateMemberCommandOutput>(
  _ep0,
  _mw0,
  "UpdateMember",
  UpdateMember$
) {
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
