import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListAccessKeysRequest, ListAccessKeysResponse } from "../models/models_0";
import {
  deserializeAws_queryListAccessKeysCommand,
  serializeAws_queryListAccessKeysCommand,
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

export interface ListAccessKeysCommandInput extends ListAccessKeysRequest {}
export interface ListAccessKeysCommandOutput extends ListAccessKeysResponse, __MetadataBearer {}

/**
 * <p>Returns information about the access key IDs associated with the specified IAM user.
 *             If there is none, the operation returns an empty list.</p>
 *         <p>Although each user is limited to a small number of keys, you can still paginate the
 *             results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
 *         <p>If the <code>UserName</code> field is not specified, the user name is determined
 *             implicitly based on the AWS access key ID used to sign the request. This operation
 *             works for access keys under the AWS account. Consequently, you can use this operation
 *             to manage AWS account root user credentials even if the AWS account has no
 *             associated users.</p>
 *         <note>
 *             <p>To ensure the security of your AWS account, the secret access key is accessible
 *                 only during key and user creation.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListAccessKeysCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListAccessKeysCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ListAccessKeysCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAccessKeysCommandInput} for command's `input` shape.
 * @see {@link ListAccessKeysCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListAccessKeysCommand extends $Command<
  ListAccessKeysCommandInput,
  ListAccessKeysCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAccessKeysCommandInput) {
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
  ): Handler<ListAccessKeysCommandInput, ListAccessKeysCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "ListAccessKeysCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAccessKeysRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAccessKeysResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAccessKeysCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryListAccessKeysCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAccessKeysCommandOutput> {
    return deserializeAws_queryListAccessKeysCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
