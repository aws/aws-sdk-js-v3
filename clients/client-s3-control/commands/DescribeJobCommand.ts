import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { DescribeJobRequest, DescribeJobResult } from "../models/models_0";
import {
  deserializeAws_restXmlDescribeJobCommand,
  serializeAws_restXmlDescribeJobCommand,
} from "../protocols/Aws_restXml";
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
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

export type DescribeJobCommandInput = DescribeJobRequest;
export type DescribeJobCommandOutput = DescribeJobResult & __MetadataBearer;

/**
 * <p>Retrieves the configuration parameters and status for a Batch Operations job. For more
 *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-basics.html">S3 Batch Operations</a> in
 *          the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
 *          <p></p>
 *          <p>Related actions include:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateJob.html">CreateJob</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListJobs.html">ListJobs</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_UpdateJobPriority.html">UpdateJobPriority</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_UpdateJobStatus.html">UpdateJobStatus</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class DescribeJobCommand extends $Command<
  DescribeJobCommandInput,
  DescribeJobCommandOutput,
  S3ControlClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ControlClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeJobCommandInput, DescribeJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getProcessArnablesPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3ControlClient";
    const commandName = "DescribeJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeJobResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlDescribeJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeJobCommandOutput> {
    return deserializeAws_restXmlDescribeJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
