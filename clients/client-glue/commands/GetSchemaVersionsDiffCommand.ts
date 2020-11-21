import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetSchemaVersionsDiffInput, GetSchemaVersionsDiffResponse } from "../models/models_1";
import {
  deserializeAws_json1_1GetSchemaVersionsDiffCommand,
  serializeAws_json1_1GetSchemaVersionsDiffCommand,
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

export type GetSchemaVersionsDiffCommandInput = GetSchemaVersionsDiffInput;
export type GetSchemaVersionsDiffCommandOutput = GetSchemaVersionsDiffResponse & __MetadataBearer;

export class GetSchemaVersionsDiffCommand extends $Command<
  GetSchemaVersionsDiffCommandInput,
  GetSchemaVersionsDiffCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetSchemaVersionsDiffCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSchemaVersionsDiffCommandInput, GetSchemaVersionsDiffCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetSchemaVersionsDiffCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSchemaVersionsDiffInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetSchemaVersionsDiffResponse.filterSensitiveLog,
    };

    if (typeof logger.info === "function") {
      logger.info({
        clientName,
        commandName,
      });
    }

    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSchemaVersionsDiffCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetSchemaVersionsDiffCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSchemaVersionsDiffCommandOutput> {
    return deserializeAws_json1_1GetSchemaVersionsDiffCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
