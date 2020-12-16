import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { UpdateSigningCertificateRequest } from "../models/models_0";
import {
  deserializeAws_queryUpdateSigningCertificateCommand,
  serializeAws_queryUpdateSigningCertificateCommand,
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

export type UpdateSigningCertificateCommandInput = UpdateSigningCertificateRequest;
export type UpdateSigningCertificateCommandOutput = __MetadataBearer;

/**
 * <p>Changes the status of the specified user signing certificate from active to disabled, or
 *          vice versa. This operation can be used to disable an IAM user's signing certificate as
 *          part of a certificate rotation work flow.</p>
 *          <p>If the <code>UserName</code> field is not specified, the user name is determined
 *          implicitly based on the AWS access key ID used to sign the request. This operation works
 *          for access keys under the AWS account. Consequently, you can use this operation to manage
 *          AWS account root user credentials even if the AWS account has no associated
 *          users.</p>
 */
export class UpdateSigningCertificateCommand extends $Command<
  UpdateSigningCertificateCommandInput,
  UpdateSigningCertificateCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateSigningCertificateCommandInput) {
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
  ): Handler<UpdateSigningCertificateCommandInput, UpdateSigningCertificateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "UpdateSigningCertificateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateSigningCertificateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateSigningCertificateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryUpdateSigningCertificateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateSigningCertificateCommandOutput> {
    return deserializeAws_queryUpdateSigningCertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
