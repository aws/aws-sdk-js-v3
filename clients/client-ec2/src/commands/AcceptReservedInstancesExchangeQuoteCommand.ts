import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  AcceptReservedInstancesExchangeQuoteRequest,
  AcceptReservedInstancesExchangeQuoteResult,
} from "../models/models_0";
import {
  deserializeAws_ec2AcceptReservedInstancesExchangeQuoteCommand,
  serializeAws_ec2AcceptReservedInstancesExchangeQuoteCommand,
} from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface AcceptReservedInstancesExchangeQuoteCommandInput extends AcceptReservedInstancesExchangeQuoteRequest {}
export interface AcceptReservedInstancesExchangeQuoteCommandOutput
  extends AcceptReservedInstancesExchangeQuoteResult,
    __MetadataBearer {}

/**
 * <p>Accepts the Convertible Reserved Instance exchange quote described in the <a>GetReservedInstancesExchangeQuote</a> call.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AcceptReservedInstancesExchangeQuoteCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AcceptReservedInstancesExchangeQuoteCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AcceptReservedInstancesExchangeQuoteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AcceptReservedInstancesExchangeQuoteCommandInput} for command's `input` shape.
 * @see {@link AcceptReservedInstancesExchangeQuoteCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class AcceptReservedInstancesExchangeQuoteCommand extends $Command<
  AcceptReservedInstancesExchangeQuoteCommandInput,
  AcceptReservedInstancesExchangeQuoteCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "AcceptReservedInstancesExchangeQuoteCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AcceptReservedInstancesExchangeQuoteRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AcceptReservedInstancesExchangeQuoteResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AcceptReservedInstancesExchangeQuoteCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2AcceptReservedInstancesExchangeQuoteCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AcceptReservedInstancesExchangeQuoteCommandOutput> {
    return deserializeAws_ec2AcceptReservedInstancesExchangeQuoteCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
