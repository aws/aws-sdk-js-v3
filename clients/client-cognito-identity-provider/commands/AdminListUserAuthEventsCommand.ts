import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import { AdminListUserAuthEventsRequest, AdminListUserAuthEventsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1AdminListUserAuthEventsCommand,
  serializeAws_json1_1AdminListUserAuthEventsCommand,
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

export type AdminListUserAuthEventsCommandInput = AdminListUserAuthEventsRequest;
export type AdminListUserAuthEventsCommandOutput = AdminListUserAuthEventsResponse & __MetadataBearer;

/**
 * <p>Lists a history of user activity and any risks detected as part of Amazon Cognito
 *             advanced security.</p>
 */
export class AdminListUserAuthEventsCommand extends $Command<
  AdminListUserAuthEventsCommandInput,
  AdminListUserAuthEventsCommandOutput,
  CognitoIdentityProviderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AdminListUserAuthEventsCommandInput) {
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
  ): Handler<AdminListUserAuthEventsCommandInput, AdminListUserAuthEventsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "AdminListUserAuthEventsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AdminListUserAuthEventsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AdminListUserAuthEventsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AdminListUserAuthEventsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AdminListUserAuthEventsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AdminListUserAuthEventsCommandOutput> {
    return deserializeAws_json1_1AdminListUserAuthEventsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
