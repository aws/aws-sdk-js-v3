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

import {
  CreateContactRequest,
  CreateContactRequestFilterSensitiveLog,
  CreateContactResponse,
  CreateContactResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateContactCommand,
  serializeAws_restJson1CreateContactCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SESv2ClientResolvedConfig } from "../SESv2Client";

/**
 * The input for {@link CreateContactCommand}.
 */
export interface CreateContactCommandInput extends CreateContactRequest {}
/**
 * The output of {@link CreateContactCommand}.
 */
export interface CreateContactCommandOutput extends CreateContactResponse, __MetadataBearer {}

/**
 * <p>Creates a contact, which is an end-user who is receiving the email, and adds them to a
 *             contact list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, CreateContactCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, CreateContactCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new CreateContactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateContactCommandInput} for command's `input` shape.
 * @see {@link CreateContactCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 */
export class CreateContactCommand extends $Command<
  CreateContactCommandInput,
  CreateContactCommandOutput,
  SESv2ClientResolvedConfig
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

  constructor(readonly input: CreateContactCommandInput) {
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
  ): Handler<CreateContactCommandInput, CreateContactCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateContactCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESv2Client";
    const commandName = "CreateContactCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateContactRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateContactResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateContactCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateContactCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateContactCommandOutput> {
    return deserializeAws_restJson1CreateContactCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
