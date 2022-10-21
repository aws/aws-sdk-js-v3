// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  AcceptReservedInstancesExchangeQuoteRequest,
  AcceptReservedInstancesExchangeQuoteRequestFilterSensitiveLog,
  AcceptReservedInstancesExchangeQuoteResult,
  AcceptReservedInstancesExchangeQuoteResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_ec2AcceptReservedInstancesExchangeQuoteCommand,
  serializeAws_ec2AcceptReservedInstancesExchangeQuoteCommand,
} from "../protocols/Aws_ec2";

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
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
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
      inputFilterSensitiveLog: AcceptReservedInstancesExchangeQuoteRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AcceptReservedInstancesExchangeQuoteResultFilterSensitiveLog,
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
