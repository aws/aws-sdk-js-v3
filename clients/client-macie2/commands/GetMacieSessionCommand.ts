import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { GetMacieSessionRequest, GetMacieSessionResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetMacieSessionCommand,
  serializeAws_restJson1GetMacieSessionCommand,
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

export interface GetMacieSessionCommandInput extends GetMacieSessionRequest {}
export interface GetMacieSessionCommandOutput extends GetMacieSessionResponse, __MetadataBearer {}

/**
 * <p>Retrieves the current status and configuration settings for an Amazon Macie account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, GetMacieSessionCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, GetMacieSessionCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new GetMacieSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMacieSessionCommandInput} for command's `input` shape.
 * @see {@link GetMacieSessionCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetMacieSessionCommand extends $Command<
  GetMacieSessionCommandInput,
  GetMacieSessionCommandOutput,
  Macie2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetMacieSessionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Macie2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetMacieSessionCommandInput, GetMacieSessionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Macie2Client";
    const commandName = "GetMacieSessionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetMacieSessionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetMacieSessionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetMacieSessionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetMacieSessionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetMacieSessionCommandOutput> {
    return deserializeAws_restJson1GetMacieSessionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
