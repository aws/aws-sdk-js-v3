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
  CreateCachePolicyRequest,
  CreateCachePolicyRequestFilterSensitiveLog,
  CreateCachePolicyResult,
  CreateCachePolicyResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restXmlCreateCachePolicyCommand,
  serializeAws_restXmlCreateCachePolicyCommand,
} from "../protocols/Aws_restXml";

export interface CreateCachePolicyCommandInput extends CreateCachePolicyRequest {}
export interface CreateCachePolicyCommandOutput extends CreateCachePolicyResult, __MetadataBearer {}

/**
 * <p>Creates a cache policy.</p>
 *          <p>After you create a cache policy, you can attach it to one or more cache behaviors.
 * 			When it's attached to a cache behavior, the cache policy determines the
 * 			following:</p>
 *          <ul>
 *             <li>
 *                <p>The values that CloudFront includes in the <i>cache key</i>. These
 * 					values can include HTTP headers, cookies, and URL query strings. CloudFront uses the
 * 					cache key to find an object in its cache that it can return to the
 * 					viewer.</p>
 *             </li>
 *             <li>
 *                <p>The default, minimum, and maximum time to live (TTL) values that you want
 * 					objects to stay in the CloudFront cache.</p>
 *             </li>
 *          </ul>
 *          <p>The headers, cookies, and query strings that are included in the cache key are
 * 			automatically included in requests that CloudFront sends to the origin. CloudFront sends a request
 * 			when it can't find an object in its cache that matches the request's cache key. If you
 * 			want to send values to the origin but <i>not</i> include them in the cache
 * 			key, use <code>OriginRequestPolicy</code>.</p>
 *          <p>For more information about cache policies, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html">Controlling the cache key</a> in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, CreateCachePolicyCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, CreateCachePolicyCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new CreateCachePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCachePolicyCommandInput} for command's `input` shape.
 * @see {@link CreateCachePolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 */
export class CreateCachePolicyCommand extends $Command<
  CreateCachePolicyCommandInput,
  CreateCachePolicyCommandOutput,
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

  constructor(readonly input: CreateCachePolicyCommandInput) {
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
  ): Handler<CreateCachePolicyCommandInput, CreateCachePolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateCachePolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "CreateCachePolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateCachePolicyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateCachePolicyResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateCachePolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlCreateCachePolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateCachePolicyCommandOutput> {
    return deserializeAws_restXmlCreateCachePolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
