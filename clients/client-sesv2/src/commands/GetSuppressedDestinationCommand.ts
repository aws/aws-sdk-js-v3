import { SESv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESv2Client";
import { GetSuppressedDestinationRequest, GetSuppressedDestinationResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetSuppressedDestinationCommand,
  serializeAws_restJson1GetSuppressedDestinationCommand,
} from "../protocols/Aws_restJson1";
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

export interface GetSuppressedDestinationCommandInput extends GetSuppressedDestinationRequest {}
export interface GetSuppressedDestinationCommandOutput extends GetSuppressedDestinationResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about a specific email address that's on the suppression list
 *             for your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, GetSuppressedDestinationCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, GetSuppressedDestinationCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new GetSuppressedDestinationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSuppressedDestinationCommandInput} for command's `input` shape.
 * @see {@link GetSuppressedDestinationCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetSuppressedDestinationCommand extends $Command<
  GetSuppressedDestinationCommandInput,
  GetSuppressedDestinationCommandOutput,
  SESv2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetSuppressedDestinationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESv2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSuppressedDestinationCommandInput, GetSuppressedDestinationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESv2Client";
    const commandName = "GetSuppressedDestinationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSuppressedDestinationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetSuppressedDestinationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSuppressedDestinationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetSuppressedDestinationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSuppressedDestinationCommandOutput> {
    return deserializeAws_restJson1GetSuppressedDestinationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
