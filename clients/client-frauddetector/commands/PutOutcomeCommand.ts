import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { PutOutcomeRequest, PutOutcomeResult } from "../models/models_0";
import {
  deserializeAws_json1_1PutOutcomeCommand,
  serializeAws_json1_1PutOutcomeCommand,
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

export type PutOutcomeCommandInput = PutOutcomeRequest;
export type PutOutcomeCommandOutput = PutOutcomeResult & __MetadataBearer;

/**
 * <p>Creates or updates an outcome. </p>
 */
export class PutOutcomeCommand extends $Command<
  PutOutcomeCommandInput,
  PutOutcomeCommandOutput,
  FraudDetectorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutOutcomeCommandInput) {
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
  ): Handler<PutOutcomeCommandInput, PutOutcomeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FraudDetectorClient";
    const commandName = "PutOutcomeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutOutcomeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutOutcomeResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutOutcomeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutOutcomeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutOutcomeCommandOutput> {
    return deserializeAws_json1_1PutOutcomeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
