// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateNetworkInput, CreateNetworkOutput } from "../models/models_0";
import { CreateNetwork$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateNetworkCommand}.
 */
export interface CreateNetworkCommandInput extends CreateNetworkInput {}
/**
 * @public
 *
 * The output of {@link CreateNetworkCommand}.
 */
export interface CreateNetworkCommandOutput extends CreateNetworkOutput, __MetadataBearer {}

/**
 * Creates a new blockchain network using Amazon Managed Blockchain.
 *
 * Applies only to Hyperledger Fabric.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainClient, CreateNetworkCommand } from "@aws-sdk/client-managedblockchain"; // ES Modules import
 * // const { ManagedBlockchainClient, CreateNetworkCommand } = require("@aws-sdk/client-managedblockchain"); // CommonJS import
 * // import type { ManagedBlockchainClientConfig } from "@aws-sdk/client-managedblockchain";
 * const config = {}; // type is ManagedBlockchainClientConfig
 * const client = new ManagedBlockchainClient(config);
 * const input = { // CreateNetworkInput
 *   ClientRequestToken: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Framework: "HYPERLEDGER_FABRIC" || "ETHEREUM", // required
 *   FrameworkVersion: "STRING_VALUE", // required
 *   FrameworkConfiguration: { // NetworkFrameworkConfiguration
 *     Fabric: { // NetworkFabricConfiguration
 *       Edition: "STARTER" || "STANDARD", // required
 *     },
 *   },
 *   VotingPolicy: { // VotingPolicy
 *     ApprovalThresholdPolicy: { // ApprovalThresholdPolicy
 *       ThresholdPercentage: Number("int"),
 *       ProposalDurationInHours: Number("int"),
 *       ThresholdComparator: "GREATER_THAN" || "GREATER_THAN_OR_EQUAL_TO",
 *     },
 *   },
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
 *   Tags: {
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateNetworkCommand(input);
 * const response = await client.send(command);
 * // { // CreateNetworkOutput
 * //   NetworkId: "STRING_VALUE",
 * //   MemberId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateNetworkCommandInput - {@link CreateNetworkCommandInput}
 * @returns {@link CreateNetworkCommandOutput}
 * @see {@link CreateNetworkCommandInput} for command's `input` shape.
 * @see {@link CreateNetworkCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *
 * A resource request is issued for a resource that already exists.
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *
 * The maximum number of resources of that type already exist. Ensure the resources requested are within the boundaries of the service edition and your account limits.
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
export class CreateNetworkCommand extends command<CreateNetworkCommandInput, CreateNetworkCommandOutput>(
  _ep0,
  _mw0,
  "CreateNetwork",
  CreateNetwork$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateNetworkInput;
      output: CreateNetworkOutput;
    };
    sdk: {
      input: CreateNetworkCommandInput;
      output: CreateNetworkCommandOutput;
    };
  };
}
