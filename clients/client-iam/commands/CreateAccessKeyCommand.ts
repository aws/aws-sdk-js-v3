import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { CreateAccessKeyRequest, CreateAccessKeyResponse } from "../models/models_0";
import {
  deserializeAws_queryCreateAccessKeyCommand,
  serializeAws_queryCreateAccessKeyCommand,
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

export interface CreateAccessKeyCommandInput extends CreateAccessKeyRequest {}
export interface CreateAccessKeyCommandOutput extends CreateAccessKeyResponse, __MetadataBearer {}

/**
 * <p> Creates a new AWS secret access key and corresponding AWS access key ID for the
 *             specified user. The default status for new keys is <code>Active</code>.</p>
 *         <p>If you do not specify a user name, IAM determines the user name implicitly based on
 *             the AWS access key ID signing the request. This operation works for access keys under
 *             the AWS account. Consequently, you can use this operation to manage AWS account root
 *             user credentials. This is true even if the AWS account has no associated users.</p>
 *         <p> For information about quotas on the number of keys you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS
 *                 quotas</a> in the <i>IAM User Guide</i>.</p>
 *         <important>
 *             <p>To ensure the security of your AWS account, the secret access key is accessible
 *                 only during key and user creation. You must save the key (for example, in a text
 *                 file) if you want to be able to access it again. If a secret key is lost, you can
 *                 delete the access keys for the associated user and then create new keys.</p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, CreateAccessKeyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, CreateAccessKeyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new CreateAccessKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAccessKeyCommandInput} for command's `input` shape.
 * @see {@link CreateAccessKeyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateAccessKeyCommand extends $Command<
  CreateAccessKeyCommandInput,
  CreateAccessKeyCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateAccessKeyCommandInput) {
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
  ): Handler<CreateAccessKeyCommandInput, CreateAccessKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "CreateAccessKeyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateAccessKeyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateAccessKeyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateAccessKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateAccessKeyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAccessKeyCommandOutput> {
    return deserializeAws_queryCreateAccessKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
