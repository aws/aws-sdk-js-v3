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

import { AcceptReservedNodeExchangeInputMessage, AcceptReservedNodeExchangeOutputMessage } from "../models/models_0";
import { de_AcceptReservedNodeExchangeCommand, se_AcceptReservedNodeExchangeCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AcceptReservedNodeExchangeCommand}.
 */
export interface AcceptReservedNodeExchangeCommandInput extends AcceptReservedNodeExchangeInputMessage {}
/**
 * @public
 *
 * The output of {@link AcceptReservedNodeExchangeCommand}.
 */
export interface AcceptReservedNodeExchangeCommandOutput
  extends AcceptReservedNodeExchangeOutputMessage,
    __MetadataBearer {}

/**
 * @public
 * <p>Exchanges a DC1 Reserved Node for a DC2 Reserved Node with no changes to the
 *             configuration (term, payment type, or number of nodes) and no additional costs.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, AcceptReservedNodeExchangeCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, AcceptReservedNodeExchangeCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // AcceptReservedNodeExchangeInputMessage
 *   ReservedNodeId: "STRING_VALUE", // required
 *   TargetReservedNodeOfferingId: "STRING_VALUE", // required
 * };
 * const command = new AcceptReservedNodeExchangeCommand(input);
 * const response = await client.send(command);
 * // { // AcceptReservedNodeExchangeOutputMessage
 * //   ExchangedReservedNode: { // ReservedNode
 * //     ReservedNodeId: "STRING_VALUE",
 * //     ReservedNodeOfferingId: "STRING_VALUE",
 * //     NodeType: "STRING_VALUE",
 * //     StartTime: new Date("TIMESTAMP"),
 * //     Duration: Number("int"),
 * //     FixedPrice: Number("double"),
 * //     UsagePrice: Number("double"),
 * //     CurrencyCode: "STRING_VALUE",
 * //     NodeCount: Number("int"),
 * //     State: "STRING_VALUE",
 * //     OfferingType: "STRING_VALUE",
 * //     RecurringCharges: [ // RecurringChargeList
 * //       { // RecurringCharge
 * //         RecurringChargeAmount: Number("double"),
 * //         RecurringChargeFrequency: "STRING_VALUE",
 * //       },
 * //     ],
 * //     ReservedNodeOfferingType: "Regular" || "Upgradable",
 * //   },
 * // };
 *
 * ```
 *
 * @param AcceptReservedNodeExchangeCommandInput - {@link AcceptReservedNodeExchangeCommandInput}
 * @returns {@link AcceptReservedNodeExchangeCommandOutput}
 * @see {@link AcceptReservedNodeExchangeCommandInput} for command's `input` shape.
 * @see {@link AcceptReservedNodeExchangeCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link DependentServiceUnavailableFault} (client fault)
 *  <p>Your request cannot be completed because a dependent internal service is
 *             temporarily unavailable. Wait 30 to 60 seconds and try again.</p>
 *
 * @throws {@link InvalidReservedNodeStateFault} (client fault)
 *  <p>Indicates that the Reserved Node being exchanged is not in an active state.</p>
 *
 * @throws {@link ReservedNodeAlreadyExistsFault} (client fault)
 *  <p>User already has a reservation with the given identifier.</p>
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
export class AcceptReservedNodeExchangeCommand extends $Command<
  AcceptReservedNodeExchangeCommandInput,
  AcceptReservedNodeExchangeCommandOutput,
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
  constructor(readonly input: AcceptReservedNodeExchangeCommandInput) {
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
  ): Handler<AcceptReservedNodeExchangeCommandInput, AcceptReservedNodeExchangeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AcceptReservedNodeExchangeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "AcceptReservedNodeExchangeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RedshiftServiceVersion20121201",
        operation: "AcceptReservedNodeExchange",
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
  private serialize(input: AcceptReservedNodeExchangeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AcceptReservedNodeExchangeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AcceptReservedNodeExchangeCommandOutput> {
    return de_AcceptReservedNodeExchangeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
