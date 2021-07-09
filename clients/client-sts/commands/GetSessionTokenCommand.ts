import { STSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../STSClient";
import { GetSessionTokenRequest, GetSessionTokenResponse } from "../models/models_0";
import {
  deserializeAws_queryGetSessionTokenCommand,
  serializeAws_queryGetSessionTokenCommand,
} from "../protocols/Aws_query";
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

export interface GetSessionTokenCommandInput extends GetSessionTokenRequest {}
export interface GetSessionTokenCommandOutput extends GetSessionTokenResponse, __MetadataBearer {}

/**
 * <p>Returns a set of temporary credentials for an Amazon Web Services account or IAM user. The
 *          credentials consist of an access key ID, a secret access key, and a security token.
 *          Typically, you use <code>GetSessionToken</code> if you want to use MFA to protect
 *          programmatic calls to specific Amazon Web Services API operations like Amazon EC2 <code>StopInstances</code>.
 *          MFA-enabled IAM users would need to call <code>GetSessionToken</code> and submit an MFA
 *          code that is associated with their MFA device. Using the temporary security credentials
 *          that are returned from the call, IAM users can then make programmatic calls to API
 *          operations that require MFA authentication. If you do not supply a correct MFA code, then
 *          the API returns an access denied error. For a comparison of <code>GetSessionToken</code>
 *          with the other API operations that produce temporary credentials, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html">Requesting
 *             Temporary Security Credentials</a> and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#stsapi_comparison">Comparing the
 *             STS API operations</a> in the <i>IAM User Guide</i>.</p>
 *          <p>
 *             <b>Session Duration</b>
 *          </p>
 *          <p>The <code>GetSessionToken</code> operation must be called by using the long-term Amazon Web Services
 *          security credentials of the Amazon Web Services account root user or an IAM user. Credentials that are
 *          created by IAM users are valid for the duration that you specify. This duration can range
 *          from 900 seconds (15 minutes) up to a maximum of 129,600 seconds (36 hours), with a default
 *          of 43,200 seconds (12 hours). Credentials based on account credentials can range from 900
 *          seconds (15 minutes) up to 3,600 seconds (1 hour), with a default of 1 hour. </p>
 *          <p>
 *             <b>Permissions</b>
 *          </p>
 *          <p>The temporary security credentials created by <code>GetSessionToken</code> can be used
 *          to make API calls to any Amazon Web Services service with the following exceptions:</p>
 *          <ul>
 *             <li>
 *                <p>You cannot call any IAM API operations unless MFA authentication information is
 *                included in the request.</p>
 *             </li>
 *             <li>
 *                <p>You cannot call any STS API <i>except</i>
 *                   <code>AssumeRole</code> or <code>GetCallerIdentity</code>.</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>We recommend that you do not call <code>GetSessionToken</code> with Amazon Web Services account
 *             root user credentials. Instead, follow our <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#create-iam-users">best practices</a> by
 *             creating one or more IAM users, giving them the necessary permissions, and using IAM
 *             users for everyday interaction with Amazon Web Services. </p>
 *          </note>
 *          <p>The credentials that are returned by <code>GetSessionToken</code> are based on
 *          permissions associated with the user whose credentials were used to call the operation. If
 *             <code>GetSessionToken</code> is called using Amazon Web Services account root user credentials, the
 *          temporary credentials have root user permissions. Similarly, if
 *             <code>GetSessionToken</code> is called using the credentials of an IAM user, the
 *          temporary credentials have the same permissions as the IAM user. </p>
 *          <p>For more information about using <code>GetSessionToken</code> to create temporary
 *          credentials, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#api_getsessiontoken">Temporary
 *             Credentials for Users in Untrusted Environments</a> in the
 *             <i>IAM User Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { STSClient, GetSessionTokenCommand } from "@aws-sdk/client-sts"; // ES Modules import
 * // const { STSClient, GetSessionTokenCommand } = require("@aws-sdk/client-sts"); // CommonJS import
 * const client = new STSClient(config);
 * const command = new GetSessionTokenCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSessionTokenCommandInput} for command's `input` shape.
 * @see {@link GetSessionTokenCommandOutput} for command's `response` shape.
 * @see {@link STSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetSessionTokenCommand extends $Command<
  GetSessionTokenCommandInput,
  GetSessionTokenCommandOutput,
  STSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetSessionTokenCommandInput) {
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
  ): Handler<GetSessionTokenCommandInput, GetSessionTokenCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "STSClient";
    const commandName = "GetSessionTokenCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSessionTokenRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetSessionTokenResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSessionTokenCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryGetSessionTokenCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSessionTokenCommandOutput> {
    return deserializeAws_queryGetSessionTokenCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
