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
import {
  AcceptReservedInstancesExchangeQuoteRequest,
  AcceptReservedInstancesExchangeQuoteResult,
} from "../models/models_0";
import {
  de_AcceptReservedInstancesExchangeQuoteCommand,
  se_AcceptReservedInstancesExchangeQuoteCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AcceptReservedInstancesExchangeQuoteCommand}.
 */
export interface AcceptReservedInstancesExchangeQuoteCommandInput extends AcceptReservedInstancesExchangeQuoteRequest {}
/**
 * @public
 *
 * The output of {@link AcceptReservedInstancesExchangeQuoteCommand}.
 */
export interface AcceptReservedInstancesExchangeQuoteCommandOutput
  extends AcceptReservedInstancesExchangeQuoteResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Accepts the Convertible Reserved Instance exchange quote described in the <a>GetReservedInstancesExchangeQuote</a> call.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AcceptReservedInstancesExchangeQuoteCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AcceptReservedInstancesExchangeQuoteCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // AcceptReservedInstancesExchangeQuoteRequest
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
 * const command = new AcceptReservedInstancesExchangeQuoteCommand(input);
 * const response = await client.send(command);
 * // { // AcceptReservedInstancesExchangeQuoteResult
 * //   ExchangeId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AcceptReservedInstancesExchangeQuoteCommandInput - {@link AcceptReservedInstancesExchangeQuoteCommandInput}
 * @returns {@link AcceptReservedInstancesExchangeQuoteCommandOutput}
 * @see {@link AcceptReservedInstancesExchangeQuoteCommandInput} for command's `input` shape.
 * @see {@link AcceptReservedInstancesExchangeQuoteCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class AcceptReservedInstancesExchangeQuoteCommand extends $Command<
  AcceptReservedInstancesExchangeQuoteCommandInput,
  AcceptReservedInstancesExchangeQuoteCommandOutput,
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
  constructor(readonly input: AcceptReservedInstancesExchangeQuoteCommandInput) {
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
  ): Handler<AcceptReservedInstancesExchangeQuoteCommandInput, AcceptReservedInstancesExchangeQuoteCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AcceptReservedInstancesExchangeQuoteCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "AcceptReservedInstancesExchangeQuoteCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "AcceptReservedInstancesExchangeQuote",
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
    input: AcceptReservedInstancesExchangeQuoteCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_AcceptReservedInstancesExchangeQuoteCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AcceptReservedInstancesExchangeQuoteCommandOutput> {
    return de_AcceptReservedInstancesExchangeQuoteCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
