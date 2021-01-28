import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { UpdateCachePolicyRequest, UpdateCachePolicyResult } from "../models/models_1";
import {
  deserializeAws_restXmlUpdateCachePolicyCommand,
  serializeAws_restXmlUpdateCachePolicyCommand,
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

export type UpdateCachePolicyCommandInput = UpdateCachePolicyRequest;
export type UpdateCachePolicyCommandOutput = UpdateCachePolicyResult & __MetadataBearer;

/**
 * <p>Updates a cache policy configuration.</p>
 * 		       <p>When you update a cache policy configuration, all the fields are updated with the
 * 			values provided in the request. You cannot update some fields independent of others. To
 * 			update a cache policy configuration:</p>
 * 		       <ol>
 *             <li>
 * 				           <p>Use <code>GetCachePolicyConfig</code> to get the current configuration.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Locally modify the fields in the cache policy configuration that you want to
 * 					update.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Call <code>UpdateCachePolicy</code> by providing the entire cache policy
 * 					configuration, including the fields that you modified and those that you
 * 					didn’t.</p>
 * 			         </li>
 *          </ol>
 */
export class UpdateCachePolicyCommand extends $Command<
  UpdateCachePolicyCommandInput,
  UpdateCachePolicyCommandOutput,
  CloudFrontClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateCachePolicyCommandInput) {
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
  ): Handler<UpdateCachePolicyCommandInput, UpdateCachePolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "UpdateCachePolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateCachePolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateCachePolicyResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateCachePolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlUpdateCachePolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateCachePolicyCommandOutput> {
    return deserializeAws_restXmlUpdateCachePolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
