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
import { CreateNetworkInput, CreateNetworkInputFilterSensitiveLog, CreateNetworkOutput } from "../models/models_0";
import { de_CreateNetworkCommand, se_CreateNetworkCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates a new blockchain network using Amazon Managed Blockchain.</p>
 *          <p>Applies only to Hyperledger Fabric.</p>
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
export class CreateNetworkCommand extends $Command
  .classBuilder<
    CreateNetworkCommandInput,
    CreateNetworkCommandOutput,
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
  .s("TaigaWebService", "CreateNetwork", {})
  .n("ManagedBlockchainClient", "CreateNetworkCommand")
  .f(CreateNetworkInputFilterSensitiveLog, void 0)
  .ser(se_CreateNetworkCommand)
  .de(de_CreateNetworkCommand)
  .build() {
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
