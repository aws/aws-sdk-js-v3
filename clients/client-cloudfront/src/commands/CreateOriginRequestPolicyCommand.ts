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
  CreateOriginRequestPolicyRequest,
  CreateOriginRequestPolicyRequestFilterSensitiveLog,
  CreateOriginRequestPolicyResult,
  CreateOriginRequestPolicyResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restXmlCreateOriginRequestPolicyCommand,
  serializeAws_restXmlCreateOriginRequestPolicyCommand,
} from "../protocols/Aws_restXml";

export interface CreateOriginRequestPolicyCommandInput extends CreateOriginRequestPolicyRequest {}
export interface CreateOriginRequestPolicyCommandOutput extends CreateOriginRequestPolicyResult, __MetadataBearer {}

/**
 * <p>Creates an origin request policy.</p>
 *          <p>After you create an origin request policy, you can attach it to one or more cache
 * 			behaviors. When it's attached to a cache behavior, the origin request policy determines
 * 			the values that CloudFront includes in requests that it sends to the origin. Each request that
 * 			CloudFront sends to the origin includes the following:</p>
 *          <ul>
 *             <li>
 *                <p>The request body and the URL path (without the domain name) from the viewer
 * 					request.</p>
 *             </li>
 *             <li>
 *                <p>The headers that CloudFront automatically includes in every origin request,
 * 					including <code>Host</code>, <code>User-Agent</code>, and
 * 						<code>X-Amz-Cf-Id</code>.</p>
 *             </li>
 *             <li>
 *                <p>All HTTP headers, cookies, and URL query strings that are specified in the
 * 					cache policy or the origin request policy. These can include items from the
 * 					viewer request and, in the case of headers, additional ones that are added by
 * 					CloudFront.</p>
 *             </li>
 *          </ul>
 *          <p>CloudFront sends a request when it can't find a valid object in its cache that matches the
 * 			request. If you want to send values to the origin and also include them in the cache
 * 			key, use <code>CachePolicy</code>.</p>
 *          <p>For more information about origin request policies, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html">Controlling origin requests</a> in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, CreateOriginRequestPolicyCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, CreateOriginRequestPolicyCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new CreateOriginRequestPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateOriginRequestPolicyCommandInput} for command's `input` shape.
 * @see {@link CreateOriginRequestPolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 */
export class CreateOriginRequestPolicyCommand extends $Command<
  CreateOriginRequestPolicyCommandInput,
  CreateOriginRequestPolicyCommandOutput,
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

  constructor(readonly input: CreateOriginRequestPolicyCommandInput) {
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
  ): Handler<CreateOriginRequestPolicyCommandInput, CreateOriginRequestPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateOriginRequestPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "CreateOriginRequestPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateOriginRequestPolicyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateOriginRequestPolicyResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateOriginRequestPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlCreateOriginRequestPolicyCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateOriginRequestPolicyCommandOutput> {
    return deserializeAws_restXmlCreateOriginRequestPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
