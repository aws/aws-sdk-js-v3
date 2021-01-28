import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { PutSchemaVersionMetadataInput, PutSchemaVersionMetadataResponse } from "../models/models_1";
import {
  deserializeAws_json1_1PutSchemaVersionMetadataCommand,
  serializeAws_json1_1PutSchemaVersionMetadataCommand,
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

export type PutSchemaVersionMetadataCommandInput = PutSchemaVersionMetadataInput;
export type PutSchemaVersionMetadataCommandOutput = PutSchemaVersionMetadataResponse & __MetadataBearer;

/**
 * <p>Puts the metadata key value pair for a specified schema version ID. A maximum of 10 key value pairs will be allowed per schema version. They can be added over one or more calls.</p>
 */
export class PutSchemaVersionMetadataCommand extends $Command<
  PutSchemaVersionMetadataCommandInput,
  PutSchemaVersionMetadataCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutSchemaVersionMetadataCommandInput) {
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
  ): Handler<PutSchemaVersionMetadataCommandInput, PutSchemaVersionMetadataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "PutSchemaVersionMetadataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutSchemaVersionMetadataInput.filterSensitiveLog,
      outputFilterSensitiveLog: PutSchemaVersionMetadataResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutSchemaVersionMetadataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutSchemaVersionMetadataCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutSchemaVersionMetadataCommandOutput> {
    return deserializeAws_json1_1PutSchemaVersionMetadataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
