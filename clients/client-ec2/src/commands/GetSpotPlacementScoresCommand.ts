// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { GetSpotPlacementScoresRequest, GetSpotPlacementScoresResult } from "../models/models_5";
import { de_GetSpotPlacementScoresCommand, se_GetSpotPlacementScoresCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Calculates the Spot placement score for a Region or Availability Zone based on the
 *          specified target capacity and compute requirements.</p>
 *          <p>You can specify your compute requirements either by using
 *             <code>InstanceRequirementsWithMetadata</code> and letting Amazon EC2 choose the optimal
 *          instance types to fulfill your Spot request, or you can specify the instance types by using
 *             <code>InstanceTypes</code>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-placement-score.html">Spot placement score</a> in
 *          the Amazon EC2 User Guide.</p>
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
 *         "intel" || "amd" || "amazon-web-services",
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
 *         "nvidia" || "amd" || "amazon-web-services" || "xilinx",
 *       ],
 *       AcceleratorNames: [ // AcceleratorNameSet
 *         "a100" || "v100" || "k80" || "t4" || "m60" || "radeon-pro-v520" || "vu9p" || "inferentia" || "k520",
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
 */
export class GetSpotPlacementScoresCommand extends $Command<
  GetSpotPlacementScoresCommandInput,
  GetSpotPlacementScoresCommandOutput,
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
  constructor(readonly input: GetSpotPlacementScoresCommandInput) {
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
  ): Handler<GetSpotPlacementScoresCommandInput, GetSpotPlacementScoresCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSpotPlacementScoresCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetSpotPlacementScoresCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "GetSpotPlacementScores",
      },
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
  private serialize(input: GetSpotPlacementScoresCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetSpotPlacementScoresCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSpotPlacementScoresCommandOutput> {
    return de_GetSpotPlacementScoresCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
