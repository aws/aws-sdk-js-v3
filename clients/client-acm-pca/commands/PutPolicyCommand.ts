import { ACMPCAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMPCAClient";
import { PutPolicyRequest } from "../models/models_0";
import { deserializeAws_json1_1PutPolicyCommand, serializeAws_json1_1PutPolicyCommand } from "../protocols/Aws_json1_1";
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

export type PutPolicyCommandInput = PutPolicyRequest;
export type PutPolicyCommandOutput = __MetadataBearer;

/**
 * <p>Attaches a resource-based policy to a private CA. </p>
 * 		       <p>A policy can also be applied by <a href="https://docs.aws.amazon.com/acm-pca/latest/userguide/pca-ram.html">sharing</a> a private CA through AWS Resource Access Manager
 * 			(RAM).</p>
 * 		       <p>The policy can be displayed with <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_GetPolicy.html">GetPolicy</a> and removed with <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_DeletePolicy.html">DeletePolicy</a>.</p>
 *
 * 			      <p class="title">
 *             <b>About Policies</b>
 *          </p>
 *          <ul>
 *             <li>
 * 			            <p>A policy grants access on a private CA to an AWS customer account, to AWS Organizations, or to
 * 			an AWS Organizations unit. Policies are under the control of a CA administrator. For more information,
 * 			see <a href="acm-pca/latest/userguide/pca-rbp.html">Using a Resource Based Policy with ACM Private CA</a>.</p>
 * 		          </li>
 *             <li>
 * 			            <p>A policy permits a user of AWS Certificate Manager (ACM) to issue ACM certificates
 * 			signed by a CA in another account.</p>
 * 		          </li>
 *             <li>
 * 			            <p>For ACM to manage automatic renewal of these certificates,
 * 			the ACM user must configure a Service Linked Role (SLR). The SLR allows
 * 			the ACM service to assume the identity of the user, subject to confirmation against the
 * 			ACM Private CA policy. For more information, see
 * 			<a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-slr.html">Using a
 *             Service Linked Role with ACM</a>.</p>
 * 		          </li>
 *             <li>
 * 			            <p>Updates made in AWS Resource Manager (RAM) are reflected in policies. For more information,
 * 			see <a href="acm-pca/latest/userguide/pca-ram.html">Using AWS Resource Access Manager
 * 			(RAM) with ACM Private CA</a>.</p>
 * 		          </li>
 *          </ul>
 */
export class PutPolicyCommand extends $Command<
  PutPolicyCommandInput,
  PutPolicyCommandOutput,
  ACMPCAClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ACMPCAClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutPolicyCommandInput, PutPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ACMPCAClient";
    const commandName = "PutPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutPolicyCommandOutput> {
    return deserializeAws_json1_1PutPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
