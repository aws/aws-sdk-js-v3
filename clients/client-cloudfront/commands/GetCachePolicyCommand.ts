import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { GetCachePolicyRequest, GetCachePolicyResult } from "../models/models_0";
import {
  deserializeAws_restXmlGetCachePolicyCommand,
  serializeAws_restXmlGetCachePolicyCommand,
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

export type GetCachePolicyCommandInput = GetCachePolicyRequest;
export type GetCachePolicyCommandOutput = GetCachePolicyResult & __MetadataBearer;

/**
 * <p>Gets a cache policy, including the following metadata:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>The policy’s identifier.</p>
 * 			         </li>
 *             <li>
 * 				           <p>The date and time when the policy was last modified.</p>
 * 			         </li>
 *          </ul>
 * 		       <p>To get a cache policy, you must provide the policy’s identifier. If the cache policy is
 * 			attached to a distribution’s cache behavior, you can get the policy’s identifier using
 * 			<code>ListDistributions</code> or <code>GetDistribution</code>. If the cache policy is
 * 			not attached to a cache behavior, you can get the identifier using
 * 			<code>ListCachePolicies</code>.</p>
 */
export class GetCachePolicyCommand extends $Command<
  GetCachePolicyCommandInput,
  GetCachePolicyCommandOutput,
  CloudFrontClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetCachePolicyCommandInput) {
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
  ): Handler<GetCachePolicyCommandInput, GetCachePolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "GetCachePolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetCachePolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetCachePolicyResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetCachePolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlGetCachePolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCachePolicyCommandOutput> {
    return deserializeAws_restXmlGetCachePolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
