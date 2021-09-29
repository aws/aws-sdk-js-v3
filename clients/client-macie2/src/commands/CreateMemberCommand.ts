import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { CreateMemberRequest, CreateMemberResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateMemberCommand,
  serializeAws_restJson1CreateMemberCommand,
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

export interface CreateMemberCommandInput extends CreateMemberRequest {}
export interface CreateMemberCommandOutput extends CreateMemberResponse, __MetadataBearer {}

/**
 * <p>Associates an account with an Amazon Macie administrator account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, CreateMemberCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, CreateMemberCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new CreateMemberCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateMemberCommandInput} for command's `input` shape.
 * @see {@link CreateMemberCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateMemberCommand extends $Command<
  CreateMemberCommandInput,
  CreateMemberCommandOutput,
  Macie2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateMemberCommandInput) {
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
  ): Handler<CreateMemberCommandInput, CreateMemberCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Macie2Client";
    const commandName = "CreateMemberCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateMemberRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateMemberResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateMemberCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateMemberCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateMemberCommandOutput> {
    return deserializeAws_restJson1CreateMemberCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
