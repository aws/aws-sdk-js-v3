// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifySpotFleetRequestRequest, ModifySpotFleetRequestResponse } from "../models/models_6";
import { de_ModifySpotFleetRequestCommand, se_ModifySpotFleetRequestCommand } from "../protocols/Aws_ec2";

/**
 * @public
 *
 * The input for {@link ModifySpotFleetRequestCommand}.
 */
export interface ModifySpotFleetRequestCommandInput extends ModifySpotFleetRequestRequest {}
/**
 * @public
 *
 * The output of {@link ModifySpotFleetRequestCommand}.
 */
export interface ModifySpotFleetRequestCommandOutput extends ModifySpotFleetRequestResponse, __MetadataBearer {}

/**
 * @public
 * <p>Modifies the specified Spot Fleet request.</p>
 *          <p>You can only modify a Spot Fleet request of type <code>maintain</code>.</p>
 *          <p>While the Spot Fleet request is being modified, it is in the <code>modifying</code>
 *             state.</p>
 *          <p>To scale up your Spot Fleet, increase its target capacity. The Spot Fleet launches the
 *             additional Spot Instances according to the allocation strategy for the Spot Fleet
 *             request. If the allocation strategy is <code>lowestPrice</code>, the Spot Fleet launches
 *             instances using the Spot Instance pool with the lowest price. If the allocation strategy
 *             is <code>diversified</code>, the Spot Fleet distributes the instances across the Spot
 *             Instance pools. If the allocation strategy is <code>capacityOptimized</code>, Spot Fleet
 *             launches instances from Spot Instance pools with optimal capacity for the number of instances
 *             that are launching.</p>
 *          <p>To scale down your Spot Fleet, decrease its target capacity. First, the Spot Fleet
 *             cancels any open requests that exceed the new target capacity. You can request that the
 *             Spot Fleet terminate Spot Instances until the size of the fleet no longer exceeds the
 *             new target capacity. If the allocation strategy is <code>lowestPrice</code>, the Spot
 *             Fleet terminates the instances with the highest price per unit. If the allocation
 *             strategy is <code>capacityOptimized</code>, the Spot Fleet terminates the instances in
 *             the Spot Instance pools that have the least available Spot Instance capacity. If the allocation
 *             strategy is <code>diversified</code>, the Spot Fleet terminates instances across the
 *             Spot Instance pools. Alternatively, you can request that the Spot Fleet keep the fleet
 *             at its current size, but not replace any Spot Instances that are interrupted or that you
 *             terminate manually.</p>
 *          <p>If you are finished with your Spot Fleet for now, but will use it again later, you can
 *             set the target capacity to 0.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifySpotFleetRequestCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifySpotFleetRequestCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ModifySpotFleetRequestRequest
 *   ExcessCapacityTerminationPolicy: "noTermination" || "default",
 *   LaunchTemplateConfigs: [ // LaunchTemplateConfigList
 *     { // LaunchTemplateConfig
 *       LaunchTemplateSpecification: { // FleetLaunchTemplateSpecification
 *         LaunchTemplateId: "STRING_VALUE",
 *         LaunchTemplateName: "STRING_VALUE",
 *         Version: "STRING_VALUE",
 *       },
 *       Overrides: [ // LaunchTemplateOverridesList
 *         { // LaunchTemplateOverrides
 *           InstanceType: "a1.medium" || "a1.large" || "a1.xlarge" || "a1.2xlarge" || "a1.4xlarge" || "a1.metal" || "c1.medium" || "c1.xlarge" || "c3.large" || "c3.xlarge" || "c3.2xlarge" || "c3.4xlarge" || "c3.8xlarge" || "c4.large" || "c4.xlarge" || "c4.2xlarge" || "c4.4xlarge" || "c4.8xlarge" || "c5.large" || "c5.xlarge" || "c5.2xlarge" || "c5.4xlarge" || "c5.9xlarge" || "c5.12xlarge" || "c5.18xlarge" || "c5.24xlarge" || "c5.metal" || "c5a.large" || "c5a.xlarge" || "c5a.2xlarge" || "c5a.4xlarge" || "c5a.8xlarge" || "c5a.12xlarge" || "c5a.16xlarge" || "c5a.24xlarge" || "c5ad.large" || "c5ad.xlarge" || "c5ad.2xlarge" || "c5ad.4xlarge" || "c5ad.8xlarge" || "c5ad.12xlarge" || "c5ad.16xlarge" || "c5ad.24xlarge" || "c5d.large" || "c5d.xlarge" || "c5d.2xlarge" || "c5d.4xlarge" || "c5d.9xlarge" || "c5d.12xlarge" || "c5d.18xlarge" || "c5d.24xlarge" || "c5d.metal" || "c5n.large" || "c5n.xlarge" || "c5n.2xlarge" || "c5n.4xlarge" || "c5n.9xlarge" || "c5n.18xlarge" || "c5n.metal" || "c6g.medium" || "c6g.large" || "c6g.xlarge" || "c6g.2xlarge" || "c6g.4xlarge" || "c6g.8xlarge" || "c6g.12xlarge" || "c6g.16xlarge" || "c6g.metal" || "c6gd.medium" || "c6gd.large" || "c6gd.xlarge" || "c6gd.2xlarge" || "c6gd.4xlarge" || "c6gd.8xlarge" || "c6gd.12xlarge" || "c6gd.16xlarge" || "c6gd.metal" || "c6gn.medium" || "c6gn.large" || "c6gn.xlarge" || "c6gn.2xlarge" || "c6gn.4xlarge" || "c6gn.8xlarge" || "c6gn.12xlarge" || "c6gn.16xlarge" || "c6i.large" || "c6i.xlarge" || "c6i.2xlarge" || "c6i.4xlarge" || "c6i.8xlarge" || "c6i.12xlarge" || "c6i.16xlarge" || "c6i.24xlarge" || "c6i.32xlarge" || "c6i.metal" || "cc1.4xlarge" || "cc2.8xlarge" || "cg1.4xlarge" || "cr1.8xlarge" || "d2.xlarge" || "d2.2xlarge" || "d2.4xlarge" || "d2.8xlarge" || "d3.xlarge" || "d3.2xlarge" || "d3.4xlarge" || "d3.8xlarge" || "d3en.xlarge" || "d3en.2xlarge" || "d3en.4xlarge" || "d3en.6xlarge" || "d3en.8xlarge" || "d3en.12xlarge" || "dl1.24xlarge" || "f1.2xlarge" || "f1.4xlarge" || "f1.16xlarge" || "g2.2xlarge" || "g2.8xlarge" || "g3.4xlarge" || "g3.8xlarge" || "g3.16xlarge" || "g3s.xlarge" || "g4ad.xlarge" || "g4ad.2xlarge" || "g4ad.4xlarge" || "g4ad.8xlarge" || "g4ad.16xlarge" || "g4dn.xlarge" || "g4dn.2xlarge" || "g4dn.4xlarge" || "g4dn.8xlarge" || "g4dn.12xlarge" || "g4dn.16xlarge" || "g4dn.metal" || "g5.xlarge" || "g5.2xlarge" || "g5.4xlarge" || "g5.8xlarge" || "g5.12xlarge" || "g5.16xlarge" || "g5.24xlarge" || "g5.48xlarge" || "g5g.xlarge" || "g5g.2xlarge" || "g5g.4xlarge" || "g5g.8xlarge" || "g5g.16xlarge" || "g5g.metal" || "hi1.4xlarge" || "hpc6a.48xlarge" || "hs1.8xlarge" || "h1.2xlarge" || "h1.4xlarge" || "h1.8xlarge" || "h1.16xlarge" || "i2.xlarge" || "i2.2xlarge" || "i2.4xlarge" || "i2.8xlarge" || "i3.large" || "i3.xlarge" || "i3.2xlarge" || "i3.4xlarge" || "i3.8xlarge" || "i3.16xlarge" || "i3.metal" || "i3en.large" || "i3en.xlarge" || "i3en.2xlarge" || "i3en.3xlarge" || "i3en.6xlarge" || "i3en.12xlarge" || "i3en.24xlarge" || "i3en.metal" || "im4gn.large" || "im4gn.xlarge" || "im4gn.2xlarge" || "im4gn.4xlarge" || "im4gn.8xlarge" || "im4gn.16xlarge" || "inf1.xlarge" || "inf1.2xlarge" || "inf1.6xlarge" || "inf1.24xlarge" || "is4gen.medium" || "is4gen.large" || "is4gen.xlarge" || "is4gen.2xlarge" || "is4gen.4xlarge" || "is4gen.8xlarge" || "m1.small" || "m1.medium" || "m1.large" || "m1.xlarge" || "m2.xlarge" || "m2.2xlarge" || "m2.4xlarge" || "m3.medium" || "m3.large" || "m3.xlarge" || "m3.2xlarge" || "m4.large" || "m4.xlarge" || "m4.2xlarge" || "m4.4xlarge" || "m4.10xlarge" || "m4.16xlarge" || "m5.large" || "m5.xlarge" || "m5.2xlarge" || "m5.4xlarge" || "m5.8xlarge" || "m5.12xlarge" || "m5.16xlarge" || "m5.24xlarge" || "m5.metal" || "m5a.large" || "m5a.xlarge" || "m5a.2xlarge" || "m5a.4xlarge" || "m5a.8xlarge" || "m5a.12xlarge" || "m5a.16xlarge" || "m5a.24xlarge" || "m5ad.large" || "m5ad.xlarge" || "m5ad.2xlarge" || "m5ad.4xlarge" || "m5ad.8xlarge" || "m5ad.12xlarge" || "m5ad.16xlarge" || "m5ad.24xlarge" || "m5d.large" || "m5d.xlarge" || "m5d.2xlarge" || "m5d.4xlarge" || "m5d.8xlarge" || "m5d.12xlarge" || "m5d.16xlarge" || "m5d.24xlarge" || "m5d.metal" || "m5dn.large" || "m5dn.xlarge" || "m5dn.2xlarge" || "m5dn.4xlarge" || "m5dn.8xlarge" || "m5dn.12xlarge" || "m5dn.16xlarge" || "m5dn.24xlarge" || "m5dn.metal" || "m5n.large" || "m5n.xlarge" || "m5n.2xlarge" || "m5n.4xlarge" || "m5n.8xlarge" || "m5n.12xlarge" || "m5n.16xlarge" || "m5n.24xlarge" || "m5n.metal" || "m5zn.large" || "m5zn.xlarge" || "m5zn.2xlarge" || "m5zn.3xlarge" || "m5zn.6xlarge" || "m5zn.12xlarge" || "m5zn.metal" || "m6a.large" || "m6a.xlarge" || "m6a.2xlarge" || "m6a.4xlarge" || "m6a.8xlarge" || "m6a.12xlarge" || "m6a.16xlarge" || "m6a.24xlarge" || "m6a.32xlarge" || "m6a.48xlarge" || "m6g.metal" || "m6g.medium" || "m6g.large" || "m6g.xlarge" || "m6g.2xlarge" || "m6g.4xlarge" || "m6g.8xlarge" || "m6g.12xlarge" || "m6g.16xlarge" || "m6gd.metal" || "m6gd.medium" || "m6gd.large" || "m6gd.xlarge" || "m6gd.2xlarge" || "m6gd.4xlarge" || "m6gd.8xlarge" || "m6gd.12xlarge" || "m6gd.16xlarge" || "m6i.large" || "m6i.xlarge" || "m6i.2xlarge" || "m6i.4xlarge" || "m6i.8xlarge" || "m6i.12xlarge" || "m6i.16xlarge" || "m6i.24xlarge" || "m6i.32xlarge" || "m6i.metal" || "mac1.metal" || "p2.xlarge" || "p2.8xlarge" || "p2.16xlarge" || "p3.2xlarge" || "p3.8xlarge" || "p3.16xlarge" || "p3dn.24xlarge" || "p4d.24xlarge" || "r3.large" || "r3.xlarge" || "r3.2xlarge" || "r3.4xlarge" || "r3.8xlarge" || "r4.large" || "r4.xlarge" || "r4.2xlarge" || "r4.4xlarge" || "r4.8xlarge" || "r4.16xlarge" || "r5.large" || "r5.xlarge" || "r5.2xlarge" || "r5.4xlarge" || "r5.8xlarge" || "r5.12xlarge" || "r5.16xlarge" || "r5.24xlarge" || "r5.metal" || "r5a.large" || "r5a.xlarge" || "r5a.2xlarge" || "r5a.4xlarge" || "r5a.8xlarge" || "r5a.12xlarge" || "r5a.16xlarge" || "r5a.24xlarge" || "r5ad.large" || "r5ad.xlarge" || "r5ad.2xlarge" || "r5ad.4xlarge" || "r5ad.8xlarge" || "r5ad.12xlarge" || "r5ad.16xlarge" || "r5ad.24xlarge" || "r5b.large" || "r5b.xlarge" || "r5b.2xlarge" || "r5b.4xlarge" || "r5b.8xlarge" || "r5b.12xlarge" || "r5b.16xlarge" || "r5b.24xlarge" || "r5b.metal" || "r5d.large" || "r5d.xlarge" || "r5d.2xlarge" || "r5d.4xlarge" || "r5d.8xlarge" || "r5d.12xlarge" || "r5d.16xlarge" || "r5d.24xlarge" || "r5d.metal" || "r5dn.large" || "r5dn.xlarge" || "r5dn.2xlarge" || "r5dn.4xlarge" || "r5dn.8xlarge" || "r5dn.12xlarge" || "r5dn.16xlarge" || "r5dn.24xlarge" || "r5dn.metal" || "r5n.large" || "r5n.xlarge" || "r5n.2xlarge" || "r5n.4xlarge" || "r5n.8xlarge" || "r5n.12xlarge" || "r5n.16xlarge" || "r5n.24xlarge" || "r5n.metal" || "r6g.medium" || "r6g.large" || "r6g.xlarge" || "r6g.2xlarge" || "r6g.4xlarge" || "r6g.8xlarge" || "r6g.12xlarge" || "r6g.16xlarge" || "r6g.metal" || "r6gd.medium" || "r6gd.large" || "r6gd.xlarge" || "r6gd.2xlarge" || "r6gd.4xlarge" || "r6gd.8xlarge" || "r6gd.12xlarge" || "r6gd.16xlarge" || "r6gd.metal" || "r6i.large" || "r6i.xlarge" || "r6i.2xlarge" || "r6i.4xlarge" || "r6i.8xlarge" || "r6i.12xlarge" || "r6i.16xlarge" || "r6i.24xlarge" || "r6i.32xlarge" || "r6i.metal" || "t1.micro" || "t2.nano" || "t2.micro" || "t2.small" || "t2.medium" || "t2.large" || "t2.xlarge" || "t2.2xlarge" || "t3.nano" || "t3.micro" || "t3.small" || "t3.medium" || "t3.large" || "t3.xlarge" || "t3.2xlarge" || "t3a.nano" || "t3a.micro" || "t3a.small" || "t3a.medium" || "t3a.large" || "t3a.xlarge" || "t3a.2xlarge" || "t4g.nano" || "t4g.micro" || "t4g.small" || "t4g.medium" || "t4g.large" || "t4g.xlarge" || "t4g.2xlarge" || "u-6tb1.56xlarge" || "u-6tb1.112xlarge" || "u-9tb1.112xlarge" || "u-12tb1.112xlarge" || "u-6tb1.metal" || "u-9tb1.metal" || "u-12tb1.metal" || "u-18tb1.metal" || "u-24tb1.metal" || "vt1.3xlarge" || "vt1.6xlarge" || "vt1.24xlarge" || "x1.16xlarge" || "x1.32xlarge" || "x1e.xlarge" || "x1e.2xlarge" || "x1e.4xlarge" || "x1e.8xlarge" || "x1e.16xlarge" || "x1e.32xlarge" || "x2iezn.2xlarge" || "x2iezn.4xlarge" || "x2iezn.6xlarge" || "x2iezn.8xlarge" || "x2iezn.12xlarge" || "x2iezn.metal" || "x2gd.medium" || "x2gd.large" || "x2gd.xlarge" || "x2gd.2xlarge" || "x2gd.4xlarge" || "x2gd.8xlarge" || "x2gd.12xlarge" || "x2gd.16xlarge" || "x2gd.metal" || "z1d.large" || "z1d.xlarge" || "z1d.2xlarge" || "z1d.3xlarge" || "z1d.6xlarge" || "z1d.12xlarge" || "z1d.metal" || "x2idn.16xlarge" || "x2idn.24xlarge" || "x2idn.32xlarge" || "x2iedn.xlarge" || "x2iedn.2xlarge" || "x2iedn.4xlarge" || "x2iedn.8xlarge" || "x2iedn.16xlarge" || "x2iedn.24xlarge" || "x2iedn.32xlarge" || "c6a.large" || "c6a.xlarge" || "c6a.2xlarge" || "c6a.4xlarge" || "c6a.8xlarge" || "c6a.12xlarge" || "c6a.16xlarge" || "c6a.24xlarge" || "c6a.32xlarge" || "c6a.48xlarge" || "c6a.metal" || "m6a.metal" || "i4i.large" || "i4i.xlarge" || "i4i.2xlarge" || "i4i.4xlarge" || "i4i.8xlarge" || "i4i.16xlarge" || "i4i.32xlarge" || "i4i.metal" || "x2idn.metal" || "x2iedn.metal" || "c7g.medium" || "c7g.large" || "c7g.xlarge" || "c7g.2xlarge" || "c7g.4xlarge" || "c7g.8xlarge" || "c7g.12xlarge" || "c7g.16xlarge" || "mac2.metal" || "c6id.large" || "c6id.xlarge" || "c6id.2xlarge" || "c6id.4xlarge" || "c6id.8xlarge" || "c6id.12xlarge" || "c6id.16xlarge" || "c6id.24xlarge" || "c6id.32xlarge" || "c6id.metal" || "m6id.large" || "m6id.xlarge" || "m6id.2xlarge" || "m6id.4xlarge" || "m6id.8xlarge" || "m6id.12xlarge" || "m6id.16xlarge" || "m6id.24xlarge" || "m6id.32xlarge" || "m6id.metal" || "r6id.large" || "r6id.xlarge" || "r6id.2xlarge" || "r6id.4xlarge" || "r6id.8xlarge" || "r6id.12xlarge" || "r6id.16xlarge" || "r6id.24xlarge" || "r6id.32xlarge" || "r6id.metal" || "r6a.large" || "r6a.xlarge" || "r6a.2xlarge" || "r6a.4xlarge" || "r6a.8xlarge" || "r6a.12xlarge" || "r6a.16xlarge" || "r6a.24xlarge" || "r6a.32xlarge" || "r6a.48xlarge" || "r6a.metal" || "p4de.24xlarge" || "u-3tb1.56xlarge" || "u-18tb1.112xlarge" || "u-24tb1.112xlarge" || "trn1.2xlarge" || "trn1.32xlarge" || "hpc6id.32xlarge" || "c6in.large" || "c6in.xlarge" || "c6in.2xlarge" || "c6in.4xlarge" || "c6in.8xlarge" || "c6in.12xlarge" || "c6in.16xlarge" || "c6in.24xlarge" || "c6in.32xlarge" || "m6in.large" || "m6in.xlarge" || "m6in.2xlarge" || "m6in.4xlarge" || "m6in.8xlarge" || "m6in.12xlarge" || "m6in.16xlarge" || "m6in.24xlarge" || "m6in.32xlarge" || "m6idn.large" || "m6idn.xlarge" || "m6idn.2xlarge" || "m6idn.4xlarge" || "m6idn.8xlarge" || "m6idn.12xlarge" || "m6idn.16xlarge" || "m6idn.24xlarge" || "m6idn.32xlarge" || "r6in.large" || "r6in.xlarge" || "r6in.2xlarge" || "r6in.4xlarge" || "r6in.8xlarge" || "r6in.12xlarge" || "r6in.16xlarge" || "r6in.24xlarge" || "r6in.32xlarge" || "r6idn.large" || "r6idn.xlarge" || "r6idn.2xlarge" || "r6idn.4xlarge" || "r6idn.8xlarge" || "r6idn.12xlarge" || "r6idn.16xlarge" || "r6idn.24xlarge" || "r6idn.32xlarge" || "c7g.metal" || "m7g.medium" || "m7g.large" || "m7g.xlarge" || "m7g.2xlarge" || "m7g.4xlarge" || "m7g.8xlarge" || "m7g.12xlarge" || "m7g.16xlarge" || "m7g.metal" || "r7g.medium" || "r7g.large" || "r7g.xlarge" || "r7g.2xlarge" || "r7g.4xlarge" || "r7g.8xlarge" || "r7g.12xlarge" || "r7g.16xlarge" || "r7g.metal" || "c6in.metal" || "m6in.metal" || "m6idn.metal" || "r6in.metal" || "r6idn.metal" || "inf2.xlarge" || "inf2.8xlarge" || "inf2.24xlarge" || "inf2.48xlarge" || "trn1n.32xlarge",
 *           SpotPrice: "STRING_VALUE",
 *           SubnetId: "STRING_VALUE",
 *           AvailabilityZone: "STRING_VALUE",
 *           WeightedCapacity: Number("double"),
 *           Priority: Number("double"),
 *           InstanceRequirements: { // InstanceRequirements
 *             VCpuCount: { // VCpuCountRange
 *               Min: Number("int"),
 *               Max: Number("int"),
 *             },
 *             MemoryMiB: { // MemoryMiB
 *               Min: Number("int"),
 *               Max: Number("int"),
 *             },
 *             CpuManufacturers: [ // CpuManufacturerSet
 *               "intel" || "amd" || "amazon-web-services",
 *             ],
 *             MemoryGiBPerVCpu: { // MemoryGiBPerVCpu
 *               Min: Number("double"),
 *               Max: Number("double"),
 *             },
 *             ExcludedInstanceTypes: [ // ExcludedInstanceTypeSet
 *               "STRING_VALUE",
 *             ],
 *             InstanceGenerations: [ // InstanceGenerationSet
 *               "current" || "previous",
 *             ],
 *             SpotMaxPricePercentageOverLowestPrice: Number("int"),
 *             OnDemandMaxPricePercentageOverLowestPrice: Number("int"),
 *             BareMetal: "included" || "required" || "excluded",
 *             BurstablePerformance: "included" || "required" || "excluded",
 *             RequireHibernateSupport: true || false,
 *             NetworkInterfaceCount: { // NetworkInterfaceCount
 *               Min: Number("int"),
 *               Max: Number("int"),
 *             },
 *             LocalStorage: "included" || "required" || "excluded",
 *             LocalStorageTypes: [ // LocalStorageTypeSet
 *               "hdd" || "ssd",
 *             ],
 *             TotalLocalStorageGB: { // TotalLocalStorageGB
 *               Min: Number("double"),
 *               Max: Number("double"),
 *             },
 *             BaselineEbsBandwidthMbps: { // BaselineEbsBandwidthMbps
 *               Min: Number("int"),
 *               Max: Number("int"),
 *             },
 *             AcceleratorTypes: [ // AcceleratorTypeSet
 *               "gpu" || "fpga" || "inference",
 *             ],
 *             AcceleratorCount: { // AcceleratorCount
 *               Min: Number("int"),
 *               Max: Number("int"),
 *             },
 *             AcceleratorManufacturers: [ // AcceleratorManufacturerSet
 *               "nvidia" || "amd" || "amazon-web-services" || "xilinx",
 *             ],
 *             AcceleratorNames: [ // AcceleratorNameSet
 *               "a100" || "v100" || "k80" || "t4" || "m60" || "radeon-pro-v520" || "vu9p" || "inferentia" || "k520",
 *             ],
 *             AcceleratorTotalMemoryMiB: { // AcceleratorTotalMemoryMiB
 *               Min: Number("int"),
 *               Max: Number("int"),
 *             },
 *             NetworkBandwidthGbps: { // NetworkBandwidthGbps
 *               Min: Number("double"),
 *               Max: Number("double"),
 *             },
 *             AllowedInstanceTypes: [ // AllowedInstanceTypeSet
 *               "STRING_VALUE",
 *             ],
 *           },
 *         },
 *       ],
 *     },
 *   ],
 *   SpotFleetRequestId: "STRING_VALUE", // required
 *   TargetCapacity: Number("int"),
 *   OnDemandTargetCapacity: Number("int"),
 *   Context: "STRING_VALUE",
 * };
 * const command = new ModifySpotFleetRequestCommand(input);
 * const response = await client.send(command);
 * // { // ModifySpotFleetRequestResponse
 * //   Return: true || false,
 * // };
 *
 * ```
 *
 * @param ModifySpotFleetRequestCommandInput - {@link ModifySpotFleetRequestCommandInput}
 * @returns {@link ModifySpotFleetRequestCommandOutput}
 * @see {@link ModifySpotFleetRequestCommandInput} for command's `input` shape.
 * @see {@link ModifySpotFleetRequestCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @example To increase the target capacity of a Spot fleet request
 * ```javascript
 * // This example increases the target capacity of the specified Spot fleet request.
 * const input = {
 *   "SpotFleetRequestId": "sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE",
 *   "TargetCapacity": 20
 * };
 * const command = new ModifySpotFleetRequestCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Return": true
 * }
 * *\/
 * // example id: ec2-modify-spot-fleet-request-1
 * ```
 *
 * @example To decrease the target capacity of a Spot fleet request
 * ```javascript
 * // This example decreases the target capacity of the specified Spot fleet request without terminating any Spot Instances as a result.
 * const input = {
 *   "ExcessCapacityTerminationPolicy": "NoTermination ",
 *   "SpotFleetRequestId": "sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE",
 *   "TargetCapacity": 10
 * };
 * const command = new ModifySpotFleetRequestCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Return": true
 * }
 * *\/
 * // example id: ec2-modify-spot-fleet-request-2
 * ```
 *
 */
export class ModifySpotFleetRequestCommand extends $Command<
  ModifySpotFleetRequestCommandInput,
  ModifySpotFleetRequestCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: ModifySpotFleetRequestCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifySpotFleetRequestCommandInput, ModifySpotFleetRequestCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifySpotFleetRequestCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifySpotFleetRequestCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: ModifySpotFleetRequestCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ModifySpotFleetRequestCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifySpotFleetRequestCommandOutput> {
    return de_ModifySpotFleetRequestCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
