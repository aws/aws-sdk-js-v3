import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { CreateOrganizationalUnitRequest, CreateOrganizationalUnitResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateOrganizationalUnitCommand,
  serializeAws_json1_1CreateOrganizationalUnitCommand,
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

export type CreateOrganizationalUnitCommandInput = CreateOrganizationalUnitRequest;
export type CreateOrganizationalUnitCommandOutput = CreateOrganizationalUnitResponse & __MetadataBearer;

/**
 * <p>Creates an organizational unit (OU) within a root or parent OU. An OU is a container
 *             for accounts that enables you to organize your accounts to apply policies according to
 *             your business requirements. The number of levels deep that you can nest OUs is dependent
 *             upon the policy types enabled for that root. For service control policies, the limit is
 *             five.</p>
 *         <p>For more information about OUs, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_ous.html">Managing Organizational Units</a> in the
 *                 <i>AWS Organizations User Guide.</i>
 *          </p>
 *         <p>If the request includes tags, then the requester must have the
 *                 <code>organizations:TagResource</code> permission.</p>
 *         <p>This operation can be called only from the organization's management account.</p>
 */
export class CreateOrganizationalUnitCommand extends $Command<
  CreateOrganizationalUnitCommandInput,
  CreateOrganizationalUnitCommandOutput,
  OrganizationsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateOrganizationalUnitCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OrganizationsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateOrganizationalUnitCommandInput, CreateOrganizationalUnitCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OrganizationsClient";
    const commandName = "CreateOrganizationalUnitCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateOrganizationalUnitRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateOrganizationalUnitResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateOrganizationalUnitCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateOrganizationalUnitCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateOrganizationalUnitCommandOutput> {
    return deserializeAws_json1_1CreateOrganizationalUnitCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
