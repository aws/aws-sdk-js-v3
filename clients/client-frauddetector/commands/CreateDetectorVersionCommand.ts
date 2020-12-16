import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { CreateDetectorVersionRequest, CreateDetectorVersionResult } from "../models/models_0";
import {
  deserializeAws_json1_1CreateDetectorVersionCommand,
  serializeAws_json1_1CreateDetectorVersionCommand,
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

export type CreateDetectorVersionCommandInput = CreateDetectorVersionRequest;
export type CreateDetectorVersionCommandOutput = CreateDetectorVersionResult & __MetadataBearer;

/**
 * <p>Creates a detector version. The detector version starts in a <code>DRAFT</code> status.</p>
 */
export class CreateDetectorVersionCommand extends $Command<
  CreateDetectorVersionCommandInput,
  CreateDetectorVersionCommandOutput,
  FraudDetectorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateDetectorVersionCommandInput) {
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
  ): Handler<CreateDetectorVersionCommandInput, CreateDetectorVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FraudDetectorClient";
    const commandName = "CreateDetectorVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDetectorVersionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateDetectorVersionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDetectorVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateDetectorVersionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDetectorVersionCommandOutput> {
    return deserializeAws_json1_1CreateDetectorVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
