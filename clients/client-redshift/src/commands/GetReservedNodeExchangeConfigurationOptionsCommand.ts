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

import {
  GetReservedNodeExchangeConfigurationOptionsInputMessage,
  GetReservedNodeExchangeConfigurationOptionsOutputMessage,
} from "../models/models_1";
import {
  de_GetReservedNodeExchangeConfigurationOptionsCommand,
  se_GetReservedNodeExchangeConfigurationOptionsCommand,
} from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetReservedNodeExchangeConfigurationOptionsCommand}.
 */
export interface GetReservedNodeExchangeConfigurationOptionsCommandInput
  extends GetReservedNodeExchangeConfigurationOptionsInputMessage {}
/**
 * @public
 *
 * The output of {@link GetReservedNodeExchangeConfigurationOptionsCommand}.
 */
export interface GetReservedNodeExchangeConfigurationOptionsCommandOutput
  extends GetReservedNodeExchangeConfigurationOptionsOutputMessage,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets the configuration options for the reserved-node exchange. These options
 *             include information about the source reserved node and target reserved node offering.
 *             Details include the node type, the price, the node count, and the offering type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, GetReservedNodeExchangeConfigurationOptionsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, GetReservedNodeExchangeConfigurationOptionsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // GetReservedNodeExchangeConfigurationOptionsInputMessage
 *   ActionType: "restore-cluster" || "resize-cluster", // required
 *   ClusterIdentifier: "STRING_VALUE",
 *   SnapshotIdentifier: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new GetReservedNodeExchangeConfigurationOptionsCommand(input);
 * const response = await client.send(command);
 * // { // GetReservedNodeExchangeConfigurationOptionsOutputMessage
 * //   Marker: "STRING_VALUE",
 * //   ReservedNodeConfigurationOptionList: [ // ReservedNodeConfigurationOptionList
 * //     { // ReservedNodeConfigurationOption
 * //       SourceReservedNode: { // ReservedNode
 * //         ReservedNodeId: "STRING_VALUE",
 * //         ReservedNodeOfferingId: "STRING_VALUE",
 * //         NodeType: "STRING_VALUE",
 * //         StartTime: new Date("TIMESTAMP"),
 * //         Duration: Number("int"),
 * //         FixedPrice: Number("double"),
 * //         UsagePrice: Number("double"),
 * //         CurrencyCode: "STRING_VALUE",
 * //         NodeCount: Number("int"),
 * //         State: "STRING_VALUE",
 * //         OfferingType: "STRING_VALUE",
 * //         RecurringCharges: [ // RecurringChargeList
 * //           { // RecurringCharge
 * //             RecurringChargeAmount: Number("double"),
 * //             RecurringChargeFrequency: "STRING_VALUE",
 * //           },
 * //         ],
 * //         ReservedNodeOfferingType: "Regular" || "Upgradable",
 * //       },
 * //       TargetReservedNodeCount: Number("int"),
 * //       TargetReservedNodeOffering: { // ReservedNodeOffering
 * //         ReservedNodeOfferingId: "STRING_VALUE",
 * //         NodeType: "STRING_VALUE",
 * //         Duration: Number("int"),
 * //         FixedPrice: Number("double"),
 * //         UsagePrice: Number("double"),
 * //         CurrencyCode: "STRING_VALUE",
 * //         OfferingType: "STRING_VALUE",
 * //         RecurringCharges: [
 * //           {
 * //             RecurringChargeAmount: Number("double"),
 * //             RecurringChargeFrequency: "STRING_VALUE",
 * //           },
 * //         ],
 * //         ReservedNodeOfferingType: "Regular" || "Upgradable",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetReservedNodeExchangeConfigurationOptionsCommandInput - {@link GetReservedNodeExchangeConfigurationOptionsCommandInput}
 * @returns {@link GetReservedNodeExchangeConfigurationOptionsCommandOutput}
 * @see {@link GetReservedNodeExchangeConfigurationOptionsCommandInput} for command's `input` shape.
 * @see {@link GetReservedNodeExchangeConfigurationOptionsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ClusterNotFoundFault} (client fault)
 *  <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster.
 *         </p>
 *
 * @throws {@link ClusterSnapshotNotFoundFault} (client fault)
 *  <p>The snapshot identifier does not refer to an existing cluster snapshot.</p>
 *
 * @throws {@link DependentServiceUnavailableFault} (client fault)
 *  <p>Your request cannot be completed because a dependent internal service is
 *             temporarily unavailable. Wait 30 to 60 seconds and try again.</p>
 *
 * @throws {@link InvalidReservedNodeStateFault} (client fault)
 *  <p>Indicates that the Reserved Node being exchanged is not in an active state.</p>
 *
 * @throws {@link ReservedNodeAlreadyMigratedFault} (client fault)
 *  <p>Indicates that the reserved node has already been exchanged.</p>
 *
 * @throws {@link ReservedNodeNotFoundFault} (client fault)
 *  <p>The specified reserved compute node not found.</p>
 *
 * @throws {@link ReservedNodeOfferingNotFoundFault} (client fault)
 *  <p>Specified offering does not exist.</p>
 *
 * @throws {@link UnsupportedOperationFault} (client fault)
 *  <p>The requested operation isn't supported.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 */
export class GetReservedNodeExchangeConfigurationOptionsCommand extends $Command<
  GetReservedNodeExchangeConfigurationOptionsCommandInput,
  GetReservedNodeExchangeConfigurationOptionsCommandOutput,
  RedshiftClientResolvedConfig
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
  constructor(readonly input: GetReservedNodeExchangeConfigurationOptionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetReservedNodeExchangeConfigurationOptionsCommandInput,
    GetReservedNodeExchangeConfigurationOptionsCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        GetReservedNodeExchangeConfigurationOptionsCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "GetReservedNodeExchangeConfigurationOptionsCommand";
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
    input: GetReservedNodeExchangeConfigurationOptionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetReservedNodeExchangeConfigurationOptionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetReservedNodeExchangeConfigurationOptionsCommandOutput> {
    return de_GetReservedNodeExchangeConfigurationOptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
