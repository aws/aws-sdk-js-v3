import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import { AdminUpdateAuthEventFeedbackRequest, AdminUpdateAuthEventFeedbackResponse } from "../models/models_0";
import {
  deserializeAws_json1_1AdminUpdateAuthEventFeedbackCommand,
  serializeAws_json1_1AdminUpdateAuthEventFeedbackCommand,
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

export type AdminUpdateAuthEventFeedbackCommandInput = AdminUpdateAuthEventFeedbackRequest;
export type AdminUpdateAuthEventFeedbackCommandOutput = AdminUpdateAuthEventFeedbackResponse & __MetadataBearer;

/**
 * <p>Provides feedback for an authentication event as to whether it was from a valid user.
 *             This feedback is used for improving the risk evaluation decision for the user pool as
 *             part of Amazon Cognito advanced security.</p>
 */
export class AdminUpdateAuthEventFeedbackCommand extends $Command<
  AdminUpdateAuthEventFeedbackCommandInput,
  AdminUpdateAuthEventFeedbackCommandOutput,
  CognitoIdentityProviderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AdminUpdateAuthEventFeedbackCommandInput) {
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
  ): Handler<AdminUpdateAuthEventFeedbackCommandInput, AdminUpdateAuthEventFeedbackCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "AdminUpdateAuthEventFeedbackCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AdminUpdateAuthEventFeedbackRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AdminUpdateAuthEventFeedbackResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AdminUpdateAuthEventFeedbackCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AdminUpdateAuthEventFeedbackCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AdminUpdateAuthEventFeedbackCommandOutput> {
    return deserializeAws_json1_1AdminUpdateAuthEventFeedbackCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
