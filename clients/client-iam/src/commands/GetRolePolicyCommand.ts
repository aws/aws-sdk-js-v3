import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetRolePolicyRequest, GetRolePolicyResponse } from "../models/models_0";
import {
  deserializeAws_queryGetRolePolicyCommand,
  serializeAws_queryGetRolePolicyCommand,
} from "../protocols/Aws_query";
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

export interface GetRolePolicyCommandInput extends GetRolePolicyRequest {}
export interface GetRolePolicyCommandOutput extends GetRolePolicyResponse, __MetadataBearer {}

/**
 * <p>Retrieves the specified inline policy document that is embedded with the specified
 *             IAM role.</p>
 *         <note>
 *             <p>Policies returned by this operation are URL-encoded compliant
 *     with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL
 *     decoding method to convert the policy back to plain JSON text. For example, if you use Java, you
 *     can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in
 *     the Java SDK. Other languages and SDKs provide similar functionality.</p>
 *          </note>
 *         <p>An IAM role can also have managed policies attached to it. To retrieve a managed
 *             policy document that is attached to a role, use <a>GetPolicy</a> to determine
 *             the policy's default version, then use <a>GetPolicyVersion</a> to retrieve
 *             the policy document.</p>
 *         <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
 *                 policies</a> in the <i>IAM User Guide</i>.</p>
 *         <p>For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html">Using roles to delegate permissions and
 *                 federate identities</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetRolePolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetRolePolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new GetRolePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRolePolicyCommandInput} for command's `input` shape.
 * @see {@link GetRolePolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetRolePolicyCommand extends $Command<
  GetRolePolicyCommandInput,
  GetRolePolicyCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetRolePolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetRolePolicyCommandInput, GetRolePolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "GetRolePolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetRolePolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetRolePolicyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetRolePolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryGetRolePolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetRolePolicyCommandOutput> {
    return deserializeAws_queryGetRolePolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
