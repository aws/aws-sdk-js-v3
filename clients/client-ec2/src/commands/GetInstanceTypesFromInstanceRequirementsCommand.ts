// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetInstanceTypesFromInstanceRequirementsRequest,
  GetInstanceTypesFromInstanceRequirementsResult,
} from "../models/models_6";
import {
  de_GetInstanceTypesFromInstanceRequirementsCommand,
  se_GetInstanceTypesFromInstanceRequirementsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetInstanceTypesFromInstanceRequirementsCommand}.
 */
export interface GetInstanceTypesFromInstanceRequirementsCommandInput
  extends GetInstanceTypesFromInstanceRequirementsRequest {}
/**
 * @public
 *
 * The output of {@link GetInstanceTypesFromInstanceRequirementsCommand}.
 */
export interface GetInstanceTypesFromInstanceRequirementsCommandOutput
  extends GetInstanceTypesFromInstanceRequirementsResult,
    __MetadataBearer {}

/**
 * <p>Returns a list of instance types with the specified instance attributes. You can
 *          use the response to preview the instance types without launching instances. Note
 *          that the response does not consider capacity.</p>
 *          <p>When you specify multiple parameters, you get instance types that satisfy all of the
 *          specified parameters. If you specify multiple values for a parameter, you get instance
 *          types that satisfy any of the specified values.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-attribute-based-instance-type-selection.html#ec2fleet-get-instance-types-from-instance-requirements">Preview instance types with specified attributes</a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-attribute-based-instance-type-selection.html">Specify attributes for instance type selection for EC2 Fleet or Spot Fleet</a>, and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-placement-score.html">Spot
 *             placement score</a> in the <i>Amazon EC2 User Guide</i>, and <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-asg-instance-type-requirements.html">Creating
 *             mixed instance groups using attribute-based instance type selection</a> in the
 *             <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetInstanceTypesFromInstanceRequirementsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetInstanceTypesFromInstanceRequirementsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // GetInstanceTypesFromInstanceRequirementsRequest
 *   DryRun: true || false,
 *   ArchitectureTypes: [ // ArchitectureTypeSet // required
 *     "i386" || "x86_64" || "arm64" || "x86_64_mac" || "arm64_mac",
 *   ],
 *   VirtualizationTypes: [ // VirtualizationTypeSet // required
 *     "hvm" || "paravirtual",
 *   ],
 *   InstanceRequirements: { // InstanceRequirementsRequest
 *     VCpuCount: { // VCpuCountRangeRequest
 *       Min: Number("int"), // required
 *       Max: Number("int"),
 *     },
 *     MemoryMiB: { // MemoryMiBRequest
 *       Min: Number("int"), // required
 *       Max: Number("int"),
 *     },
 *     CpuManufacturers: [ // CpuManufacturerSet
 *       "intel" || "amd" || "amazon-web-services" || "apple",
 *     ],
 *     MemoryGiBPerVCpu: { // MemoryGiBPerVCpuRequest
 *       Min: Number("double"),
 *       Max: Number("double"),
 *     },
 *     ExcludedInstanceTypes: [ // ExcludedInstanceTypeSet
 *       "STRING_VALUE",
 *     ],
 *     InstanceGenerations: [ // InstanceGenerationSet
 *       "current" || "previous",
 *     ],
 *     SpotMaxPricePercentageOverLowestPrice: Number("int"),
 *     OnDemandMaxPricePercentageOverLowestPrice: Number("int"),
 *     BareMetal: "included" || "required" || "excluded",
 *     BurstablePerformance: "included" || "required" || "excluded",
 *     RequireHibernateSupport: true || false,
 *     NetworkInterfaceCount: { // NetworkInterfaceCountRequest
 *       Min: Number("int"),
 *       Max: Number("int"),
 *     },
 *     LocalStorage: "included" || "required" || "excluded",
 *     LocalStorageTypes: [ // LocalStorageTypeSet
 *       "hdd" || "ssd",
 *     ],
 *     TotalLocalStorageGB: { // TotalLocalStorageGBRequest
 *       Min: Number("double"),
 *       Max: Number("double"),
 *     },
 *     BaselineEbsBandwidthMbps: { // BaselineEbsBandwidthMbpsRequest
 *       Min: Number("int"),
 *       Max: Number("int"),
 *     },
 *     AcceleratorTypes: [ // AcceleratorTypeSet
 *       "gpu" || "fpga" || "inference",
 *     ],
 *     AcceleratorCount: { // AcceleratorCountRequest
 *       Min: Number("int"),
 *       Max: Number("int"),
 *     },
 *     AcceleratorManufacturers: [ // AcceleratorManufacturerSet
 *       "amazon-web-services" || "amd" || "nvidia" || "xilinx" || "habana",
 *     ],
 *     AcceleratorNames: [ // AcceleratorNameSet
 *       "a100" || "inferentia" || "k520" || "k80" || "m60" || "radeon-pro-v520" || "t4" || "vu9p" || "v100" || "a10g" || "h100" || "t4g",
 *     ],
 *     AcceleratorTotalMemoryMiB: { // AcceleratorTotalMemoryMiBRequest
 *       Min: Number("int"),
 *       Max: Number("int"),
 *     },
 *     NetworkBandwidthGbps: { // NetworkBandwidthGbpsRequest
 *       Min: Number("double"),
 *       Max: Number("double"),
 *     },
 *     AllowedInstanceTypes: [ // AllowedInstanceTypeSet
 *       "STRING_VALUE",
 *     ],
 *     MaxSpotPriceAsPercentageOfOptimalOnDemandPrice: Number("int"),
 *     BaselinePerformanceFactors: { // BaselinePerformanceFactorsRequest
 *       Cpu: { // CpuPerformanceFactorRequest
 *         References: [ // PerformanceFactorReferenceSetRequest
 *           { // PerformanceFactorReferenceRequest
 *             InstanceFamily: "STRING_VALUE",
 *           },
 *         ],
 *       },
 *     },
 *   },
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Context: "STRING_VALUE",
 * };
 * const command = new GetInstanceTypesFromInstanceRequirementsCommand(input);
 * const response = await client.send(command);
 * // { // GetInstanceTypesFromInstanceRequirementsResult
 * //   InstanceTypes: [ // InstanceTypeInfoFromInstanceRequirementsSet
 * //     { // InstanceTypeInfoFromInstanceRequirements
 * //       InstanceType: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetInstanceTypesFromInstanceRequirementsCommandInput - {@link GetInstanceTypesFromInstanceRequirementsCommandInput}
 * @returns {@link GetInstanceTypesFromInstanceRequirementsCommandOutput}
 * @see {@link GetInstanceTypesFromInstanceRequirementsCommandInput} for command's `input` shape.
 * @see {@link GetInstanceTypesFromInstanceRequirementsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class GetInstanceTypesFromInstanceRequirementsCommand extends $Command
  .classBuilder<
    GetInstanceTypesFromInstanceRequirementsCommandInput,
    GetInstanceTypesFromInstanceRequirementsCommandOutput,
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
  .s("AmazonEC2", "GetInstanceTypesFromInstanceRequirements", {})
  .n("EC2Client", "GetInstanceTypesFromInstanceRequirementsCommand")
  .f(void 0, void 0)
  .ser(se_GetInstanceTypesFromInstanceRequirementsCommand)
  .de(de_GetInstanceTypesFromInstanceRequirementsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetInstanceTypesFromInstanceRequirementsRequest;
      output: GetInstanceTypesFromInstanceRequirementsResult;
    };
    sdk: {
      input: GetInstanceTypesFromInstanceRequirementsCommandInput;
      output: GetInstanceTypesFromInstanceRequirementsCommandOutput;
    };
  };
}
