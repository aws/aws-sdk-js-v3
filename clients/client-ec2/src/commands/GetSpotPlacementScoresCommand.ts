// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetSpotPlacementScoresRequest, GetSpotPlacementScoresResult } from "../models/models_7";
import { de_GetSpotPlacementScoresCommand, se_GetSpotPlacementScoresCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSpotPlacementScoresCommand}.
 */
export interface GetSpotPlacementScoresCommandInput extends GetSpotPlacementScoresRequest {}
/**
 * @public
 *
 * The output of {@link GetSpotPlacementScoresCommand}.
 */
export interface GetSpotPlacementScoresCommandOutput extends GetSpotPlacementScoresResult, __MetadataBearer {}

/**
 * <p>Calculates the Spot placement score for a Region or Availability Zone based on the
 *          specified target capacity and compute requirements.</p>
 *          <p>You can specify your compute requirements either by using
 *             <code>InstanceRequirementsWithMetadata</code> and letting Amazon EC2 choose the optimal
 *          instance types to fulfill your Spot request, or you can specify the instance types by using
 *             <code>InstanceTypes</code>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-placement-score.html">Spot placement score</a> in
 *          the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetSpotPlacementScoresCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetSpotPlacementScoresCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // GetSpotPlacementScoresRequest
 *   InstanceTypes: [ // InstanceTypes
 *     "STRING_VALUE",
 *   ],
 *   TargetCapacity: Number("int"), // required
 *   TargetCapacityUnitType: "vcpu" || "memory-mib" || "units",
 *   SingleAvailabilityZone: true || false,
 *   RegionNames: [ // RegionNames
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
 *         "gpu" || "fpga" || "inference",
 *       ],
 *       AcceleratorCount: { // AcceleratorCountRequest
 *         Min: Number("int"),
 *         Max: Number("int"),
 *       },
 *       AcceleratorManufacturers: [ // AcceleratorManufacturerSet
 *         "amazon-web-services" || "amd" || "nvidia" || "xilinx" || "habana",
 *       ],
 *       AcceleratorNames: [ // AcceleratorNameSet
 *         "a100" || "inferentia" || "k520" || "k80" || "m60" || "radeon-pro-v520" || "t4" || "vu9p" || "v100" || "a10g" || "h100" || "t4g",
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
 *     },
 *   },
 *   DryRun: true || false,
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetSpotPlacementScoresCommand(input);
 * const response = await client.send(command);
 * // { // GetSpotPlacementScoresResult
 * //   SpotPlacementScores: [ // SpotPlacementScores
 * //     { // SpotPlacementScore
 * //       Region: "STRING_VALUE",
 * //       AvailabilityZoneId: "STRING_VALUE",
 * //       Score: Number("int"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetSpotPlacementScoresCommandInput - {@link GetSpotPlacementScoresCommandInput}
 * @returns {@link GetSpotPlacementScoresCommandOutput}
 * @see {@link GetSpotPlacementScoresCommandInput} for command's `input` shape.
 * @see {@link GetSpotPlacementScoresCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class GetSpotPlacementScoresCommand extends $Command
  .classBuilder<
    GetSpotPlacementScoresCommandInput,
    GetSpotPlacementScoresCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "GetSpotPlacementScores", {})
  .n("EC2Client", "GetSpotPlacementScoresCommand")
  .f(void 0, void 0)
  .ser(se_GetSpotPlacementScoresCommand)
  .de(de_GetSpotPlacementScoresCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSpotPlacementScoresRequest;
      output: GetSpotPlacementScoresResult;
    };
    sdk: {
      input: GetSpotPlacementScoresCommandInput;
      output: GetSpotPlacementScoresCommandOutput;
    };
  };
}
