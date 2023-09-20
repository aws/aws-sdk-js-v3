// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { DeleteStreamingDistributionRequest } from "../models/models_1";
import { de_DeleteStreamingDistributionCommand, se_DeleteStreamingDistributionCommand } from "../protocols/Aws_restXml";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteStreamingDistributionCommand}.
 */
export interface DeleteStreamingDistributionCommandInput extends DeleteStreamingDistributionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteStreamingDistributionCommand}.
 */
export interface DeleteStreamingDistributionCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Delete a streaming distribution. To delete an RTMP distribution using the CloudFront API,
 * 			perform the following steps.</p>
 *          <p>
 *             <b>To delete an RTMP distribution using the CloudFront
 * 			API</b>:</p>
 *          <ol>
 *             <li>
 *                <p>Disable the RTMP distribution.</p>
 *             </li>
 *             <li>
 *                <p>Submit a <code>GET Streaming Distribution Config</code> request to get the
 * 					current configuration and the <code>Etag</code> header for the distribution.
 * 				</p>
 *             </li>
 *             <li>
 *                <p>Update the XML document that was returned in the response to your <code>GET
 * 						Streaming Distribution Config</code> request to change the value of
 * 						<code>Enabled</code> to <code>false</code>.</p>
 *             </li>
 *             <li>
 *                <p>Submit a <code>PUT Streaming Distribution Config</code> request to update the
 * 					configuration for your distribution. In the request body, include the XML
 * 					document that you updated in Step 3. Then set the value of the HTTP
 * 						<code>If-Match</code> header to the value of the <code>ETag</code> header
 * 					that CloudFront returned when you submitted the <code>GET Streaming Distribution
 * 						Config</code> request in Step 2.</p>
 *             </li>
 *             <li>
 *                <p>Review the response to the <code>PUT Streaming Distribution Config</code>
 * 					request to confirm that the distribution was successfully disabled.</p>
 *             </li>
 *             <li>
 *                <p>Submit a <code>GET Streaming Distribution Config</code> request to confirm
 * 					that your changes have propagated. When propagation is complete, the value of
 * 						<code>Status</code> is <code>Deployed</code>.</p>
 *             </li>
 *             <li>
 *                <p>Submit a <code>DELETE Streaming Distribution</code> request. Set the value of
 * 					the HTTP <code>If-Match</code> header to the value of the <code>ETag</code>
 * 					header that CloudFront returned when you submitted the <code>GET Streaming
 * 						Distribution Config</code> request in Step 2.</p>
 *             </li>
 *             <li>
 *                <p>Review the response to your <code>DELETE Streaming Distribution</code> request
 * 					to confirm that the distribution was successfully deleted.</p>
 *             </li>
 *          </ol>
 *          <p>For information about deleting a distribution using the CloudFront console, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/HowToDeleteDistribution.html">Deleting a
 * 				Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, DeleteStreamingDistributionCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, DeleteStreamingDistributionCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // DeleteStreamingDistributionRequest
 *   Id: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE",
 * };
 * const command = new DeleteStreamingDistributionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteStreamingDistributionCommandInput - {@link DeleteStreamingDistributionCommandInput}
 * @returns {@link DeleteStreamingDistributionCommandOutput}
 * @see {@link DeleteStreamingDistributionCommandInput} for command's `input` shape.
 * @see {@link DeleteStreamingDistributionCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link InvalidIfMatchVersion} (client fault)
 *  <p>The <code>If-Match</code> version is missing or not valid.</p>
 *
 * @throws {@link NoSuchStreamingDistribution} (client fault)
 *  <p>The specified streaming distribution does not exist.</p>
 *
 * @throws {@link PreconditionFailed} (client fault)
 *  <p>The precondition in one or more of the request fields evaluated to
 * 			<code>false</code>.</p>
 *
 * @throws {@link StreamingDistributionNotDisabled} (client fault)
 *  <p>The specified CloudFront distribution is not disabled. You must disable the distribution
 * 			before you can delete it.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 */
export class DeleteStreamingDistributionCommand extends $Command<
  DeleteStreamingDistributionCommandInput,
  DeleteStreamingDistributionCommandOutput,
  CloudFrontClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteStreamingDistributionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "DeleteStreamingDistributionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Cloudfront2020_05_31",
        operation: "DeleteStreamingDistribution",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: DeleteStreamingDistributionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteStreamingDistributionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteStreamingDistributionCommandOutput> {
    return de_DeleteStreamingDistributionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
