import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { UpdateOriginRequestPolicyRequest, UpdateOriginRequestPolicyResult } from "../models/models_1";
import {
  deserializeAws_restXmlUpdateOriginRequestPolicyCommand,
  serializeAws_restXmlUpdateOriginRequestPolicyCommand,
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

export type UpdateOriginRequestPolicyCommandInput = UpdateOriginRequestPolicyRequest;
export type UpdateOriginRequestPolicyCommandOutput = UpdateOriginRequestPolicyResult & __MetadataBearer;

/**
 * <p>Updates an origin request policy configuration.</p>
 * 		       <p>When you update an origin request policy configuration, all the fields are updated
 * 			with the values provided in the request. You cannot update some fields independent of
 * 			others. To update an origin request policy configuration:</p>
 * 		       <ol>
 *             <li>
 * 				           <p>Use <code>GetOriginRequestPolicyConfig</code> to get the current configuration.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Locally modify the fields in the origin request policy configuration that you
 * 					want to update.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Call <code>UpdateOriginRequestPolicy</code> by providing the entire origin
 * 					request policy configuration, including the fields that you modified and those
 * 					that you didn’t.</p>
 * 			         </li>
 *          </ol>
 */
export class UpdateOriginRequestPolicyCommand extends $Command<
  UpdateOriginRequestPolicyCommandInput,
  UpdateOriginRequestPolicyCommandOutput,
  CloudFrontClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateOriginRequestPolicyCommandInput) {
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
  ): Handler<UpdateOriginRequestPolicyCommandInput, UpdateOriginRequestPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "UpdateOriginRequestPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateOriginRequestPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateOriginRequestPolicyResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateOriginRequestPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlUpdateOriginRequestPolicyCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateOriginRequestPolicyCommandOutput> {
    return deserializeAws_restXmlUpdateOriginRequestPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
