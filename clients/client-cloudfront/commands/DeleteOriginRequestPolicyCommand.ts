import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { DeleteOriginRequestPolicyRequest } from "../models/models_0";
import {
  deserializeAws_restXmlDeleteOriginRequestPolicyCommand,
  serializeAws_restXmlDeleteOriginRequestPolicyCommand,
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

export type DeleteOriginRequestPolicyCommandInput = DeleteOriginRequestPolicyRequest;
export type DeleteOriginRequestPolicyCommandOutput = __MetadataBearer;

/**
 * <p>Deletes an origin request policy.</p>
 * 		       <p>You cannot delete an origin request policy if it’s attached to any cache behaviors. First
 * 			update your distributions to remove the origin request policy from all cache behaviors,
 * 			then delete the origin request policy.</p>
 * 		       <p>To delete an origin request policy, you must provide the policy’s identifier and version. To
 * 			get the identifier, you can use <code>ListOriginRequestPolicies</code> or
 * 			<code>GetOriginRequestPolicy</code>.</p>
 */
export class DeleteOriginRequestPolicyCommand extends $Command<
  DeleteOriginRequestPolicyCommandInput,
  DeleteOriginRequestPolicyCommandOutput,
  CloudFrontClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteOriginRequestPolicyCommandInput) {
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
  ): Handler<DeleteOriginRequestPolicyCommandInput, DeleteOriginRequestPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "DeleteOriginRequestPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteOriginRequestPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteOriginRequestPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlDeleteOriginRequestPolicyCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteOriginRequestPolicyCommandOutput> {
    return deserializeAws_restXmlDeleteOriginRequestPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
