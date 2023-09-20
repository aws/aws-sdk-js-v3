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
import { ListInstanceFleetsInput, ListInstanceFleetsOutput } from "../models/models_0";
import { de_ListInstanceFleetsCommand, se_ListInstanceFleetsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListInstanceFleetsCommand}.
 */
export interface ListInstanceFleetsCommandInput extends ListInstanceFleetsInput {}
/**
 * @public
 *
 * The output of {@link ListInstanceFleetsCommand}.
 */
export interface ListInstanceFleetsCommandOutput extends ListInstanceFleetsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Lists all available details about the instance fleets in a cluster.</p>
 *          <note>
 *             <p>The instance fleet configuration is available only in Amazon EMR releases
 *             4.8.0 and later, excluding 5.0.x versions.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, ListInstanceFleetsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, ListInstanceFleetsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const input = { // ListInstanceFleetsInput
 *   ClusterId: "STRING_VALUE", // required
 *   Marker: "STRING_VALUE",
 * };
 * const command = new ListInstanceFleetsCommand(input);
 * const response = await client.send(command);
 * // { // ListInstanceFleetsOutput
 * //   InstanceFleets: [ // InstanceFleetList
 * //     { // InstanceFleet
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Status: { // InstanceFleetStatus
 * //         State: "PROVISIONING" || "BOOTSTRAPPING" || "RUNNING" || "RESIZING" || "SUSPENDED" || "TERMINATING" || "TERMINATED",
 * //         StateChangeReason: { // InstanceFleetStateChangeReason
 * //           Code: "INTERNAL_ERROR" || "VALIDATION_ERROR" || "INSTANCE_FAILURE" || "CLUSTER_TERMINATED",
 * //           Message: "STRING_VALUE",
 * //         },
 * //         Timeline: { // InstanceFleetTimeline
 * //           CreationDateTime: new Date("TIMESTAMP"),
 * //           ReadyDateTime: new Date("TIMESTAMP"),
 * //           EndDateTime: new Date("TIMESTAMP"),
 * //         },
 * //       },
 * //       InstanceFleetType: "MASTER" || "CORE" || "TASK",
 * //       TargetOnDemandCapacity: Number("int"),
 * //       TargetSpotCapacity: Number("int"),
 * //       ProvisionedOnDemandCapacity: Number("int"),
 * //       ProvisionedSpotCapacity: Number("int"),
 * //       InstanceTypeSpecifications: [ // InstanceTypeSpecificationList
 * //         { // InstanceTypeSpecification
 * //           InstanceType: "STRING_VALUE",
 * //           WeightedCapacity: Number("int"),
 * //           BidPrice: "STRING_VALUE",
 * //           BidPriceAsPercentageOfOnDemandPrice: Number("double"),
 * //           Configurations: [ // ConfigurationList
 * //             { // Configuration
 * //               Classification: "STRING_VALUE",
 * //               Configurations: [
 * //                 {
 * //                   Classification: "STRING_VALUE",
 * //                   Configurations: "<ConfigurationList>",
 * //                   Properties: { // StringMap
 * //                     "<keys>": "STRING_VALUE",
 * //                   },
 * //                 },
 * //               ],
 * //               Properties: {
 * //                 "<keys>": "STRING_VALUE",
 * //               },
 * //             },
 * //           ],
 * //           EbsBlockDevices: [ // EbsBlockDeviceList
 * //             { // EbsBlockDevice
 * //               VolumeSpecification: { // VolumeSpecification
 * //                 VolumeType: "STRING_VALUE", // required
 * //                 Iops: Number("int"),
 * //                 SizeInGB: Number("int"), // required
 * //                 Throughput: Number("int"),
 * //               },
 * //               Device: "STRING_VALUE",
 * //             },
 * //           ],
 * //           EbsOptimized: true || false,
 * //           CustomAmiId: "STRING_VALUE",
 * //         },
 * //       ],
 * //       LaunchSpecifications: { // InstanceFleetProvisioningSpecifications
 * //         SpotSpecification: { // SpotProvisioningSpecification
 * //           TimeoutDurationMinutes: Number("int"), // required
 * //           TimeoutAction: "SWITCH_TO_ON_DEMAND" || "TERMINATE_CLUSTER", // required
 * //           BlockDurationMinutes: Number("int"),
 * //           AllocationStrategy: "capacity-optimized" || "price-capacity-optimized" || "lowest-price" || "diversified",
 * //         },
 * //         OnDemandSpecification: { // OnDemandProvisioningSpecification
 * //           AllocationStrategy: "lowest-price", // required
 * //           CapacityReservationOptions: { // OnDemandCapacityReservationOptions
 * //             UsageStrategy: "use-capacity-reservations-first",
 * //             CapacityReservationPreference: "open" || "none",
 * //             CapacityReservationResourceGroupArn: "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //       ResizeSpecifications: { // InstanceFleetResizingSpecifications
 * //         SpotResizeSpecification: { // SpotResizingSpecification
 * //           TimeoutDurationMinutes: Number("int"), // required
 * //         },
 * //         OnDemandResizeSpecification: { // OnDemandResizingSpecification
 * //           TimeoutDurationMinutes: Number("int"), // required
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListInstanceFleetsCommandInput - {@link ListInstanceFleetsCommandInput}
 * @returns {@link ListInstanceFleetsCommandOutput}
 * @see {@link ListInstanceFleetsCommandInput} for command's `input` shape.
 * @see {@link ListInstanceFleetsCommandOutput} for command's `response` shape.
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
export class ListInstanceFleetsCommand extends $Command<
  ListInstanceFleetsCommandInput,
  ListInstanceFleetsCommandOutput,
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
  constructor(readonly input: ListInstanceFleetsCommandInput) {
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
  ): Handler<ListInstanceFleetsCommandInput, ListInstanceFleetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListInstanceFleetsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "ListInstanceFleetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ElasticMapReduce",
        operation: "ListInstanceFleets",
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
  private serialize(input: ListInstanceFleetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListInstanceFleetsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListInstanceFleetsCommandOutput> {
    return de_ListInstanceFleetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
