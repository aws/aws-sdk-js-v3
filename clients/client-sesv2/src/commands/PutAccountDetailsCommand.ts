import { SESv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESv2Client";
import { PutAccountDetailsRequest, PutAccountDetailsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1PutAccountDetailsCommand,
  serializeAws_restJson1PutAccountDetailsCommand,
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

export interface PutAccountDetailsCommandInput extends PutAccountDetailsRequest {}
export interface PutAccountDetailsCommandOutput extends PutAccountDetailsResponse, __MetadataBearer {}

/**
 * <p>Update your Amazon SES account details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, PutAccountDetailsCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, PutAccountDetailsCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new PutAccountDetailsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutAccountDetailsCommandInput} for command's `input` shape.
 * @see {@link PutAccountDetailsCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class PutAccountDetailsCommand extends $Command<
  PutAccountDetailsCommandInput,
  PutAccountDetailsCommandOutput,
  SESv2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutAccountDetailsCommandInput) {
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
  ): Handler<PutAccountDetailsCommandInput, PutAccountDetailsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESv2Client";
    const commandName = "PutAccountDetailsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutAccountDetailsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutAccountDetailsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutAccountDetailsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutAccountDetailsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutAccountDetailsCommandOutput> {
    return deserializeAws_restJson1PutAccountDetailsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
