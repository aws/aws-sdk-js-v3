import { CodeStarClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeStarClient";
import { UpdateUserProfileRequest, UpdateUserProfileResult } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateUserProfileCommand,
  serializeAws_json1_1UpdateUserProfileCommand,
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

export type UpdateUserProfileCommandInput = UpdateUserProfileRequest;
export type UpdateUserProfileCommandOutput = UpdateUserProfileResult & __MetadataBearer;

/**
 * <p>Updates a user's profile in AWS CodeStar. The user profile is not project-specific.
 *       Information in the user profile is displayed wherever the user's information appears to other
 *       users in AWS CodeStar. </p>
 */
export class UpdateUserProfileCommand extends $Command<
  UpdateUserProfileCommandInput,
  UpdateUserProfileCommandOutput,
  CodeStarClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateUserProfileCommandInput) {
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
  ): Handler<UpdateUserProfileCommandInput, UpdateUserProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeStarClient";
    const commandName = "UpdateUserProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateUserProfileRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateUserProfileResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateUserProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateUserProfileCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateUserProfileCommandOutput> {
    return deserializeAws_json1_1UpdateUserProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
