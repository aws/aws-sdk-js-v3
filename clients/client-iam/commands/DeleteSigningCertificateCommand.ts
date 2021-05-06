import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DeleteSigningCertificateRequest } from "../models/models_0";
import {
  deserializeAws_queryDeleteSigningCertificateCommand,
  serializeAws_queryDeleteSigningCertificateCommand,
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

export interface DeleteSigningCertificateCommandInput extends DeleteSigningCertificateRequest {}
export interface DeleteSigningCertificateCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a signing certificate associated with the specified IAM user.</p>
 *         <p>If you do not specify a user name, IAM determines the user name implicitly based on
 *             the AWS access key ID signing the request. This operation works for access keys under
 *             the AWS account. Consequently, you can use this operation to manage AWS account root
 *             user credentials even if the AWS account has no associated IAM users.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteSigningCertificateCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteSigningCertificateCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new DeleteSigningCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSigningCertificateCommandInput} for command's `input` shape.
 * @see {@link DeleteSigningCertificateCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteSigningCertificateCommand extends $Command<
  DeleteSigningCertificateCommandInput,
  DeleteSigningCertificateCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteSigningCertificateCommandInput) {
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
  ): Handler<DeleteSigningCertificateCommandInput, DeleteSigningCertificateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "DeleteSigningCertificateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteSigningCertificateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteSigningCertificateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteSigningCertificateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteSigningCertificateCommandOutput> {
    return deserializeAws_queryDeleteSigningCertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
