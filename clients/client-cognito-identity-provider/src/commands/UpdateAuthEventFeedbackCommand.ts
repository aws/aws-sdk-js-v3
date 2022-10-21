// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import {
  UpdateAuthEventFeedbackRequest,
  UpdateAuthEventFeedbackRequestFilterSensitiveLog,
  UpdateAuthEventFeedbackResponse,
  UpdateAuthEventFeedbackResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1UpdateAuthEventFeedbackCommand,
  serializeAws_json1_1UpdateAuthEventFeedbackCommand,
} from "../protocols/Aws_json1_1";

export interface UpdateAuthEventFeedbackCommandInput extends UpdateAuthEventFeedbackRequest {}
export interface UpdateAuthEventFeedbackCommandOutput extends UpdateAuthEventFeedbackResponse, __MetadataBearer {}

/**
 * <p>Provides the feedback for an authentication event, whether it was from a valid user or
 *             not. This feedback is used for improving the risk evaluation decision for the user pool
 *             as part of Amazon Cognito advanced security.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, UpdateAuthEventFeedbackCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, UpdateAuthEventFeedbackCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new UpdateAuthEventFeedbackCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAuthEventFeedbackCommandInput} for command's `input` shape.
 * @see {@link UpdateAuthEventFeedbackCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 */
export class UpdateAuthEventFeedbackCommand extends $Command<
  UpdateAuthEventFeedbackCommandInput,
  UpdateAuthEventFeedbackCommandOutput,
  CognitoIdentityProviderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateAuthEventFeedbackCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "UpdateAuthEventFeedbackCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateAuthEventFeedbackRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateAuthEventFeedbackResponseFilterSensitiveLog,
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
