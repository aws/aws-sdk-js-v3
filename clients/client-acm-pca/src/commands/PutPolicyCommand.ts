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

import { ACMPCAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMPCAClient";
import { PutPolicyRequest, PutPolicyRequestFilterSensitiveLog } from "../models/models_0";
import { deserializeAws_json1_1PutPolicyCommand, serializeAws_json1_1PutPolicyCommand } from "../protocols/Aws_json1_1";

export interface PutPolicyCommandInput extends PutPolicyRequest {}
export interface PutPolicyCommandOutput extends __MetadataBearer {}

/**
 * <p>Attaches a resource-based policy to a private CA. </p>
 *          <p>A policy can also be applied by sharing a private CA through Amazon Web Services Resource Access
 * 			Manager (RAM). For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-ram.html">Attach a Policy for Cross-Account
 * 			Access</a>.</p>
 *          <p>The policy can be displayed with <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_GetPolicy.html">GetPolicy</a> and removed with <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeletePolicy.html">DeletePolicy</a>.</p>
 *          <p class="title">
 *             <b>About Policies</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>A policy grants access on a private CA to an Amazon Web Services customer account, to Amazon Web Services Organizations, or to
 * 			an Amazon Web Services Organizations unit. Policies are under the control of a CA administrator. For more information,
 * 			see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-rbp.html">Using a Resource Based Policy with Amazon Web Services Private CA</a>.</p>
 *             </li>
 *             <li>
 *                <p>A policy permits a user of Certificate Manager (ACM) to issue ACM certificates
 * 			signed by a CA in another account.</p>
 *             </li>
 *             <li>
 *                <p>For ACM to manage automatic renewal of these certificates,
 * 			the ACM user must configure a Service Linked Role (SLR). The SLR allows
 * 			the ACM service to assume the identity of the user, subject to confirmation against the
 * 			Amazon Web Services Private CA policy. For more information, see
 * 			<a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-slr.html">Using a
 *             Service Linked Role with ACM</a>.</p>
 *             </li>
 *             <li>
 *                <p>Updates made in Amazon Web Services Resource Manager (RAM) are reflected in policies. For more information,
 * 			see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-ram.html">Attach a Policy for Cross-Account
 * 			Access</a>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMPCAClient, PutPolicyCommand } from "@aws-sdk/client-acm-pca"; // ES Modules import
 * // const { ACMPCAClient, PutPolicyCommand } = require("@aws-sdk/client-acm-pca"); // CommonJS import
 * const client = new ACMPCAClient(config);
 * const command = new PutPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutPolicyCommandInput} for command's `input` shape.
 * @see {@link PutPolicyCommandOutput} for command's `response` shape.
 * @see {@link ACMPCAClientResolvedConfig | config} for ACMPCAClient's `config` shape.
 *
 */
export class PutPolicyCommand extends $Command<
  PutPolicyCommandInput,
  PutPolicyCommandOutput,
  ACMPCAClientResolvedConfig
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
    this.middlewareStack.use(getEndpointPlugin(configuration, PutPolicyCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ACMPCAClient";
    const commandName = "PutPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutPolicyRequestFilterSensitiveLog,
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
