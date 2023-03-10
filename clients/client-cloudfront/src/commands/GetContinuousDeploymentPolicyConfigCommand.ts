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
  GetContinuousDeploymentPolicyConfigRequest,
  GetContinuousDeploymentPolicyConfigRequestFilterSensitiveLog,
  GetContinuousDeploymentPolicyConfigResult,
  GetContinuousDeploymentPolicyConfigResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restXmlGetContinuousDeploymentPolicyConfigCommand,
  serializeAws_restXmlGetContinuousDeploymentPolicyConfigCommand,
} from "../protocols/Aws_restXml";

/**
 * The input for {@link GetContinuousDeploymentPolicyConfigCommand}.
 */
export interface GetContinuousDeploymentPolicyConfigCommandInput extends GetContinuousDeploymentPolicyConfigRequest {}
/**
 * The output of {@link GetContinuousDeploymentPolicyConfigCommand}.
 */
export interface GetContinuousDeploymentPolicyConfigCommandOutput
  extends GetContinuousDeploymentPolicyConfigResult,
    __MetadataBearer {}

/**
 * <p>Gets configuration information about a continuous deployment policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetContinuousDeploymentPolicyConfigCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetContinuousDeploymentPolicyConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new GetContinuousDeploymentPolicyConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetContinuousDeploymentPolicyConfigCommandInput} for command's `input` shape.
 * @see {@link GetContinuousDeploymentPolicyConfigCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link NoSuchContinuousDeploymentPolicy} (client fault)
 *  <p>The continuous deployment policy doesn't exist.</p>
 *
 *
 */
export class GetContinuousDeploymentPolicyConfigCommand extends $Command<
  GetContinuousDeploymentPolicyConfigCommandInput,
  GetContinuousDeploymentPolicyConfigCommandOutput,
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

  constructor(readonly input: GetContinuousDeploymentPolicyConfigCommandInput) {
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
  ): Handler<GetContinuousDeploymentPolicyConfigCommandInput, GetContinuousDeploymentPolicyConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetContinuousDeploymentPolicyConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "GetContinuousDeploymentPolicyConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetContinuousDeploymentPolicyConfigRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetContinuousDeploymentPolicyConfigResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetContinuousDeploymentPolicyConfigCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlGetContinuousDeploymentPolicyConfigCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetContinuousDeploymentPolicyConfigCommandOutput> {
    return deserializeAws_restXmlGetContinuousDeploymentPolicyConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
