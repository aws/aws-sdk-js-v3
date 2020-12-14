import {
  ComprehendMedicalClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ComprehendMedicalClient";
import { DescribeICD10CMInferenceJobRequest, DescribeICD10CMInferenceJobResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeICD10CMInferenceJobCommand,
  serializeAws_json1_1DescribeICD10CMInferenceJobCommand,
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

export type DescribeICD10CMInferenceJobCommandInput = DescribeICD10CMInferenceJobRequest;
export type DescribeICD10CMInferenceJobCommandOutput = DescribeICD10CMInferenceJobResponse & __MetadataBearer;

/**
 * <p>Gets the properties associated with an InferICD10CM job.
 *       Use this operation to get the status of an inference job.</p>
 */
export class DescribeICD10CMInferenceJobCommand extends $Command<
  DescribeICD10CMInferenceJobCommandInput,
  DescribeICD10CMInferenceJobCommandOutput,
  ComprehendMedicalClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeICD10CMInferenceJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComprehendMedicalClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeICD10CMInferenceJobCommandInput, DescribeICD10CMInferenceJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendMedicalClient";
    const commandName = "DescribeICD10CMInferenceJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeICD10CMInferenceJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeICD10CMInferenceJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeICD10CMInferenceJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeICD10CMInferenceJobCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeICD10CMInferenceJobCommandOutput> {
    return deserializeAws_json1_1DescribeICD10CMInferenceJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
