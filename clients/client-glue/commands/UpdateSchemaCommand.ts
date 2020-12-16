import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { UpdateSchemaInput, UpdateSchemaResponse } from "../models/models_1";
import {
  deserializeAws_json1_1UpdateSchemaCommand,
  serializeAws_json1_1UpdateSchemaCommand,
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

export type UpdateSchemaCommandInput = UpdateSchemaInput;
export type UpdateSchemaCommandOutput = UpdateSchemaResponse & __MetadataBearer;

/**
 * <p>Updates the description, compatibility setting, or version checkpoint for a schema set.</p>
 * 	        <p>For updating the compatibility setting, the call will not validate compatibility for the entire set of schema versions with the new compatibility setting. If the value for <code>Compatibility</code> is provided, the <code>VersionNumber</code> (a checkpoint) is also required. The API will validate the checkpoint version number for consistency.</p>
 *          <p>If the value for the <code>VersionNumber</code> (checkpoint) is provided, <code>Compatibility</code> is optional and this can be used to set/reset a checkpoint for the schema.</p>
 * 	        <p>This update will happen only if the schema is in the AVAILABLE state.</p>
 */
export class UpdateSchemaCommand extends $Command<
  UpdateSchemaCommandInput,
  UpdateSchemaCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateSchemaCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateSchemaCommandInput, UpdateSchemaCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "UpdateSchemaCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateSchemaInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateSchemaResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateSchemaCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateSchemaCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateSchemaCommandOutput> {
    return deserializeAws_json1_1UpdateSchemaCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
