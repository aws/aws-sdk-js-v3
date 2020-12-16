import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { BatchCreateVariableRequest, BatchCreateVariableResult } from "../models/models_0";
import {
  deserializeAws_json1_1BatchCreateVariableCommand,
  serializeAws_json1_1BatchCreateVariableCommand,
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

export type BatchCreateVariableCommandInput = BatchCreateVariableRequest;
export type BatchCreateVariableCommandOutput = BatchCreateVariableResult & __MetadataBearer;

/**
 * <p>Creates a batch of variables.</p>
 */
export class BatchCreateVariableCommand extends $Command<
  BatchCreateVariableCommandInput,
  BatchCreateVariableCommandOutput,
  FraudDetectorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchCreateVariableCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FraudDetectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchCreateVariableCommandInput, BatchCreateVariableCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FraudDetectorClient";
    const commandName = "BatchCreateVariableCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchCreateVariableRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchCreateVariableResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchCreateVariableCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1BatchCreateVariableCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchCreateVariableCommandOutput> {
    return deserializeAws_json1_1BatchCreateVariableCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
