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
import { GetReservedInstancesExchangeQuoteRequest, GetReservedInstancesExchangeQuoteResult } from "../models/models_5";
import {
  de_GetReservedInstancesExchangeQuoteCommand,
  se_GetReservedInstancesExchangeQuoteCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetReservedInstancesExchangeQuoteCommand}.
 */
export interface GetReservedInstancesExchangeQuoteCommandInput extends GetReservedInstancesExchangeQuoteRequest {}
/**
 * @public
 *
 * The output of {@link GetReservedInstancesExchangeQuoteCommand}.
 */
export interface GetReservedInstancesExchangeQuoteCommandOutput
  extends GetReservedInstancesExchangeQuoteResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns a quote and exchange information for exchanging one or more specified
 *             Convertible Reserved Instances for a new Convertible Reserved Instance. If the exchange
 *             cannot be performed, the reason is returned in the response. Use <a>AcceptReservedInstancesExchangeQuote</a> to perform the exchange.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetReservedInstancesExchangeQuoteCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetReservedInstancesExchangeQuoteCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // GetReservedInstancesExchangeQuoteRequest
 *   DryRun: true || false,
 *   ReservedInstanceIds: [ // ReservedInstanceIdSet // required
 *     "STRING_VALUE",
 *   ],
 *   TargetConfigurations: [ // TargetConfigurationRequestSet
 *     { // TargetConfigurationRequest
 *       InstanceCount: Number("int"),
 *       OfferingId: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new GetReservedInstancesExchangeQuoteCommand(input);
 * const response = await client.send(command);
 * // { // GetReservedInstancesExchangeQuoteResult
 * //   CurrencyCode: "STRING_VALUE",
 * //   IsValidExchange: true || false,
 * //   OutputReservedInstancesWillExpireAt: new Date("TIMESTAMP"),
 * //   PaymentDue: "STRING_VALUE",
 * //   ReservedInstanceValueRollup: { // ReservationValue
 * //     HourlyPrice: "STRING_VALUE",
 * //     RemainingTotalValue: "STRING_VALUE",
 * //     RemainingUpfrontValue: "STRING_VALUE",
 * //   },
 * //   ReservedInstanceValueSet: [ // ReservedInstanceReservationValueSet
 * //     { // ReservedInstanceReservationValue
 * //       ReservationValue: {
 * //         HourlyPrice: "STRING_VALUE",
 * //         RemainingTotalValue: "STRING_VALUE",
 * //         RemainingUpfrontValue: "STRING_VALUE",
 * //       },
 * //       ReservedInstanceId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   TargetConfigurationValueRollup: {
 * //     HourlyPrice: "STRING_VALUE",
 * //     RemainingTotalValue: "STRING_VALUE",
 * //     RemainingUpfrontValue: "STRING_VALUE",
 * //   },
 * //   TargetConfigurationValueSet: [ // TargetReservationValueSet
 * //     { // TargetReservationValue
 * //       ReservationValue: {
 * //         HourlyPrice: "STRING_VALUE",
 * //         RemainingTotalValue: "STRING_VALUE",
 * //         RemainingUpfrontValue: "STRING_VALUE",
 * //       },
 * //       TargetConfiguration: { // TargetConfiguration
 * //         InstanceCount: Number("int"),
 * //         OfferingId: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   ValidationFailureReason: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetReservedInstancesExchangeQuoteCommandInput - {@link GetReservedInstancesExchangeQuoteCommandInput}
 * @returns {@link GetReservedInstancesExchangeQuoteCommandOutput}
 * @see {@link GetReservedInstancesExchangeQuoteCommandInput} for command's `input` shape.
 * @see {@link GetReservedInstancesExchangeQuoteCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class GetReservedInstancesExchangeQuoteCommand extends $Command<
  GetReservedInstancesExchangeQuoteCommandInput,
  GetReservedInstancesExchangeQuoteCommandOutput,
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
  constructor(readonly input: GetReservedInstancesExchangeQuoteCommandInput) {
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
  ): Handler<GetReservedInstancesExchangeQuoteCommandInput, GetReservedInstancesExchangeQuoteCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetReservedInstancesExchangeQuoteCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetReservedInstancesExchangeQuoteCommand";
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
    input: GetReservedInstancesExchangeQuoteCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetReservedInstancesExchangeQuoteCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetReservedInstancesExchangeQuoteCommandOutput> {
    return de_GetReservedInstancesExchangeQuoteCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
