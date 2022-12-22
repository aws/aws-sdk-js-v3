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
  GetOriginRequestPolicyRequest,
  GetOriginRequestPolicyRequestFilterSensitiveLog,
  GetOriginRequestPolicyResult,
  GetOriginRequestPolicyResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restXmlGetOriginRequestPolicyCommand,
  serializeAws_restXmlGetOriginRequestPolicyCommand,
} from "../protocols/Aws_restXml";

export interface GetOriginRequestPolicyCommandInput extends GetOriginRequestPolicyRequest {}
export interface GetOriginRequestPolicyCommandOutput extends GetOriginRequestPolicyResult, __MetadataBearer {}

/**
 * <p>Gets an origin request policy, including the following metadata:</p>
 *          <ul>
 *             <li>
 *                <p>The policy's identifier.</p>
 *             </li>
 *             <li>
 *                <p>The date and time when the policy was last modified.</p>
 *             </li>
 *          </ul>
 *          <p>To get an origin request policy, you must provide the policy's identifier. If the
 * 			origin request policy is attached to a distribution's cache behavior, you can get the
 * 			policy's identifier using <code>ListDistributions</code> or
 * 			<code>GetDistribution</code>. If the origin request policy is not attached to a cache
 * 			behavior, you can get the identifier using
 * 			<code>ListOriginRequestPolicies</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetOriginRequestPolicyCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetOriginRequestPolicyCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new GetOriginRequestPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetOriginRequestPolicyCommandInput} for command's `input` shape.
 * @see {@link GetOriginRequestPolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 */
export class GetOriginRequestPolicyCommand extends $Command<
  GetOriginRequestPolicyCommandInput,
  GetOriginRequestPolicyCommandOutput,
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

  constructor(readonly input: GetOriginRequestPolicyCommandInput) {
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
  ): Handler<GetOriginRequestPolicyCommandInput, GetOriginRequestPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetOriginRequestPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "GetOriginRequestPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetOriginRequestPolicyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetOriginRequestPolicyResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetOriginRequestPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlGetOriginRequestPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetOriginRequestPolicyCommandOutput> {
    return deserializeAws_restXmlGetOriginRequestPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
