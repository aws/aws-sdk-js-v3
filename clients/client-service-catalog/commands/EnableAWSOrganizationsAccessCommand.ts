import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { EnableAWSOrganizationsAccessInput, EnableAWSOrganizationsAccessOutput } from "../models/models_0";
import {
  deserializeAws_json1_1EnableAWSOrganizationsAccessCommand,
  serializeAws_json1_1EnableAWSOrganizationsAccessCommand,
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

export type EnableAWSOrganizationsAccessCommandInput = EnableAWSOrganizationsAccessInput;
export type EnableAWSOrganizationsAccessCommandOutput = EnableAWSOrganizationsAccessOutput & __MetadataBearer;

/**
 * <p>Enable portfolio sharing feature through AWS Organizations. This API will allow Service
 *          Catalog to receive updates on your organization in order to sync your shares with the
 *          current structure. This API can only be called by the management  account in the
 *          organization.</p>
 *          <p>By calling this API Service Catalog will make a call to organizations:EnableAWSServiceAccess on your behalf so that your shares can be in sync with any changes in your AWS Organizations structure.</p>
 *          <p>Note that a delegated administrator is not authorized to invoke <code>EnableAWSOrganizationsAccess</code>.</p>
 */
export class EnableAWSOrganizationsAccessCommand extends $Command<
  EnableAWSOrganizationsAccessCommandInput,
  EnableAWSOrganizationsAccessCommandOutput,
  ServiceCatalogClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: EnableAWSOrganizationsAccessCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceCatalogClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<EnableAWSOrganizationsAccessCommandInput, EnableAWSOrganizationsAccessCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "EnableAWSOrganizationsAccessCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: EnableAWSOrganizationsAccessInput.filterSensitiveLog,
      outputFilterSensitiveLog: EnableAWSOrganizationsAccessOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: EnableAWSOrganizationsAccessCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1EnableAWSOrganizationsAccessCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<EnableAWSOrganizationsAccessCommandOutput> {
    return deserializeAws_json1_1EnableAWSOrganizationsAccessCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
