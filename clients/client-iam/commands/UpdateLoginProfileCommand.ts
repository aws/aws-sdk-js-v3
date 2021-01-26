import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { UpdateLoginProfileRequest } from "../models/models_0";
import {
  deserializeAws_queryUpdateLoginProfileCommand,
  serializeAws_queryUpdateLoginProfileCommand,
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

export type UpdateLoginProfileCommandInput = UpdateLoginProfileRequest;
export type UpdateLoginProfileCommandOutput = __MetadataBearer;

/**
 * <p>Changes the password for the specified IAM user.</p>
 *          <p>IAM users can change their own passwords by calling <a>ChangePassword</a>.
 *          For more information about modifying passwords, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingLogins.html">Managing Passwords</a> in the
 *             <i>IAM User Guide</i>.</p>
 */
export class UpdateLoginProfileCommand extends $Command<
  UpdateLoginProfileCommandInput,
  UpdateLoginProfileCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateLoginProfileCommandInput) {
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
  ): Handler<UpdateLoginProfileCommandInput, UpdateLoginProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "UpdateLoginProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateLoginProfileRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateLoginProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryUpdateLoginProfileCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateLoginProfileCommandOutput> {
    return deserializeAws_queryUpdateLoginProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
