import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { CreateDistributionRequest, CreateDistributionResult } from "../models/models_0";
import {
  deserializeAws_restXmlCreateDistributionCommand,
  serializeAws_restXmlCreateDistributionCommand,
} from "../protocols/Aws_restXml";
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

export type CreateDistributionCommandInput = CreateDistributionRequest;
export type CreateDistributionCommandOutput = CreateDistributionResult & __MetadataBearer;

/**
 * <p>Creates a new web distribution. You create a CloudFront distribution to tell CloudFront where you
 * 			want content to be delivered from, and the details about how to track and manage content delivery. Send a <code>POST</code> request to the
 * 			<code>/<i>CloudFront API version</i>/distribution</code>/<code>distribution ID</code> resource.</p>
 * 		       <important>
 *             <p>When you update a distribution, there are more required fields than when you create a distribution.
 * 			When you update your distribution by using
 * 			<a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateDistribution.html">UpdateDistribution</a>,
 * 			follow the steps included
 * 			in the documentation to get the current configuration
 * 			and then make your updates. This helps to make sure that you include all of the required fields. To view a summary,
 * 			see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-overview-required-fields.html">Required
 * 				Fields for Create Distribution and Update Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 *          </important>
 */
export class CreateDistributionCommand extends $Command<
  CreateDistributionCommandInput,
  CreateDistributionCommandOutput,
  CloudFrontClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateDistributionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDistributionCommandInput, CreateDistributionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "CreateDistributionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDistributionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateDistributionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDistributionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlCreateDistributionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDistributionCommandOutput> {
    return deserializeAws_restXmlCreateDistributionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
