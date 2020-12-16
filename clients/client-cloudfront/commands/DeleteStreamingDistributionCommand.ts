import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { DeleteStreamingDistributionRequest } from "../models/models_0";
import {
  deserializeAws_restXmlDeleteStreamingDistributionCommand,
  serializeAws_restXmlDeleteStreamingDistributionCommand,
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

export type DeleteStreamingDistributionCommandInput = DeleteStreamingDistributionRequest;
export type DeleteStreamingDistributionCommandOutput = __MetadataBearer;

/**
 * <p>Delete a streaming distribution. To delete an RTMP distribution using the CloudFront API,
 * 			perform the following steps.</p>
 *
 * 		       <p>
 *             <b>To delete an RTMP distribution using the CloudFront
 * 			API</b>:</p>
 * 		       <ol>
 *             <li>
 * 				           <p>Disable the RTMP distribution.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Submit a <code>GET Streaming Distribution Config</code> request to get the current
 * 					configuration and the <code>Etag</code> header for the distribution. </p>
 * 			         </li>
 *             <li>
 * 				           <p>Update the XML document that was returned in the response to your <code>GET
 * 						Streaming Distribution Config</code> request to change the value of <code>Enabled</code>
 * 					to <code>false</code>.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Submit a <code>PUT Streaming Distribution Config</code> request to update the
 * 					configuration for your distribution. In the request body, include the XML document that
 * 					you updated in Step 3. Then set the value of the HTTP <code>If-Match</code> header to the
 * 					value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET
 * 						Streaming Distribution Config</code> request in Step 2.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Review the response to the <code>PUT Streaming Distribution Config</code> request
 * 					to confirm that the distribution was successfully disabled.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Submit a <code>GET Streaming Distribution Config</code> request to confirm that
 * 					your changes have propagated. When propagation is complete, the value of
 * 						<code>Status</code> is <code>Deployed</code>.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Submit a <code>DELETE Streaming Distribution</code> request. Set the value of the
 * 					HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront
 * 					returned when you submitted the <code>GET Streaming Distribution Config</code> request in
 * 					Step 2.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Review the response to your <code>DELETE Streaming Distribution</code> request to
 * 					confirm that the distribution was successfully deleted.</p>
 * 			         </li>
 *          </ol>
 * 		       <p>For information about deleting a distribution using the CloudFront console, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/HowToDeleteDistribution.html">Deleting a Distribution</a> in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 */
export class DeleteStreamingDistributionCommand extends $Command<
  DeleteStreamingDistributionCommandInput,
  DeleteStreamingDistributionCommandOutput,
  CloudFrontClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteStreamingDistributionCommandInput) {
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
  ): Handler<DeleteStreamingDistributionCommandInput, DeleteStreamingDistributionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "DeleteStreamingDistributionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteStreamingDistributionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteStreamingDistributionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlDeleteStreamingDistributionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteStreamingDistributionCommandOutput> {
    return deserializeAws_restXmlDeleteStreamingDistributionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
