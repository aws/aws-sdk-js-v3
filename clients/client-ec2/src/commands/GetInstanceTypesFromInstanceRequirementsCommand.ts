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
} from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  GetInstanceTypesFromInstanceRequirementsRequest,
  GetInstanceTypesFromInstanceRequirementsResult,
} from "../models/models_5";
import {
  de_GetInstanceTypesFromInstanceRequirementsCommand,
  se_GetInstanceTypesFromInstanceRequirementsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Returns a list of instance types with the specified instance attributes. You can
 *          use the response to preview the instance types without launching instances. Note
 *          that the response does not consider capacity.</p>
 *          <p>When you specify multiple parameters, you get instance types that satisfy all of the
 *          specified parameters. If you specify multiple values for a parameter, you get instance
 *          types that satisfy any of the specified values.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-fleet-attribute-based-instance-type-selection.html#spotfleet-get-instance-types-from-instance-requirements">Preview instance types with specified attributes</a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-attribute-based-instance-type-selection.html">Attribute-based instance type selection for EC2 Fleet</a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-fleet-attribute-based-instance-type-selection.html">Attribute-based instance type selection for Spot Fleet</a>, and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-placement-score.html">Spot
 *             placement score</a> in the <i>Amazon EC2 User Guide</i>, and <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-asg-instance-type-requirements.html">Creating an
 *             Auto Scaling group using attribute-based instance type selection</a> in the
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
 *       "intel" || "amd" || "amazon-web-services",
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
 *       "nvidia" || "amd" || "amazon-web-services" || "xilinx",
 *     ],
 *     AcceleratorNames: [ // AcceleratorNameSet
 *       "a100" || "v100" || "k80" || "t4" || "m60" || "radeon-pro-v520" || "vu9p" || "inferentia" || "k520",
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
 *   },
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
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
 */
export class GetInstanceTypesFromInstanceRequirementsCommand extends $Command<
  GetInstanceTypesFromInstanceRequirementsCommandInput,
  GetInstanceTypesFromInstanceRequirementsCommandOutput,
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
  constructor(readonly input: GetInstanceTypesFromInstanceRequirementsCommandInput) {
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
  ): Handler<
    GetInstanceTypesFromInstanceRequirementsCommandInput,
    GetInstanceTypesFromInstanceRequirementsCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        GetInstanceTypesFromInstanceRequirementsCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetInstanceTypesFromInstanceRequirementsCommand";
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
  private serialize(
    input: GetInstanceTypesFromInstanceRequirementsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetInstanceTypesFromInstanceRequirementsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetInstanceTypesFromInstanceRequirementsCommandOutput> {
    return de_GetInstanceTypesFromInstanceRequirementsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
