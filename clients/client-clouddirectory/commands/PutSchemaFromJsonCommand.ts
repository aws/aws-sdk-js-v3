import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { PutSchemaFromJsonRequest, PutSchemaFromJsonResponse } from "../models/models_0";
import {
  deserializeAws_restJson1PutSchemaFromJsonCommand,
  serializeAws_restJson1PutSchemaFromJsonCommand,
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

export type PutSchemaFromJsonCommandInput = PutSchemaFromJsonRequest;
export type PutSchemaFromJsonCommandOutput = PutSchemaFromJsonResponse & __MetadataBearer;

/**
 * <p>Allows a schema to be updated using JSON upload. Only available for development schemas. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_jsonformat.html#schemas_json">JSON Schema Format</a> for more information.</p>
 */
export class PutSchemaFromJsonCommand extends $Command<
  PutSchemaFromJsonCommandInput,
  PutSchemaFromJsonCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutSchemaFromJsonCommandInput) {
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
  ): Handler<PutSchemaFromJsonCommandInput, PutSchemaFromJsonCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudDirectoryClient";
    const commandName = "PutSchemaFromJsonCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutSchemaFromJsonRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutSchemaFromJsonResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutSchemaFromJsonCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutSchemaFromJsonCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutSchemaFromJsonCommandOutput> {
    return deserializeAws_restJson1PutSchemaFromJsonCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
