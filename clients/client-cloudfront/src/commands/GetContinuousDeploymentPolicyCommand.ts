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
  GetContinuousDeploymentPolicyRequest,
  GetContinuousDeploymentPolicyRequestFilterSensitiveLog,
  GetContinuousDeploymentPolicyResult,
  GetContinuousDeploymentPolicyResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restXmlGetContinuousDeploymentPolicyCommand,
  serializeAws_restXmlGetContinuousDeploymentPolicyCommand,
} from "../protocols/Aws_restXml";

export interface GetContinuousDeploymentPolicyCommandInput extends GetContinuousDeploymentPolicyRequest {}
export interface GetContinuousDeploymentPolicyCommandOutput
  extends GetContinuousDeploymentPolicyResult,
    __MetadataBearer {}

/**
 * <p>Gets a continuous deployment policy, including metadata (the policy's identifier and
 * 			the date and time when the policy was last modified).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetContinuousDeploymentPolicyCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetContinuousDeploymentPolicyCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new GetContinuousDeploymentPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetContinuousDeploymentPolicyCommandInput} for command's `input` shape.
 * @see {@link GetContinuousDeploymentPolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 */
export class GetContinuousDeploymentPolicyCommand extends $Command<
  GetContinuousDeploymentPolicyCommandInput,
  GetContinuousDeploymentPolicyCommandOutput,
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

  constructor(readonly input: GetContinuousDeploymentPolicyCommandInput) {
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
  ): Handler<GetContinuousDeploymentPolicyCommandInput, GetContinuousDeploymentPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetContinuousDeploymentPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "GetContinuousDeploymentPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetContinuousDeploymentPolicyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetContinuousDeploymentPolicyResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetContinuousDeploymentPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlGetContinuousDeploymentPolicyCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetContinuousDeploymentPolicyCommandOutput> {
    return deserializeAws_restXmlGetContinuousDeploymentPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
