import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { GetOrganizationAdminAccountRequest, GetOrganizationAdminAccountResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetOrganizationAdminAccountCommand,
  serializeAws_restJson1GetOrganizationAdminAccountCommand,
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

export type GetOrganizationAdminAccountCommandInput = GetOrganizationAdminAccountRequest;
export type GetOrganizationAdminAccountCommandOutput = GetOrganizationAdminAccountResponse & __MetadataBearer;

/**
 * <p>
 *   Returns the name of the delegated AWS administrator account for the AWS organization.
 * </p>
 */
export class GetOrganizationAdminAccountCommand extends $Command<
  GetOrganizationAdminAccountCommandInput,
  GetOrganizationAdminAccountCommandOutput,
  AuditManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetOrganizationAdminAccountCommandInput) {
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
  ): Handler<GetOrganizationAdminAccountCommandInput, GetOrganizationAdminAccountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AuditManagerClient";
    const commandName = "GetOrganizationAdminAccountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetOrganizationAdminAccountRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetOrganizationAdminAccountResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetOrganizationAdminAccountCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetOrganizationAdminAccountCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetOrganizationAdminAccountCommandOutput> {
    return deserializeAws_restJson1GetOrganizationAdminAccountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
