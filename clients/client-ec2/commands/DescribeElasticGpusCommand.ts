import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeElasticGpusRequest, DescribeElasticGpusResult } from "../models/models_2";
import {
  deserializeAws_ec2DescribeElasticGpusCommand,
  serializeAws_ec2DescribeElasticGpusCommand,
} from "../protocols/Aws_ec2";
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

export type DescribeElasticGpusCommandInput = DescribeElasticGpusRequest;
export type DescribeElasticGpusCommandOutput = DescribeElasticGpusResult & __MetadataBearer;

/**
 * <p>Describes the Elastic Graphics accelerator associated with your instances. For more information
 *             about Elastic Graphics, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/elastic-graphics.html">Amazon Elastic Graphics</a>.</p>
 */
export class DescribeElasticGpusCommand extends $Command<
  DescribeElasticGpusCommandInput,
  DescribeElasticGpusCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeElasticGpusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeElasticGpusCommandInput, DescribeElasticGpusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeElasticGpusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeElasticGpusRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeElasticGpusResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeElasticGpusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeElasticGpusCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeElasticGpusCommandOutput> {
    return deserializeAws_ec2DescribeElasticGpusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
