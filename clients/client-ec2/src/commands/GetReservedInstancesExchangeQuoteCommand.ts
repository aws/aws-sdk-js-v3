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
  GetReservedInstancesExchangeQuoteRequest,
  GetReservedInstancesExchangeQuoteRequestFilterSensitiveLog,
  GetReservedInstancesExchangeQuoteResult,
  GetReservedInstancesExchangeQuoteResultFilterSensitiveLog,
} from "../models/models_5";
import {
  deserializeAws_ec2GetReservedInstancesExchangeQuoteCommand,
  serializeAws_ec2GetReservedInstancesExchangeQuoteCommand,
} from "../protocols/Aws_ec2";

export interface GetReservedInstancesExchangeQuoteCommandInput extends GetReservedInstancesExchangeQuoteRequest {}
export interface GetReservedInstancesExchangeQuoteCommandOutput
  extends GetReservedInstancesExchangeQuoteResult,
    __MetadataBearer {}

/**
 * <p>Returns a quote and exchange information for exchanging one or more specified
 *             Convertible Reserved Instances for a new Convertible Reserved Instance. If the exchange
 *             cannot be performed, the reason is returned in the response. Use <a>AcceptReservedInstancesExchangeQuote</a> to perform the exchange.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetReservedInstancesExchangeQuoteCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetReservedInstancesExchangeQuoteCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new GetReservedInstancesExchangeQuoteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetReservedInstancesExchangeQuoteCommandInput} for command's `input` shape.
 * @see {@link GetReservedInstancesExchangeQuoteCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
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
      inputFilterSensitiveLog: GetReservedInstancesExchangeQuoteRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetReservedInstancesExchangeQuoteResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetReservedInstancesExchangeQuoteCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2GetReservedInstancesExchangeQuoteCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetReservedInstancesExchangeQuoteCommandOutput> {
    return deserializeAws_ec2GetReservedInstancesExchangeQuoteCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
