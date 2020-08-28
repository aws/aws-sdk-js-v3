import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { PutQueryDefinitionRequest, PutQueryDefinitionResponse } from "../models/index";
import {
  deserializeAws_json1_1PutQueryDefinitionCommand,
  serializeAws_json1_1PutQueryDefinitionCommand,
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

export type PutQueryDefinitionCommandInput = PutQueryDefinitionRequest;
export type PutQueryDefinitionCommandOutput = PutQueryDefinitionResponse & __MetadataBearer;

export class PutQueryDefinitionCommand extends $Command<
  PutQueryDefinitionCommandInput,
  PutQueryDefinitionCommandOutput,
  CloudWatchLogsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutQueryDefinitionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchLogsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutQueryDefinitionCommandInput, PutQueryDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: PutQueryDefinitionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutQueryDefinitionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutQueryDefinitionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutQueryDefinitionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutQueryDefinitionCommandOutput> {
    return deserializeAws_json1_1PutQueryDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
