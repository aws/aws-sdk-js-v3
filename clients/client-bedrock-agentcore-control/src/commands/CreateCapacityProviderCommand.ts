// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateCapacityProviderInput, CreateCapacityProviderOutput } from "../models/models_0";
import { CreateCapacityProvider$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateCapacityProviderCommand}.
 */
export interface CreateCapacityProviderCommandInput extends CreateCapacityProviderInput {}
/**
 * @public
 *
 * The output of {@link CreateCapacityProviderCommand}.
 */
export interface CreateCapacityProviderCommandOutput extends CreateCapacityProviderOutput, __MetadataBearer {}

/**
 * <p>Creates a capacity provider. A capacity provider defines the Amazon EC2 infrastructure for AgentCore Runtime, including the operating system, allowed instance types, networking, and storage. It also specifies the IAM permissions that AgentCore uses to manage those instances.</p> <p>The capacity provider name must be unique within your account. After you create the capacity provider, it enters a <code>CREATING</code> state and transitions to <code>READY</code> when it is available for use.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, CreateCapacityProviderCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, CreateCapacityProviderCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // CreateCapacityProviderInput
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   permissionsConfiguration: { // PermissionsConfiguration
 *     capacityProviderOperatorRoleArn: "STRING_VALUE", // required
 *   },
 *   clientToken: "STRING_VALUE",
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   computeConfiguration: { // ComputeConfiguration Union: only one key present
 *     ec2Configuration: { // Ec2Configuration
 *       launchTemplateSource: { // LaunchTemplateSource Union: only one key present
 *         launchParameters: { // LaunchParameters
 *           operatingSystem: "LINUX_X86_64" || "LINUX_ARM64", // required
 *           instanceRequirements: { // InstanceRequirements
 *             allowedInstanceTypes: [ // InstanceTypeList // required
 *               "STRING_VALUE",
 *             ],
 *           },
 *           ephemeralVolumes: [ // EphemeralBlockDeviceMappingList
 *             { // EphemeralBlockDeviceMapping
 *               deviceName: "STRING_VALUE",
 *               virtualName: "STRING_VALUE",
 *               ebs: { // EphemeralEBSVolumeConfiguration
 *                 volumeType: "standard" || "io1" || "io2" || "gp2" || "sc1" || "st1" || "gp3",
 *                 iops: Number("int"),
 *                 throughput: Number("int"),
 *                 encrypted: true || false,
 *                 kmsKeyId: "STRING_VALUE",
 *                 snapshotId: "STRING_VALUE",
 *                 volumeSize: Number("int"),
 *                 volumeInitializationRate: Number("int"),
 *                 ebsCardIndex: Number("int"),
 *               },
 *             },
 *           ],
 *           monitoring: "BASIC" || "DETAILED",
 *           licenseSpecifications: [ // LicenseSpecificationList
 *             { // LicenseSpecification
 *               licenseConfigurationArn: "STRING_VALUE", // required
 *             },
 *           ],
 *           capacityReservationSpecification: { // CapacityReservationSpecification
 *             capacityReservationPreference: "capacity-reservations-only" || "open" || "none",
 *             capacityReservationTarget: { // CapacityReservationTarget
 *               capacityReservationId: "STRING_VALUE",
 *               capacityReservationResourceGroupArn: "STRING_VALUE",
 *             },
 *           },
 *           sshKeyName: "STRING_VALUE",
 *           instanceProfileArn: "STRING_VALUE",
 *           propagatedTags: {
 *             "<keys>": "STRING_VALUE",
 *           },
 *         },
 *       },
 *       vpcConfiguration: { // VpcConfiguration
 *         subnets: [ // SubnetIdList // required
 *           "STRING_VALUE",
 *         ],
 *         securityGroups: [ // SecurityGroupIdList // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *       volumes: [ // VolumeConfigurationList
 *         { // VolumeConfiguration Union: only one key present
 *           ebsConfiguration: { // EbsVolumeConfiguration
 *             name: "STRING_VALUE", // required
 *             sizeGiB: Number("int"), // required
 *             volumeType: "standard" || "io1" || "io2" || "gp2" || "sc1" || "st1" || "gp3",
 *             iops: Number("int"),
 *             throughput: Number("int"),
 *             encrypted: true || false,
 *             kmsKeyId: "STRING_VALUE",
 *             snapshotId: "STRING_VALUE",
 *           },
 *         },
 *       ],
 *       lifecycleConfiguration: { // InstanceLifecycleConfiguration
 *         idleInstanceTimeout: Number("int"),
 *         maxLifetime: Number("int"),
 *       },
 *       rootVolume: { // RootVolumeConfiguration
 *         volumeType: "standard" || "io1" || "io2" || "gp2" || "sc1" || "st1" || "gp3",
 *         iops: Number("int"),
 *         throughput: Number("int"),
 *         encrypted: true || false,
 *         kmsKeyId: "STRING_VALUE",
 *         freeSpaceGiB: Number("int"),
 *       },
 *     },
 *   },
 * };
 * const command = new CreateCapacityProviderCommand(input);
 * const response = await client.send(command);
 * // { // CreateCapacityProviderOutput
 * //   capacityProviderId: "STRING_VALUE", // required
 * //   capacityProviderArn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   status: "CREATING" || "CREATE_FAILED" || "UPDATING" || "UPDATE_FAILED" || "READY" || "DELETING" || "DELETE_FAILED", // required
 * // };
 *
 * ```
 *
 * @param CreateCapacityProviderCommandInput - {@link CreateCapacityProviderCommandInput}
 * @returns {@link CreateCapacityProviderCommandOutput}
 * @see {@link CreateCapacityProviderCommandInput} for command's `input` shape.
 * @see {@link CreateCapacityProviderCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreControlClientResolvedConfig | config} for BedrockAgentCoreControlClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This exception is thrown when a request is denied per access permissions</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This exception is thrown when there is a conflict performing an operation</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown if there was an unexpected error during processing of request</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when a resource referenced by the operation does not exist</p>
 *
 * @throws {@link RetryableConflictException} (client fault)
 *  <p>The operation failed because of a conflicting request. Retry the request.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>This exception is thrown when a request is made beyond the service quota</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This exception is thrown when the number of requests exceeds the limit</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link BedrockAgentCoreControlServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgentCoreControl service.</p>
 *
 *
 * @public
 */
export class CreateCapacityProviderCommand extends command<CreateCapacityProviderCommandInput, CreateCapacityProviderCommandOutput>(
  _ep0,
  _mw0,
  "CreateCapacityProvider",
  CreateCapacityProvider$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCapacityProviderInput;
      output: CreateCapacityProviderOutput;
    };
    sdk: {
      input: CreateCapacityProviderCommandInput;
      output: CreateCapacityProviderCommandOutput;
    };
  };
}
