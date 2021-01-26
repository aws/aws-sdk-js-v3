import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import {
  DeregisterOrganizationAdminAccountRequest,
  DeregisterOrganizationAdminAccountResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeregisterOrganizationAdminAccountCommand,
  serializeAws_restJson1DeregisterOrganizationAdminAccountCommand,
} from "../protocols/Aws_restJson1";
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

export type DeregisterOrganizationAdminAccountCommandInput = DeregisterOrganizationAdminAccountRequest;
export type DeregisterOrganizationAdminAccountCommandOutput = DeregisterOrganizationAdminAccountResponse &
  __MetadataBearer;

/**
 * <p>
 *   Deregisters the delegated AWS administrator account from the AWS organization.
 * </p>
 */
export class DeregisterOrganizationAdminAccountCommand extends $Command<
  DeregisterOrganizationAdminAccountCommandInput,
  DeregisterOrganizationAdminAccountCommandOutput,
  AuditManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeregisterOrganizationAdminAccountCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AuditManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeregisterOrganizationAdminAccountCommandInput, DeregisterOrganizationAdminAccountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AuditManagerClient";
    const commandName = "DeregisterOrganizationAdminAccountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeregisterOrganizationAdminAccountRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeregisterOrganizationAdminAccountResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeregisterOrganizationAdminAccountCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DeregisterOrganizationAdminAccountCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeregisterOrganizationAdminAccountCommandOutput> {
    return deserializeAws_restJson1DeregisterOrganizationAdminAccountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
