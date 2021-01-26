import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { DescribeBatchInferenceJobRequest, DescribeBatchInferenceJobResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeBatchInferenceJobCommand,
  serializeAws_json1_1DescribeBatchInferenceJobCommand,
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

export type DescribeBatchInferenceJobCommandInput = DescribeBatchInferenceJobRequest;
export type DescribeBatchInferenceJobCommandOutput = DescribeBatchInferenceJobResponse & __MetadataBearer;

/**
 * <p>Gets the properties of a batch inference job including name, Amazon Resource Name (ARN),
 *       status, input and output configurations, and the ARN of the solution version used to generate
 *       the recommendations.</p>
 */
export class DescribeBatchInferenceJobCommand extends $Command<
  DescribeBatchInferenceJobCommandInput,
  DescribeBatchInferenceJobCommandOutput,
  PersonalizeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeBatchInferenceJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PersonalizeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeBatchInferenceJobCommandInput, DescribeBatchInferenceJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PersonalizeClient";
    const commandName = "DescribeBatchInferenceJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeBatchInferenceJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeBatchInferenceJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeBatchInferenceJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeBatchInferenceJobCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeBatchInferenceJobCommandOutput> {
    return deserializeAws_json1_1DescribeBatchInferenceJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
