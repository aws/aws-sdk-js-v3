import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetSchemaByDefinitionInput, GetSchemaByDefinitionResponse } from "../models/models_1";
import {
  deserializeAws_json1_1GetSchemaByDefinitionCommand,
  serializeAws_json1_1GetSchemaByDefinitionCommand,
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

export type GetSchemaByDefinitionCommandInput = GetSchemaByDefinitionInput;
export type GetSchemaByDefinitionCommandOutput = GetSchemaByDefinitionResponse & __MetadataBearer;

/**
 * <p>Retrieves a schema by the <code>SchemaDefinition</code>. The schema definition is sent to the Schema Registry, canonicalized, and hashed. If the hash is matched within the scope of the <code>SchemaName</code> or ARN (or the default registry, if none is supplied), that schema’s metadata is returned. Otherwise, a 404 or NotFound error is returned. Schema versions in <code>Deleted</code> statuses will not be included in the results.</p>
 */
export class GetSchemaByDefinitionCommand extends $Command<
  GetSchemaByDefinitionCommandInput,
  GetSchemaByDefinitionCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetSchemaByDefinitionCommandInput) {
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
  ): Handler<GetSchemaByDefinitionCommandInput, GetSchemaByDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetSchemaByDefinitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSchemaByDefinitionInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetSchemaByDefinitionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSchemaByDefinitionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetSchemaByDefinitionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSchemaByDefinitionCommandOutput> {
    return deserializeAws_json1_1GetSchemaByDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
