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
  CreateContinuousDeploymentPolicyRequest,
  CreateContinuousDeploymentPolicyRequestFilterSensitiveLog,
  CreateContinuousDeploymentPolicyResult,
  CreateContinuousDeploymentPolicyResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restXmlCreateContinuousDeploymentPolicyCommand,
  serializeAws_restXmlCreateContinuousDeploymentPolicyCommand,
} from "../protocols/Aws_restXml";

export interface CreateContinuousDeploymentPolicyCommandInput extends CreateContinuousDeploymentPolicyRequest {}
export interface CreateContinuousDeploymentPolicyCommandOutput
  extends CreateContinuousDeploymentPolicyResult,
    __MetadataBearer {}

/**
 * <p>Creates a continuous deployment policy that distributes traffic for a custom domain
 * 			name to two different CloudFront distributions.</p>
 *          <p>To use a continuous deployment policy, first use <code>CopyDistribution</code> to
 * 			create a staging distribution, then use <code>UpdateDistribution</code> to modify the
 * 			staging distribution's configuration.</p>
 *          <p>After you create and update a staging distribution, you can use a continuous
 * 			deployment policy to incrementally move traffic to the staging distribution. This
 * 			workflow enables you to test changes to a distribution's configuration before moving all
 * 			of your domain's production traffic to the new configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, CreateContinuousDeploymentPolicyCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, CreateContinuousDeploymentPolicyCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new CreateContinuousDeploymentPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateContinuousDeploymentPolicyCommandInput} for command's `input` shape.
 * @see {@link CreateContinuousDeploymentPolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 */
export class CreateContinuousDeploymentPolicyCommand extends $Command<
  CreateContinuousDeploymentPolicyCommandInput,
  CreateContinuousDeploymentPolicyCommandOutput,
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

  constructor(readonly input: CreateContinuousDeploymentPolicyCommandInput) {
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
  ): Handler<CreateContinuousDeploymentPolicyCommandInput, CreateContinuousDeploymentPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateContinuousDeploymentPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "CreateContinuousDeploymentPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateContinuousDeploymentPolicyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateContinuousDeploymentPolicyResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateContinuousDeploymentPolicyCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlCreateContinuousDeploymentPolicyCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateContinuousDeploymentPolicyCommandOutput> {
    return deserializeAws_restXmlCreateContinuousDeploymentPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
