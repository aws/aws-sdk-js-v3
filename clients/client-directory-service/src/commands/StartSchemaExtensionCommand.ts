import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { StartSchemaExtensionRequest, StartSchemaExtensionResult } from "../models/models_0";
import {
  deserializeAws_json1_1StartSchemaExtensionCommand,
  serializeAws_json1_1StartSchemaExtensionCommand,
} from "../protocols/Aws_json1_1";
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

export interface StartSchemaExtensionCommandInput extends StartSchemaExtensionRequest {}
export interface StartSchemaExtensionCommandOutput extends StartSchemaExtensionResult, __MetadataBearer {}

/**
 * <p>Applies a schema extension to a Microsoft AD directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, StartSchemaExtensionCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, StartSchemaExtensionCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new StartSchemaExtensionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartSchemaExtensionCommandInput} for command's `input` shape.
 * @see {@link StartSchemaExtensionCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class StartSchemaExtensionCommand extends $Command<
  StartSchemaExtensionCommandInput,
  StartSchemaExtensionCommandOutput,
  DirectoryServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartSchemaExtensionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectoryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartSchemaExtensionCommandInput, StartSchemaExtensionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectoryServiceClient";
    const commandName = "StartSchemaExtensionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartSchemaExtensionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartSchemaExtensionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartSchemaExtensionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartSchemaExtensionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartSchemaExtensionCommandOutput> {
    return deserializeAws_json1_1StartSchemaExtensionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
