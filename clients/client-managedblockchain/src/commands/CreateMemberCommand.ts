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
import type { CreateMemberInput, CreateMemberOutput } from "../models/models_0";
import { CreateMember } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateMemberCommand}.
 */
export interface CreateMemberCommandInput extends CreateMemberInput {}
/**
 * @public
 *
 * The output of {@link CreateMemberCommand}.
 */
export interface CreateMemberCommandOutput extends CreateMemberOutput, __MetadataBearer {}

/**
 * <p>Creates a member within a Managed Blockchain network.</p>
 *          <p>Applies only to Hyperledger Fabric.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainClient, CreateMemberCommand } from "@aws-sdk/client-managedblockchain"; // ES Modules import
 * // const { ManagedBlockchainClient, CreateMemberCommand } = require("@aws-sdk/client-managedblockchain"); // CommonJS import
 * // import type { ManagedBlockchainClientConfig } from "@aws-sdk/client-managedblockchain";
 * const config = {}; // type is ManagedBlockchainClientConfig
 * const client = new ManagedBlockchainClient(config);
 * const input = { // CreateMemberInput
 *   ClientRequestToken: "STRING_VALUE", // required
 *   InvitationId: "STRING_VALUE", // required
 *   NetworkId: "STRING_VALUE", // required
 *   MemberConfiguration: { // MemberConfiguration
 *     Name: "STRING_VALUE", // required
 *     Description: "STRING_VALUE",
 *     FrameworkConfiguration: { // MemberFrameworkConfiguration
 *       Fabric: { // MemberFabricConfiguration
 *         AdminUsername: "STRING_VALUE", // required
 *         AdminPassword: "STRING_VALUE", // required
 *       },
 *     },
 *     LogPublishingConfiguration: { // MemberLogPublishingConfiguration
 *       Fabric: { // MemberFabricLogPublishingConfiguration
 *         CaLogs: { // LogConfigurations
 *           Cloudwatch: { // LogConfiguration
 *             Enabled: true || false,
 *           },
 *         },
 *       },
 *     },
 *     Tags: { // InputTagMap
 *       "<keys>": "STRING_VALUE",
 *     },
 *     KmsKeyArn: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateMemberCommand(input);
 * const response = await client.send(command);
 * // { // CreateMemberOutput
 * //   MemberId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateMemberCommandInput - {@link CreateMemberCommandInput}
 * @returns {@link CreateMemberCommandOutput}
 * @see {@link CreateMemberCommandInput} for command's `input` shape.
 * @see {@link CreateMemberCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>A resource request is issued for a resource that already exists.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>The maximum number of resources of that type already exist. Ensure the resources requested
 *          are within the boundaries of the service edition and your account limits.</p>
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
export class CreateMemberCommand extends $Command
  .classBuilder<
    CreateMemberCommandInput,
    CreateMemberCommandOutput,
    ManagedBlockchainClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ManagedBlockchainClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("TaigaWebService", "CreateMember", {})
  .n("ManagedBlockchainClient", "CreateMemberCommand")
  .sc(CreateMember)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateMemberInput;
      output: CreateMemberOutput;
    };
    sdk: {
      input: CreateMemberCommandInput;
      output: CreateMemberCommandOutput;
    };
  };
}
