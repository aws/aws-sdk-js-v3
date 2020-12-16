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

export type StartSchemaExtensionCommandInput = StartSchemaExtensionRequest;
export type StartSchemaExtensionCommandOutput = StartSchemaExtensionResult & __MetadataBearer;

/**
 * <p>Applies a schema extension to a Microsoft AD directory.</p>
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
