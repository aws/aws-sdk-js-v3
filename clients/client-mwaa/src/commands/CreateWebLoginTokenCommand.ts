import { MWAAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MWAAClient";
import { CreateWebLoginTokenRequest, CreateWebLoginTokenResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateWebLoginTokenCommand,
  serializeAws_restJson1CreateWebLoginTokenCommand,
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

export interface CreateWebLoginTokenCommandInput extends CreateWebLoginTokenRequest {}
export interface CreateWebLoginTokenCommandOutput extends CreateWebLoginTokenResponse, __MetadataBearer {}

/**
 * <p>Create a JWT token to be used to login to Airflow Web UI with claims based Authentication.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MWAAClient, CreateWebLoginTokenCommand } from "@aws-sdk/client-mwaa"; // ES Modules import
 * // const { MWAAClient, CreateWebLoginTokenCommand } = require("@aws-sdk/client-mwaa"); // CommonJS import
 * const client = new MWAAClient(config);
 * const command = new CreateWebLoginTokenCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateWebLoginTokenCommandInput} for command's `input` shape.
 * @see {@link CreateWebLoginTokenCommandOutput} for command's `response` shape.
 * @see {@link MWAAClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateWebLoginTokenCommand extends $Command<
  CreateWebLoginTokenCommandInput,
  CreateWebLoginTokenCommandOutput,
  MWAAClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateWebLoginTokenCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MWAAClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateWebLoginTokenCommandInput, CreateWebLoginTokenCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MWAAClient";
    const commandName = "CreateWebLoginTokenCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateWebLoginTokenRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateWebLoginTokenResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateWebLoginTokenCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateWebLoginTokenCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateWebLoginTokenCommandOutput> {
    return deserializeAws_restJson1CreateWebLoginTokenCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
