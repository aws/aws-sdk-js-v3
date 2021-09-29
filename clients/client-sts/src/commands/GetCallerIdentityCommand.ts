import { STSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../STSClient";
import { GetCallerIdentityRequest, GetCallerIdentityResponse } from "../models/models_0";
import {
  deserializeAws_queryGetCallerIdentityCommand,
  serializeAws_queryGetCallerIdentityCommand,
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

export interface GetCallerIdentityCommandInput extends GetCallerIdentityRequest {}
export interface GetCallerIdentityCommandOutput extends GetCallerIdentityResponse, __MetadataBearer {}

/**
 * <p>Returns details about the IAM user or role whose credentials are used to call the
 *             operation.</p>
 *         <note>
 *             <p>No permissions are required to perform this operation. If an administrator adds a
 *                 policy to your IAM user or role that explicitly denies access to the
 *                     <code>sts:GetCallerIdentity</code> action, you can still perform this operation.
 *                 Permissions are not required because the same information is returned when an IAM
 *                 user or role is denied access. To view an example response, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/troubleshoot_general.html#troubleshoot_general_access-denied-delete-mfa">I Am Not Authorized to Perform: iam:DeleteVirtualMFADevice</a> in the
 *                     <i>IAM User Guide</i>.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { STSClient, GetCallerIdentityCommand } from "@aws-sdk/client-sts"; // ES Modules import
 * // const { STSClient, GetCallerIdentityCommand } = require("@aws-sdk/client-sts"); // CommonJS import
 * const client = new STSClient(config);
 * const command = new GetCallerIdentityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCallerIdentityCommandInput} for command's `input` shape.
 * @see {@link GetCallerIdentityCommandOutput} for command's `response` shape.
 * @see {@link STSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetCallerIdentityCommand extends $Command<
  GetCallerIdentityCommandInput,
  GetCallerIdentityCommandOutput,
  STSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetCallerIdentityCommandInput) {
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
  ): Handler<GetCallerIdentityCommandInput, GetCallerIdentityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "STSClient";
    const commandName = "GetCallerIdentityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetCallerIdentityRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetCallerIdentityResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetCallerIdentityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryGetCallerIdentityCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCallerIdentityCommandOutput> {
    return deserializeAws_queryGetCallerIdentityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
