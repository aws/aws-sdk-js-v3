import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { UpdateAccessKeyRequest } from "../models/models_1";
import {
  deserializeAws_queryUpdateAccessKeyCommand,
  serializeAws_queryUpdateAccessKeyCommand,
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

export interface UpdateAccessKeyCommandInput extends UpdateAccessKeyRequest {}
export interface UpdateAccessKeyCommandOutput extends __MetadataBearer {}

/**
 * <p>Changes the status of the specified access key from Active to Inactive, or vice versa.
 *             This operation can be used to disable a user's key as part of a key rotation
 *             workflow.</p>
 *         <p>If the <code>UserName</code> is not specified, the user name is determined implicitly
 *             based on the AWS access key ID used to sign the request. This operation works for
 *             access keys under the AWS account. Consequently, you can use this operation to manage
 *             AWS account root user credentials even if the AWS account has no associated
 *             users.</p>
 *         <p>For information about rotating keys, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/ManagingCredentials.html">Managing keys and certificates</a>
 *             in the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UpdateAccessKeyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UpdateAccessKeyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new UpdateAccessKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAccessKeyCommandInput} for command's `input` shape.
 * @see {@link UpdateAccessKeyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateAccessKeyCommand extends $Command<
  UpdateAccessKeyCommandInput,
  UpdateAccessKeyCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateAccessKeyCommandInput) {
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
  ): Handler<UpdateAccessKeyCommandInput, UpdateAccessKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "UpdateAccessKeyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateAccessKeyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateAccessKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryUpdateAccessKeyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateAccessKeyCommandOutput> {
    return deserializeAws_queryUpdateAccessKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
