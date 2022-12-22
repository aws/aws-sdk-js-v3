// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import {
  UpdateDistributionRequest,
  UpdateDistributionRequestFilterSensitiveLog,
  UpdateDistributionResult,
  UpdateDistributionResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restXmlUpdateDistributionCommand,
  serializeAws_restXmlUpdateDistributionCommand,
} from "../protocols/Aws_restXml";

export interface UpdateDistributionCommandInput extends UpdateDistributionRequest {}
export interface UpdateDistributionCommandOutput extends UpdateDistributionResult, __MetadataBearer {}

/**
 * <p>Updates the configuration for a CloudFront distribution.</p>
 *          <p>The update process includes getting the current distribution configuration, updating
 * 			it to make your changes, and then submitting an <code>UpdateDistribution</code> request
 * 			to make the updates.</p>
 *          <p>
 *             <b>To update a web distribution using the CloudFront
 * 			API</b>
 *          </p>
 *          <ol>
 *             <li>
 *                <p>Use <code>GetDistributionConfig</code> to get the current configuration,
 * 					including the version identifier (<code>ETag</code>).</p>
 *             </li>
 *             <li>
 *                <p>Update the distribution configuration that was returned in the response. Note
 * 					the following important requirements and restrictions:</p>
 *                <ul>
 *                   <li>
 *                      <p>You must rename the <code>ETag</code> field to <code>IfMatch</code>,
 * 							leaving the value unchanged. (Set the value of <code>IfMatch</code> to
 * 							the value of <code>ETag</code>, then remove the <code>ETag</code>
 * 							field.)</p>
 *                   </li>
 *                   <li>
 *                      <p>You can't change the value of <code>CallerReference</code>.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>Submit an <code>UpdateDistribution</code> request, providing the distribution
 * 					configuration. The new configuration replaces the existing configuration. The
 * 					values that you specify in an <code>UpdateDistribution</code> request are not
 * 					merged into your existing configuration. Make sure to include all fields: the
 * 					ones that you modified and also the ones that you didn't.</p>
 *             </li>
 *          </ol>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, UpdateDistributionCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, UpdateDistributionCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new UpdateDistributionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDistributionCommandInput} for command's `input` shape.
 * @see {@link UpdateDistributionCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 */
export class UpdateDistributionCommand extends $Command<
  UpdateDistributionCommandInput,
  UpdateDistributionCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateDistributionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "UpdateDistributionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateDistributionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateDistributionResultFilterSensitiveLog,
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
