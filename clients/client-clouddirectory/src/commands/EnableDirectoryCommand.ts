import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { EnableDirectoryRequest, EnableDirectoryResponse } from "../models/models_0";
import {
  deserializeAws_restJson1EnableDirectoryCommand,
  serializeAws_restJson1EnableDirectoryCommand,
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

export interface EnableDirectoryCommandInput extends EnableDirectoryRequest {}
export interface EnableDirectoryCommandOutput extends EnableDirectoryResponse, __MetadataBearer {}

/**
 * <p>Enables the specified directory. Only disabled directories can be enabled. Once
 *       enabled, the directory can then be read and written to.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, EnableDirectoryCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, EnableDirectoryCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new EnableDirectoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableDirectoryCommandInput} for command's `input` shape.
 * @see {@link EnableDirectoryCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class EnableDirectoryCommand extends $Command<
  EnableDirectoryCommandInput,
  EnableDirectoryCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: EnableDirectoryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudDirectoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<EnableDirectoryCommandInput, EnableDirectoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudDirectoryClient";
    const commandName = "EnableDirectoryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: EnableDirectoryRequest.filterSensitiveLog,
      outputFilterSensitiveLog: EnableDirectoryResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: EnableDirectoryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1EnableDirectoryCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<EnableDirectoryCommandOutput> {
    return deserializeAws_restJson1EnableDirectoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
