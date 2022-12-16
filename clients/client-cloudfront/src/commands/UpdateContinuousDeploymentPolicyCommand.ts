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
  UpdateContinuousDeploymentPolicyRequest,
  UpdateContinuousDeploymentPolicyRequestFilterSensitiveLog,
  UpdateContinuousDeploymentPolicyResult,
  UpdateContinuousDeploymentPolicyResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restXmlUpdateContinuousDeploymentPolicyCommand,
  serializeAws_restXmlUpdateContinuousDeploymentPolicyCommand,
} from "../protocols/Aws_restXml";

export interface UpdateContinuousDeploymentPolicyCommandInput extends UpdateContinuousDeploymentPolicyRequest {}
export interface UpdateContinuousDeploymentPolicyCommandOutput
  extends UpdateContinuousDeploymentPolicyResult,
    __MetadataBearer {}

/**
 * <p>Updates a continuous deployment policy. You can update a continuous deployment policy
 * 			to enable or disable it, to change the percentage of traffic that it sends to the
 * 			staging distribution, or to change the staging distribution that it sends traffic
 * 			to.</p>
 *          <p>When you update a continuous deployment policy configuration, all the fields are
 * 			updated with the values that are provided in the request. You cannot update some fields
 * 			independent of others. To update a continuous deployment policy configuration:</p>
 *          <ol>
 *             <li>
 *                <p>Use <code>GetContinuousDeploymentPolicyConfig</code> to get the current
 * 					configuration.</p>
 *             </li>
 *             <li>
 *                <p>Locally modify the fields in the continuous deployment policy configuration
 * 					that you want to update.</p>
 *             </li>
 *             <li>
 *                <p>Use <code>UpdateContinuousDeploymentPolicy</code>, providing the entire
 * 					continuous deployment policy configuration, including the fields that you
 * 					modified and those that you didn't.</p>
 *             </li>
 *          </ol>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, UpdateContinuousDeploymentPolicyCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, UpdateContinuousDeploymentPolicyCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new UpdateContinuousDeploymentPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateContinuousDeploymentPolicyCommandInput} for command's `input` shape.
 * @see {@link UpdateContinuousDeploymentPolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 */
export class UpdateContinuousDeploymentPolicyCommand extends $Command<
  UpdateContinuousDeploymentPolicyCommandInput,
  UpdateContinuousDeploymentPolicyCommandOutput,
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

  constructor(readonly input: UpdateContinuousDeploymentPolicyCommandInput) {
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
  ): Handler<UpdateContinuousDeploymentPolicyCommandInput, UpdateContinuousDeploymentPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateContinuousDeploymentPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "UpdateContinuousDeploymentPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateContinuousDeploymentPolicyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateContinuousDeploymentPolicyResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateContinuousDeploymentPolicyCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlUpdateContinuousDeploymentPolicyCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateContinuousDeploymentPolicyCommandOutput> {
    return deserializeAws_restXmlUpdateContinuousDeploymentPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
