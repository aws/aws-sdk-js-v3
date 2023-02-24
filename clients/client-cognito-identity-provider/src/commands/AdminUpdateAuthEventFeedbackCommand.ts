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
  AdminUpdateAuthEventFeedbackRequest,
  AdminUpdateAuthEventFeedbackRequestFilterSensitiveLog,
  AdminUpdateAuthEventFeedbackResponse,
  AdminUpdateAuthEventFeedbackResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1AdminUpdateAuthEventFeedbackCommand,
  serializeAws_json1_1AdminUpdateAuthEventFeedbackCommand,
} from "../protocols/Aws_json1_1";

export interface AdminUpdateAuthEventFeedbackCommandInput extends AdminUpdateAuthEventFeedbackRequest {}
export interface AdminUpdateAuthEventFeedbackCommandOutput
  extends AdminUpdateAuthEventFeedbackResponse,
    __MetadataBearer {}

/**
 * <p>Provides feedback for an authentication event indicating if it was from a valid user.
 *             This feedback is used for improving the risk evaluation decision for the user pool as
 *             part of Amazon Cognito advanced security.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AdminUpdateAuthEventFeedbackCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminUpdateAuthEventFeedbackCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new AdminUpdateAuthEventFeedbackCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AdminUpdateAuthEventFeedbackCommandInput} for command's `input` shape.
 * @see {@link AdminUpdateAuthEventFeedbackCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 */
export class AdminUpdateAuthEventFeedbackCommand extends $Command<
  AdminUpdateAuthEventFeedbackCommandInput,
  AdminUpdateAuthEventFeedbackCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AdminUpdateAuthEventFeedbackCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "AdminUpdateAuthEventFeedbackCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AdminUpdateAuthEventFeedbackRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AdminUpdateAuthEventFeedbackResponseFilterSensitiveLog,
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
