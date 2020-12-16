import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { CreateUserRequest, CreateUserResponse } from "../models/models_0";
import { deserializeAws_queryCreateUserCommand, serializeAws_queryCreateUserCommand } from "../protocols/Aws_query";
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

export type CreateUserCommandInput = CreateUserRequest;
export type CreateUserCommandOutput = CreateUserResponse & __MetadataBearer;

/**
 * <p>Creates a new IAM user for your AWS account.</p>
 *          <p>The number and size of IAM resources in an AWS account are limited. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS Quotas</a> in the <i>IAM User Guide</i>.</p>
 */
export class CreateUserCommand extends $Command<
  CreateUserCommandInput,
  CreateUserCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateUserCommandInput) {
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
  ): Handler<CreateUserCommandInput, CreateUserCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "CreateUserCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateUserRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateUserResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateUserCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateUserCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateUserCommandOutput> {
    return deserializeAws_queryCreateUserCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
