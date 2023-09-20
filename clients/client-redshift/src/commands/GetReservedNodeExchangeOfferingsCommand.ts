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

import {
  GetReservedNodeExchangeOfferingsInputMessage,
  GetReservedNodeExchangeOfferingsOutputMessage,
} from "../models/models_1";
import {
  de_GetReservedNodeExchangeOfferingsCommand,
  se_GetReservedNodeExchangeOfferingsCommand,
} from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetReservedNodeExchangeOfferingsCommand}.
 */
export interface GetReservedNodeExchangeOfferingsCommandInput extends GetReservedNodeExchangeOfferingsInputMessage {}
/**
 * @public
 *
 * The output of {@link GetReservedNodeExchangeOfferingsCommand}.
 */
export interface GetReservedNodeExchangeOfferingsCommandOutput
  extends GetReservedNodeExchangeOfferingsOutputMessage,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns an array of DC2 ReservedNodeOfferings that matches the payment type, term,
 *             and usage price of the given DC1 reserved node.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, GetReservedNodeExchangeOfferingsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, GetReservedNodeExchangeOfferingsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // GetReservedNodeExchangeOfferingsInputMessage
 *   ReservedNodeId: "STRING_VALUE", // required
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new GetReservedNodeExchangeOfferingsCommand(input);
 * const response = await client.send(command);
 * // { // GetReservedNodeExchangeOfferingsOutputMessage
 * //   Marker: "STRING_VALUE",
 * //   ReservedNodeOfferings: [ // ReservedNodeOfferingList
 * //     { // ReservedNodeOffering
 * //       ReservedNodeOfferingId: "STRING_VALUE",
 * //       NodeType: "STRING_VALUE",
 * //       Duration: Number("int"),
 * //       FixedPrice: Number("double"),
 * //       UsagePrice: Number("double"),
 * //       CurrencyCode: "STRING_VALUE",
 * //       OfferingType: "STRING_VALUE",
 * //       RecurringCharges: [ // RecurringChargeList
 * //         { // RecurringCharge
 * //           RecurringChargeAmount: Number("double"),
 * //           RecurringChargeFrequency: "STRING_VALUE",
 * //         },
 * //       ],
 * //       ReservedNodeOfferingType: "Regular" || "Upgradable",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetReservedNodeExchangeOfferingsCommandInput - {@link GetReservedNodeExchangeOfferingsCommandInput}
 * @returns {@link GetReservedNodeExchangeOfferingsCommandOutput}
 * @see {@link GetReservedNodeExchangeOfferingsCommandInput} for command's `input` shape.
 * @see {@link GetReservedNodeExchangeOfferingsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
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
export class GetReservedNodeExchangeOfferingsCommand extends $Command<
  GetReservedNodeExchangeOfferingsCommandInput,
  GetReservedNodeExchangeOfferingsCommandOutput,
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
  constructor(readonly input: GetReservedNodeExchangeOfferingsCommandInput) {
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
  ): Handler<GetReservedNodeExchangeOfferingsCommandInput, GetReservedNodeExchangeOfferingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetReservedNodeExchangeOfferingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "GetReservedNodeExchangeOfferingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RedshiftServiceVersion20121201",
        operation: "GetReservedNodeExchangeOfferings",
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
  private serialize(
    input: GetReservedNodeExchangeOfferingsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetReservedNodeExchangeOfferingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetReservedNodeExchangeOfferingsCommandOutput> {
    return de_GetReservedNodeExchangeOfferingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
