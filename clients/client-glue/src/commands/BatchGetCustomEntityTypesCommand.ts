import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { BatchGetCustomEntityTypesRequest, BatchGetCustomEntityTypesResponse } from "../models/models_0";
import {
  deserializeAws_json1_1BatchGetCustomEntityTypesCommand,
  serializeAws_json1_1BatchGetCustomEntityTypesCommand,
} from "../protocols/Aws_json1_1";

export interface BatchGetCustomEntityTypesCommandInput extends BatchGetCustomEntityTypesRequest {}
export interface BatchGetCustomEntityTypesCommandOutput extends BatchGetCustomEntityTypesResponse, __MetadataBearer {}

export class BatchGetCustomEntityTypesCommand extends $Command<
  BatchGetCustomEntityTypesCommandInput,
  BatchGetCustomEntityTypesCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchGetCustomEntityTypesCommandInput) {
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
  ): Handler<BatchGetCustomEntityTypesCommandInput, BatchGetCustomEntityTypesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "BatchGetCustomEntityTypesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchGetCustomEntityTypesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchGetCustomEntityTypesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchGetCustomEntityTypesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1BatchGetCustomEntityTypesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchGetCustomEntityTypesCommandOutput> {
    return deserializeAws_json1_1BatchGetCustomEntityTypesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
