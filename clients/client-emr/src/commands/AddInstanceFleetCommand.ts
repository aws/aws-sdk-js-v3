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

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { AddInstanceFleetInput, AddInstanceFleetOutput } from "../models/models_0";
import { de_AddInstanceFleetCommand, se_AddInstanceFleetCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AddInstanceFleetCommand}.
 */
export interface AddInstanceFleetCommandInput extends AddInstanceFleetInput {}
/**
 * @public
 *
 * The output of {@link AddInstanceFleetCommand}.
 */
export interface AddInstanceFleetCommandOutput extends AddInstanceFleetOutput, __MetadataBearer {}

/**
 * @public
 * <p>Adds an instance fleet to a running cluster.</p>
 *          <note>
 *             <p>The instance fleet configuration is available only in Amazon EMR releases
 *             4.8.0 and later, excluding 5.0.x.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, AddInstanceFleetCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, AddInstanceFleetCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const input = { // AddInstanceFleetInput
 *   ClusterId: "STRING_VALUE", // required
 *   InstanceFleet: { // InstanceFleetConfig
 *     Name: "STRING_VALUE",
 *     InstanceFleetType: "MASTER" || "CORE" || "TASK", // required
 *     TargetOnDemandCapacity: Number("int"),
 *     TargetSpotCapacity: Number("int"),
 *     InstanceTypeConfigs: [ // InstanceTypeConfigList
 *       { // InstanceTypeConfig
 *         InstanceType: "STRING_VALUE", // required
 *         WeightedCapacity: Number("int"),
 *         BidPrice: "STRING_VALUE",
 *         BidPriceAsPercentageOfOnDemandPrice: Number("double"),
 *         EbsConfiguration: { // EbsConfiguration
 *           EbsBlockDeviceConfigs: [ // EbsBlockDeviceConfigList
 *             { // EbsBlockDeviceConfig
 *               VolumeSpecification: { // VolumeSpecification
 *                 VolumeType: "STRING_VALUE", // required
 *                 Iops: Number("int"),
 *                 SizeInGB: Number("int"), // required
 *                 Throughput: Number("int"),
 *               },
 *               VolumesPerInstance: Number("int"),
 *             },
 *           ],
 *           EbsOptimized: true || false,
 *         },
 *         Configurations: [ // ConfigurationList
 *           { // Configuration
 *             Classification: "STRING_VALUE",
 *             Configurations: [
 *               {
 *                 Classification: "STRING_VALUE",
 *                 Configurations: "<ConfigurationList>",
 *                 Properties: { // StringMap
 *                   "<keys>": "STRING_VALUE",
 *                 },
 *               },
 *             ],
 *             Properties: {
 *               "<keys>": "STRING_VALUE",
 *             },
 *           },
 *         ],
 *         CustomAmiId: "STRING_VALUE",
 *       },
 *     ],
 *     LaunchSpecifications: { // InstanceFleetProvisioningSpecifications
 *       SpotSpecification: { // SpotProvisioningSpecification
 *         TimeoutDurationMinutes: Number("int"), // required
 *         TimeoutAction: "SWITCH_TO_ON_DEMAND" || "TERMINATE_CLUSTER", // required
 *         BlockDurationMinutes: Number("int"),
 *         AllocationStrategy: "capacity-optimized" || "price-capacity-optimized" || "lowest-price" || "diversified",
 *       },
 *       OnDemandSpecification: { // OnDemandProvisioningSpecification
 *         AllocationStrategy: "lowest-price", // required
 *         CapacityReservationOptions: { // OnDemandCapacityReservationOptions
 *           UsageStrategy: "use-capacity-reservations-first",
 *           CapacityReservationPreference: "open" || "none",
 *           CapacityReservationResourceGroupArn: "STRING_VALUE",
 *         },
 *       },
 *     },
 *     ResizeSpecifications: { // InstanceFleetResizingSpecifications
 *       SpotResizeSpecification: { // SpotResizingSpecification
 *         TimeoutDurationMinutes: Number("int"), // required
 *       },
 *       OnDemandResizeSpecification: { // OnDemandResizingSpecification
 *         TimeoutDurationMinutes: Number("int"), // required
 *       },
 *     },
 *   },
 * };
 * const command = new AddInstanceFleetCommand(input);
 * const response = await client.send(command);
 * // { // AddInstanceFleetOutput
 * //   ClusterId: "STRING_VALUE",
 * //   InstanceFleetId: "STRING_VALUE",
 * //   ClusterArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AddInstanceFleetCommandInput - {@link AddInstanceFleetCommandInput}
 * @returns {@link AddInstanceFleetCommandOutput}
 * @see {@link AddInstanceFleetCommandInput} for command's `input` shape.
 * @see {@link AddInstanceFleetCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Amazon EMR
 *          service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception occurs when there is something wrong with user input.</p>
 *
 * @throws {@link EMRServiceException}
 * <p>Base exception class for all service exceptions from EMR service.</p>
 *
 */
export class AddInstanceFleetCommand extends $Command<
  AddInstanceFleetCommandInput,
  AddInstanceFleetCommandOutput,
  EMRClientResolvedConfig
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
  constructor(readonly input: AddInstanceFleetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AddInstanceFleetCommandInput, AddInstanceFleetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AddInstanceFleetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "AddInstanceFleetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ElasticMapReduce",
        operation: "AddInstanceFleet",
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
  private serialize(input: AddInstanceFleetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AddInstanceFleetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddInstanceFleetCommandOutput> {
    return de_AddInstanceFleetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
