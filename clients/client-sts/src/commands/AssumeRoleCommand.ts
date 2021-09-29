import { STSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../STSClient";
import { AssumeRoleRequest, AssumeRoleResponse } from "../models/models_0";
import { deserializeAws_queryAssumeRoleCommand, serializeAws_queryAssumeRoleCommand } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
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

export interface AssumeRoleCommandInput extends AssumeRoleRequest {}
export interface AssumeRoleCommandOutput extends AssumeRoleResponse, __MetadataBearer {}

/**
 * <p>Returns a set of temporary security credentials that you can use to access Amazon Web Services
 *             resources that you might not normally have access to. These temporary credentials
 *             consist of an access key ID, a secret access key, and a security token. Typically, you
 *             use <code>AssumeRole</code> within your account or for cross-account access. For a
 *             comparison of <code>AssumeRole</code> with other API operations that produce temporary
 *             credentials, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html">Requesting Temporary Security
 *                 Credentials</a> and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#stsapi_comparison">Comparing
 *                 the STS API operations</a> in the
 *             <i>IAM User Guide</i>.</p>
 *          <p>
 *             <b>Permissions</b>
 *          </p>
 *          <p>The temporary security credentials created by <code>AssumeRole</code> can be used to
 *          make API calls to any Amazon Web Services service with the following exception: You cannot call the
 *          STS <code>GetFederationToken</code> or <code>GetSessionToken</code> API
 *          operations.</p>
 *          <p>(Optional) You can pass inline or managed <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session">session policies</a> to
 *          this operation. You can pass a single JSON policy document to use as an inline session
 *          policy. You can also specify up to 10 managed policies to use as managed session policies.
 *          The plaintext that you use for both inline and managed session policies can't exceed 2,048
 *          characters. Passing policies to this operation returns new
 *          temporary credentials. The resulting session's permissions are the intersection of the
 *          role's identity-based policy and the session policies. You can use the role's temporary
 *          credentials in subsequent Amazon Web Services API calls to access resources in the account that owns
 *          the role. You cannot use session policies to grant more permissions than those allowed
 *          by the identity-based policy of the role that is being assumed. For more information, see
 *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session">Session
 *             Policies</a> in the <i>IAM User Guide</i>.</p>
 *          <p>To assume a role from a different account, your account must be trusted by the
 *          role. The trust relationship is defined in the role's trust policy when the role is
 *          created. That trust policy states which accounts are allowed to delegate that access to
 *          users in the account. </p>
 *          <p>A user who wants to access a role in a different account must also have permissions that
 *          are delegated from the user account administrator. The administrator must attach a policy
 *          that allows the user to call <code>AssumeRole</code> for the ARN of the role in the other
 *          account. If the user is in the same account as the role, then you can do either of the
 *          following:</p>
 *          <ul>
 *             <li>
 *                <p>Attach a policy to the user (identical to the previous user in a different
 *                account).</p>
 *             </li>
 *             <li>
 *                <p>Add the user as a principal directly in the role's trust policy.</p>
 *             </li>
 *          </ul>
 *          <p>In this case, the trust policy acts as an IAM resource-based policy. Users in the same
 *          account as the role do not need explicit permission to assume the role. For more
 *          information about trust policies and resource-based policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html">IAM Policies</a> in
 *          the <i>IAM User Guide</i>.</p>
 *          <p>
 *             <b>Tags</b>
 *          </p>
 *          <p>(Optional) You can pass tag key-value pairs to your session. These tags are called
 *          session tags. For more information about session tags, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html">Passing Session Tags in STS</a> in the
 *             <i>IAM User Guide</i>.</p>
 *          <p>An administrator must grant you the permissions necessary to pass session tags. The
 *          administrator can also create granular permissions to allow you to pass only specific
 *          session tags. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_attribute-based-access-control.html">Tutorial: Using Tags
 *             for Attribute-Based Access Control</a> in the
 *          <i>IAM User Guide</i>.</p>
 *          <p>You can set the session tags as transitive. Transitive tags persist during role
 *          chaining. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html#id_session-tags_role-chaining">Chaining Roles
 *             with Session Tags</a> in the <i>IAM User Guide</i>.</p>
 *          <p>
 *             <b>Using MFA with AssumeRole</b>
 *          </p>
 *          <p>(Optional) You can include multi-factor authentication (MFA) information when you call
 *             <code>AssumeRole</code>. This is useful for cross-account scenarios to ensure that the
 *          user that assumes the role has been authenticated with an Amazon Web Services MFA device. In that
 *          scenario, the trust policy of the role being assumed includes a condition that tests for
 *          MFA authentication. If the caller does not include valid MFA information, the request to
 *          assume the role is denied. The condition in a trust policy that tests for MFA
 *          authentication might look like the following example.</p>
 *          <p>
 *             <code>"Condition": {"Bool": {"aws:MultiFactorAuthPresent": true}}</code>
 *          </p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/MFAProtectedAPI.html">Configuring MFA-Protected API Access</a>
 *          in the <i>IAM User Guide</i> guide.</p>
 *          <p>To use MFA with <code>AssumeRole</code>, you pass values for the
 *             <code>SerialNumber</code> and <code>TokenCode</code> parameters. The
 *             <code>SerialNumber</code> value identifies the user's hardware or virtual MFA device.
 *          The <code>TokenCode</code> is the time-based one-time password (TOTP) that the MFA device
 *          produces. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { STSClient, AssumeRoleCommand } from "@aws-sdk/client-sts"; // ES Modules import
 * // const { STSClient, AssumeRoleCommand } = require("@aws-sdk/client-sts"); // CommonJS import
 * const client = new STSClient(config);
 * const command = new AssumeRoleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssumeRoleCommandInput} for command's `input` shape.
 * @see {@link AssumeRoleCommandOutput} for command's `response` shape.
 * @see {@link STSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class AssumeRoleCommand extends $Command<
  AssumeRoleCommandInput,
  AssumeRoleCommandOutput,
  STSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssumeRoleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: STSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssumeRoleCommandInput, AssumeRoleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "STSClient";
    const commandName = "AssumeRoleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssumeRoleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssumeRoleResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssumeRoleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryAssumeRoleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssumeRoleCommandOutput> {
    return deserializeAws_queryAssumeRoleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
