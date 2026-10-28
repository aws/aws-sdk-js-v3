// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetCapacityManagerSupportabilityScoresRequest,
  GetCapacityManagerSupportabilityScoresResult,
} from "../models/models_6";
import { GetCapacityManagerSupportabilityScores$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetCapacityManagerSupportabilityScoresCommand}.
 */
export interface GetCapacityManagerSupportabilityScoresCommandInput extends GetCapacityManagerSupportabilityScoresRequest {}
/**
 * @public
 *
 * The output of {@link GetCapacityManagerSupportabilityScoresCommand}.
 */
export interface GetCapacityManagerSupportabilityScoresCommandOutput extends GetCapacityManagerSupportabilityScoresResult, __MetadataBearer {}

/**
 * <p>
 * Scores how well each instance type and Availability Zone combination can support a capacity request, based on current Amazon EC2 capacity.
 * The response includes a score for each combination and an aggregate score for all combinations in the request.
 * This action doesn't launch or reserve instances, and a score doesn't guarantee that a later launch will succeed.
 * </p>
 *          <p>
 * Call this action in the Region where you turned on Capacity Manager. A single request can include Availability Zones in any Region.
 * Real-time supportability checks are available only to Amazon Web Services Support customers on the Unified Operations plan.
 * </p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/capacity-manager-supportability.html">Check supportability</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetCapacityManagerSupportabilityScoresCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetCapacityManagerSupportabilityScoresCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // GetCapacityManagerSupportabilityScoresRequest
 *   MarketType: "on-demand" || "spot", // required
 *   CapacityAmount: Number("int"), // required
 *   CapacityUnit: "vcpus" || "instances", // required
 *   CapacityAvailabilityZoneIds: [ // CapacityAvailabilityZoneIdList // required
 *     "STRING_VALUE",
 *   ],
 *   InstanceTypes: [ // SupportabilityInstanceTypeList
 *     "STRING_VALUE",
 *   ],
 *   InstanceRequirementsWithMetadata: { // InstanceRequirementsWithMetadataRequest
 *     ArchitectureTypes: [ // ArchitectureTypeSet
 *       "i386" || "x86_64" || "arm64" || "x86_64_mac" || "arm64_mac",
 *     ],
 *     VirtualizationTypes: [ // VirtualizationTypeSet
 *       "hvm" || "paravirtual",
 *     ],
 *     InstanceRequirements: { // InstanceRequirementsRequest
 *       VCpuCount: { // VCpuCountRangeRequest
 *         Min: Number("int"), // required
 *         Max: Number("int"),
 *       },
 *       MemoryMiB: { // MemoryMiBRequest
 *         Min: Number("int"), // required
 *         Max: Number("int"),
 *       },
 *       CpuManufacturers: [ // CpuManufacturerSet
 *         "intel" || "amd" || "amazon-web-services" || "apple",
 *       ],
 *       MemoryGiBPerVCpu: { // MemoryGiBPerVCpuRequest
 *         Min: Number("double"),
 *         Max: Number("double"),
 *       },
 *       ExcludedInstanceTypes: [ // ExcludedInstanceTypeSet
 *         "STRING_VALUE",
 *       ],
 *       InstanceGenerations: [ // InstanceGenerationSet
 *         "current" || "previous",
 *       ],
 *       SpotMaxPricePercentageOverLowestPrice: Number("int"),
 *       OnDemandMaxPricePercentageOverLowestPrice: Number("int"),
 *       BareMetal: "included" || "required" || "excluded",
 *       BurstablePerformance: "included" || "required" || "excluded",
 *       RequireHibernateSupport: true || false,
 *       NetworkInterfaceCount: { // NetworkInterfaceCountRequest
 *         Min: Number("int"),
 *         Max: Number("int"),
 *       },
 *       LocalStorage: "included" || "required" || "excluded",
 *       LocalStorageTypes: [ // LocalStorageTypeSet
 *         "hdd" || "ssd",
 *       ],
 *       TotalLocalStorageGB: { // TotalLocalStorageGBRequest
 *         Min: Number("double"),
 *         Max: Number("double"),
 *       },
 *       BaselineEbsBandwidthMbps: { // BaselineEbsBandwidthMbpsRequest
 *         Min: Number("int"),
 *         Max: Number("int"),
 *       },
 *       AcceleratorTypes: [ // AcceleratorTypeSet
 *         "gpu" || "fpga" || "inference" || "media",
 *       ],
 *       AcceleratorCount: { // AcceleratorCountRequest
 *         Min: Number("int"),
 *         Max: Number("int"),
 *       },
 *       AcceleratorManufacturers: [ // AcceleratorManufacturerSet
 *         "amazon-web-services" || "amd" || "nvidia" || "xilinx" || "habana",
 *       ],
 *       AcceleratorNames: [ // AcceleratorNameSet
 *         "a100" || "inferentia" || "k520" || "k80" || "m60" || "radeon-pro-v520" || "t4" || "vu9p" || "v100" || "a10g" || "h100" || "t4g" || "l40s" || "l4" || "gaudi-hl-205" || "inferentia2" || "trainium" || "trainium2" || "u30",
 *       ],
 *       AcceleratorTotalMemoryMiB: { // AcceleratorTotalMemoryMiBRequest
 *         Min: Number("int"),
 *         Max: Number("int"),
 *       },
 *       NetworkBandwidthGbps: { // NetworkBandwidthGbpsRequest
 *         Min: Number("double"),
 *         Max: Number("double"),
 *       },
 *       AllowedInstanceTypes: [ // AllowedInstanceTypeSet
 *         "STRING_VALUE",
 *       ],
 *       MaxSpotPriceAsPercentageOfOptimalOnDemandPrice: Number("int"),
 *       BaselinePerformanceFactors: { // BaselinePerformanceFactorsRequest
 *         Cpu: { // CpuPerformanceFactorRequest
 *           References: [ // PerformanceFactorReferenceSetRequest
 *             { // PerformanceFactorReferenceRequest
 *               InstanceFamily: "STRING_VALUE",
 *             },
 *           ],
 *         },
 *       },
 *       RequireEncryptionInTransit: true || false,
 *     },
 *   },
 *   DryRun: true || false,
 * };
 * const command = new GetCapacityManagerSupportabilityScoresCommand(input);
 * const response = await client.send(command);
 * // { // GetCapacityManagerSupportabilityScoresResult
 * //   AggregateScore: "high" || "medium" || "low",
 * //   CapacityManagerSupportabilityScores: [ // CapacityManagerSupportabilityScoreSet
 * //     { // CapacityManagerSupportabilityScore
 * //       InstanceType: "STRING_VALUE",
 * //       AvailabilityZoneId: "STRING_VALUE",
 * //       Score: "high" || "medium" || "low",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetCapacityManagerSupportabilityScoresCommandInput - {@link GetCapacityManagerSupportabilityScoresCommandInput}
 * @returns {@link GetCapacityManagerSupportabilityScoresCommandOutput}
 * @see {@link GetCapacityManagerSupportabilityScoresCommandInput} for command's `input` shape.
 * @see {@link GetCapacityManagerSupportabilityScoresCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class GetCapacityManagerSupportabilityScoresCommand extends command<GetCapacityManagerSupportabilityScoresCommandInput, GetCapacityManagerSupportabilityScoresCommandOutput>(
  _ep0,
  _mw0,
  "GetCapacityManagerSupportabilityScores",
  GetCapacityManagerSupportabilityScores$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCapacityManagerSupportabilityScoresRequest;
      output: GetCapacityManagerSupportabilityScoresResult;
    };
    sdk: {
      input: GetCapacityManagerSupportabilityScoresCommandInput;
      output: GetCapacityManagerSupportabilityScoresCommandOutput;
    };
  };
}
