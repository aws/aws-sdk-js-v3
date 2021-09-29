import { STSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../STSClient";
import { GetAccessKeyInfoRequest, GetAccessKeyInfoResponse } from "../models/models_0";
import {
  deserializeAws_queryGetAccessKeyInfoCommand,
  serializeAws_queryGetAccessKeyInfoCommand,
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

export interface GetAccessKeyInfoCommandInput extends GetAccessKeyInfoRequest {}
export interface GetAccessKeyInfoCommandOutput extends GetAccessKeyInfoResponse, __MetadataBearer {}

/**
 * <p>Returns the account identifier for the specified access key ID.</p>
 *         <p>Access keys consist of two parts: an access key ID (for example,
 *                 <code>AKIAIOSFODNN7EXAMPLE</code>) and a secret access key (for example,
 *                 <code>wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY</code>). For more information about
 *             access keys, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html">Managing Access Keys for IAM
 *                 Users</a> in the <i>IAM User Guide</i>.</p>
 *         <p>When you pass an access key ID to this operation, it returns the ID of the Amazon Web Services
 *             account to which the keys belong. Access key IDs beginning with <code>AKIA</code> are
 *             long-term credentials for an IAM user or the Amazon Web Services account root user. Access key IDs
 *             beginning with <code>ASIA</code> are temporary credentials that are created using STS
 *             operations. If the account in the response belongs to you, you can sign in as the root
 *             user and review your root user access keys. Then, you can pull a <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_getting-report.html">credentials report</a> to learn which IAM user owns the keys. To learn who
 *             requested the temporary credentials for an <code>ASIA</code> access key, view the STS
 *             events in your <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/cloudtrail-integration.html">CloudTrail logs</a> in the
 *                 <i>IAM User Guide</i>.</p>
 *         <p>This operation does not indicate the state of the access key. The key might be active,
 *             inactive, or deleted. Active keys might not have permissions to perform an operation.
 *             Providing a deleted access key might return an error that the key doesn't exist.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { STSClient, GetAccessKeyInfoCommand } from "@aws-sdk/client-sts"; // ES Modules import
 * // const { STSClient, GetAccessKeyInfoCommand } = require("@aws-sdk/client-sts"); // CommonJS import
 * const client = new STSClient(config);
 * const command = new GetAccessKeyInfoCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAccessKeyInfoCommandInput} for command's `input` shape.
 * @see {@link GetAccessKeyInfoCommandOutput} for command's `response` shape.
 * @see {@link STSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetAccessKeyInfoCommand extends $Command<
  GetAccessKeyInfoCommandInput,
  GetAccessKeyInfoCommandOutput,
  STSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetAccessKeyInfoCommandInput) {
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
  ): Handler<GetAccessKeyInfoCommandInput, GetAccessKeyInfoCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "STSClient";
    const commandName = "GetAccessKeyInfoCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetAccessKeyInfoRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetAccessKeyInfoResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetAccessKeyInfoCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryGetAccessKeyInfoCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAccessKeyInfoCommandOutput> {
    return deserializeAws_queryGetAccessKeyInfoCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
