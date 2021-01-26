import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { CreateCachePolicyRequest, CreateCachePolicyResult } from "../models/models_0";
import {
  deserializeAws_restXmlCreateCachePolicyCommand,
  serializeAws_restXmlCreateCachePolicyCommand,
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

export type CreateCachePolicyCommandInput = CreateCachePolicyRequest;
export type CreateCachePolicyCommandOutput = CreateCachePolicyResult & __MetadataBearer;

/**
 * <p>Creates a cache policy.</p>
 * 		       <p>After you create a cache policy, you can attach it to one or more cache behaviors. When it’s
 * 			attached to a cache behavior, the cache policy determines the following:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>The values that CloudFront includes in the <i>cache key</i>. These values can
 * 					include HTTP headers, cookies, and URL query strings. CloudFront uses the cache key to
 * 					find an object in its cache that it can return to the viewer.</p>
 * 			         </li>
 *             <li>
 * 				           <p>The default, minimum, and maximum time to live (TTL) values that you want objects to stay
 * 					in the CloudFront cache.</p>
 * 			         </li>
 *          </ul>
 * 		       <p>The headers, cookies, and query strings that are included in the cache key are automatically
 * 			included in requests that CloudFront sends to the origin. CloudFront sends a request when it can’t
 * 			find an object in its cache that matches the request’s cache key. If you want to send
 * 			values to the origin but <i>not</i> include them in the cache key, use
 * 			<code>OriginRequestPolicy</code>.</p>
 * 		       <p>For more information about cache policies, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html">Controlling the cache key</a> in the
 * 			<i>Amazon CloudFront Developer Guide</i>.</p>
 */
export class CreateCachePolicyCommand extends $Command<
  CreateCachePolicyCommandInput,
  CreateCachePolicyCommandOutput,
  CloudFrontClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "CreateCachePolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateCachePolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateCachePolicyResult.filterSensitiveLog,
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
