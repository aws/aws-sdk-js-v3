import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { CreateStreamingDistributionRequest, CreateStreamingDistributionResult } from "../models/models_0";
import {
  deserializeAws_restXmlCreateStreamingDistributionCommand,
  serializeAws_restXmlCreateStreamingDistributionCommand,
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

export type CreateStreamingDistributionCommandInput = CreateStreamingDistributionRequest;
export type CreateStreamingDistributionCommandOutput = CreateStreamingDistributionResult & __MetadataBearer;

/**
 * <p>Creates a new RTMP distribution. An RTMP distribution is similar to a web distribution,
 * 			but an RTMP distribution streams media files using the Adobe Real-Time Messaging Protocol
 * 			(RTMP) instead of serving files using HTTP. </p>
 * 		       <p>To create a new distribution, submit a <code>POST</code> request to the
 * 				<i>CloudFront API version</i>/distribution resource. The request body must include a
 * 			document with a <i>StreamingDistributionConfig</i> element. The response echoes
 * 			the <code>StreamingDistributionConfig</code> element and returns other information about the
 * 			RTMP distribution.</p>
 * 		       <p>To get the status of your request, use the <i>GET
 * 				StreamingDistribution</i> API action. When the value of <code>Enabled</code> is
 * 				<code>true</code> and the value of <code>Status</code> is <code>Deployed</code>, your
 * 			distribution is ready. A distribution usually deploys in less than 15 minutes.</p>
 * 		       <p>For more information about web distributions, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-rtmp.html">Working with RTMP Distributions</a> in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 * 		       <important>
 * 			         <p>Beginning with the 2012-05-05 version of the CloudFront API, we made substantial changes to
 * 				the format of the XML document that you include in the request body when you create or
 * 				update a web distribution or an RTMP distribution, and when you invalidate objects. With
 * 				previous versions of the API, we discovered that it was too easy to accidentally delete one
 * 				or more values for an element that accepts multiple values, for example, CNAMEs and trusted
 * 				signers. Our changes for the 2012-05-05 release are intended to prevent these accidental
 * 				deletions and to notify you when there's a mismatch between the number of values you say
 * 				you're specifying in the <code>Quantity</code> element and the number of values
 * 				specified.</p>
 * 		       </important>
 */
export class CreateStreamingDistributionCommand extends $Command<
  CreateStreamingDistributionCommandInput,
  CreateStreamingDistributionCommandOutput,
  CloudFrontClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateStreamingDistributionCommandInput) {
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
  ): Handler<CreateStreamingDistributionCommandInput, CreateStreamingDistributionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "CreateStreamingDistributionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateStreamingDistributionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateStreamingDistributionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateStreamingDistributionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlCreateStreamingDistributionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateStreamingDistributionCommandOutput> {
    return deserializeAws_restXmlCreateStreamingDistributionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
