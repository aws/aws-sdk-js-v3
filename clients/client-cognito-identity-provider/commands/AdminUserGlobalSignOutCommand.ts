import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import { AdminUserGlobalSignOutRequest, AdminUserGlobalSignOutResponse } from "../models/models_0";
import {
  deserializeAws_json1_1AdminUserGlobalSignOutCommand,
  serializeAws_json1_1AdminUserGlobalSignOutCommand,
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

export type AdminUserGlobalSignOutCommandInput = AdminUserGlobalSignOutRequest;
export type AdminUserGlobalSignOutCommandOutput = AdminUserGlobalSignOutResponse & __MetadataBearer;

/**
 * <p>Signs out users from all devices, as an administrator. It also invalidates all refresh
 *             tokens issued to a user. The user's current access and Id tokens remain valid until
 *             their expiry. Access and Id tokens expire one hour after they are issued.</p>
 *         <p>Calling this action requires developer credentials.</p>
 */
export class AdminUserGlobalSignOutCommand extends $Command<
  AdminUserGlobalSignOutCommandInput,
  AdminUserGlobalSignOutCommandOutput,
  CognitoIdentityProviderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AdminUserGlobalSignOutCommandInput) {
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
  ): Handler<AdminUserGlobalSignOutCommandInput, AdminUserGlobalSignOutCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "AdminUserGlobalSignOutCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AdminUserGlobalSignOutRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AdminUserGlobalSignOutResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AdminUserGlobalSignOutCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AdminUserGlobalSignOutCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AdminUserGlobalSignOutCommandOutput> {
    return deserializeAws_json1_1AdminUserGlobalSignOutCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
