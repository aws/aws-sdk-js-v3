import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { UpdateDistributionRequest, UpdateDistributionResult } from "../models/models_1";
import {
  deserializeAws_restXmlUpdateDistributionCommand,
  serializeAws_restXmlUpdateDistributionCommand,
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

export type UpdateDistributionCommandInput = UpdateDistributionRequest;
export type UpdateDistributionCommandOutput = UpdateDistributionResult & __MetadataBearer;

/**
 * <p>Updates the configuration for a web distribution. </p>
 * 		       <important>
 *             <p>When you update a distribution, there are more required fields than when you create a distribution.
 * 			When you update your distribution by using this API action, follow the steps here to get the current configuration
 * 			and then make your updates, to make sure that you include all of the required fields. To view a summary,
 * 			see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-overview-required-fields.html">Required
 * 				Fields for Create Distribution and Update Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 *          </important>
 * 		       <p>The update process includes getting the current distribution configuration, updating the XML document that is
 * 			returned to make your changes, and then submitting an <code>UpdateDistribution</code> request to make the updates.</p>
 * 		       <p>For information about updating a distribution using the CloudFront console instead, see
 * 			<a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-creating-console.html">Creating a
 * 				Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 *
 * 		       <p>
 *             <b>To update a web distribution using the CloudFront API</b>
 *          </p>
 * 		       <ol>
 *             <li>
 *                <p>Submit a
 * 				<a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetDistributionConfig.html">GetDistributionConfig</a>
 * 				request to get the current configuration and an <code>Etag</code> header
 * 				for the distribution.</p>
 * 				           <note>
 *                   <p>If you update the distribution again, you must get a new <code>Etag</code> header.</p>
 *                </note>
 * 			         </li>
 *             <li>
 *                <p>Update the XML document that was returned in the response to your <code>GetDistributionConfig</code> request to include
 * 				your changes. </p>
 * 				           <important>
 * 					             <p>When you edit the XML file, be aware of the following:</p>
 * 					             <ul>
 *                      <li>
 *                         <p>You must strip out the ETag parameter that is returned.</p>
 *                      </li>
 *                      <li>
 *                         <p>Additional fields are required when you update a distribution. There may be fields included in the
 * 							XML file for features that you haven't configured for your distribution. This is expected and required to
 * 							successfully update the distribution.</p>
 *                      </li>
 *                      <li>
 *                         <p>You can't change the value of <code>CallerReference</code>. If you try to change this value, CloudFront returns an
 * 							<code>IllegalUpdate</code> error. </p>
 *                      </li>
 *                      <li>
 *                         <p>The new configuration replaces the existing configuration; the values that you specify in an
 * 							<code>UpdateDistribution</code> request are not merged into your existing configuration. When you add, delete, or
 * 							replace values in an element that allows multiple values (for example, <code>CNAME</code>), you must specify all of the
 * 							values that you want to appear in the updated distribution. In addition,
 * 							you must update the corresponding <code>Quantity</code> element.</p>
 *                      </li>
 *                   </ul>
 *                </important>
 * 			         </li>
 *             <li>
 *                <p>Submit an <code>UpdateDistribution</code> request to update the configuration for your distribution:</p>
 * 				           <ul>
 *                   <li>
 *                      <p>In the request body, include the XML document that you updated in Step 2. The request body must include an
 * 						XML document with a <code>DistributionConfig</code> element.</p>
 *                   </li>
 *                   <li>
 *                      <p>Set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned
 * 						when you submitted the <code>GetDistributionConfig</code> request in Step 1.</p>
 *                   </li>
 *                </ul>
 * 			         </li>
 *             <li>
 *                <p>Review the response to the <code>UpdateDistribution</code> request to confirm that the configuration was
 * 				successfully updated.</p>
 *             </li>
 *             <li>
 *                <p>Optional: Submit a
 * 				<a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetDistribution.html">GetDistribution</a>
 * 				request to confirm that your changes have propagated.
 * 				When propagation is complete, the value of <code>Status</code> is <code>Deployed</code>.</p>
 * 			         </li>
 *          </ol>
 */
export class UpdateDistributionCommand extends $Command<
  UpdateDistributionCommandInput,
  UpdateDistributionCommandOutput,
  CloudFrontClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateDistributionCommandInput) {
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
  ): Handler<UpdateDistributionCommandInput, UpdateDistributionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "UpdateDistributionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateDistributionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateDistributionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateDistributionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlUpdateDistributionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateDistributionCommandOutput> {
    return deserializeAws_restXmlUpdateDistributionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
