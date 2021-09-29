import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { CreateAuthenticationProfileMessage, CreateAuthenticationProfileResult } from "../models/models_0";
import {
  deserializeAws_queryCreateAuthenticationProfileCommand,
  serializeAws_queryCreateAuthenticationProfileCommand,
} from "../protocols/Aws_query";
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

export interface CreateAuthenticationProfileCommandInput extends CreateAuthenticationProfileMessage {}
export interface CreateAuthenticationProfileCommandOutput extends CreateAuthenticationProfileResult, __MetadataBearer {}

/**
 * <p>Creates an authentication profile with the specified parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, CreateAuthenticationProfileCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, CreateAuthenticationProfileCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new CreateAuthenticationProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAuthenticationProfileCommandInput} for command's `input` shape.
 * @see {@link CreateAuthenticationProfileCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateAuthenticationProfileCommand extends $Command<
  CreateAuthenticationProfileCommandInput,
  CreateAuthenticationProfileCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateAuthenticationProfileCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateAuthenticationProfileCommandInput, CreateAuthenticationProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "CreateAuthenticationProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateAuthenticationProfileMessage.filterSensitiveLog,
      outputFilterSensitiveLog: CreateAuthenticationProfileResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateAuthenticationProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateAuthenticationProfileCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateAuthenticationProfileCommandOutput> {
    return deserializeAws_queryCreateAuthenticationProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
