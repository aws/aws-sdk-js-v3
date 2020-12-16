import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import { UpdateAuthEventFeedbackRequest, UpdateAuthEventFeedbackResponse } from "../models/models_1";
import {
  deserializeAws_json1_1UpdateAuthEventFeedbackCommand,
  serializeAws_json1_1UpdateAuthEventFeedbackCommand,
} from "../protocols/Aws_json1_1";
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

export type UpdateAuthEventFeedbackCommandInput = UpdateAuthEventFeedbackRequest;
export type UpdateAuthEventFeedbackCommandOutput = UpdateAuthEventFeedbackResponse & __MetadataBearer;

/**
 * <p>Provides the feedback for an authentication event whether it was from a valid user or
 *             not. This feedback is used for improving the risk evaluation decision for the user pool
 *             as part of Amazon Cognito advanced security.</p>
 */
export class UpdateAuthEventFeedbackCommand extends $Command<
  UpdateAuthEventFeedbackCommandInput,
  UpdateAuthEventFeedbackCommandOutput,
  CognitoIdentityProviderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateAuthEventFeedbackCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoIdentityProviderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateAuthEventFeedbackCommandInput, UpdateAuthEventFeedbackCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "UpdateAuthEventFeedbackCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateAuthEventFeedbackRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateAuthEventFeedbackResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateAuthEventFeedbackCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateAuthEventFeedbackCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateAuthEventFeedbackCommandOutput> {
    return deserializeAws_json1_1UpdateAuthEventFeedbackCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
