import { CodeStarClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeStarClient";
import { CreateUserProfileRequest, CreateUserProfileResult } from "../models/models_0";
import {
  deserializeAws_json1_1CreateUserProfileCommand,
  serializeAws_json1_1CreateUserProfileCommand,
} from "../protocols/Aws_json1_1";
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

export type CreateUserProfileCommandInput = CreateUserProfileRequest;
export type CreateUserProfileCommandOutput = CreateUserProfileResult & __MetadataBearer;

/**
 * <p>Creates a profile for a user that includes user preferences, such as the display name
 *       and email address assocciated with the user, in AWS CodeStar. The user profile is not
 *       project-specific. Information in the user profile is displayed wherever the user's information
 *       appears to other users in AWS CodeStar.</p>
 */
export class CreateUserProfileCommand extends $Command<
  CreateUserProfileCommandInput,
  CreateUserProfileCommandOutput,
  CodeStarClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateUserProfileCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeStarClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateUserProfileCommandInput, CreateUserProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeStarClient";
    const commandName = "CreateUserProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateUserProfileRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateUserProfileResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateUserProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateUserProfileCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateUserProfileCommandOutput> {
    return deserializeAws_json1_1CreateUserProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
