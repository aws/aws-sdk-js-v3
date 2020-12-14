import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateLabelingJobRequest, CreateLabelingJobResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateLabelingJobCommand,
  serializeAws_json1_1CreateLabelingJobCommand,
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

export type CreateLabelingJobCommandInput = CreateLabelingJobRequest;
export type CreateLabelingJobCommandOutput = CreateLabelingJobResponse & __MetadataBearer;

/**
 * <p>Creates a job that uses workers to label the data objects in your input dataset. You
 *             can use the labeled data to train machine learning models.</p>
 *         <p>You can select your workforce from one of three providers:</p>
 *         <ul>
 *             <li>
 *                 <p>A private workforce that you create. It can include employees, contractors,
 *                     and outside experts. Use a private workforce when want the data to stay within
 *                     your organization or when a specific set of skills is required.</p>
 *             </li>
 *             <li>
 *                 <p>One or more vendors that you select from the AWS Marketplace. Vendors provide
 *                     expertise in specific areas. </p>
 *             </li>
 *             <li>
 *                 <p>The Amazon Mechanical Turk workforce. This is the largest workforce, but it
 *                     should only be used for public data or data that has been stripped of any
 *                     personally identifiable information.</p>
 *             </li>
 *          </ul>
 *         <p>You can also use <i>automated data labeling</i> to reduce the number of
 *             data objects that need to be labeled by a human. Automated data labeling uses
 *                 <i>active learning</i> to determine if a data object can be labeled by
 *             machine or if it needs to be sent to a human worker. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-automated-labeling.html">Using
 *                 Automated Data Labeling</a>.</p>
 *         <p>The data objects to be labeled are contained in an Amazon S3 bucket. You create a
 *                 <i>manifest file</i> that describes the location of each object. For
 *             more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-data.html">Using Input and Output Data</a>.</p>
 *         <p>The output can be used as the manifest file for another labeling job or as training
 *             data for your machine learning models.</p>
 */
export class CreateLabelingJobCommand extends $Command<
  CreateLabelingJobCommandInput,
  CreateLabelingJobCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateLabelingJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateLabelingJobCommandInput, CreateLabelingJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "CreateLabelingJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateLabelingJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateLabelingJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateLabelingJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateLabelingJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateLabelingJobCommandOutput> {
    return deserializeAws_json1_1CreateLabelingJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
