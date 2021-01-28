import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { DeregisterDelegatedAdministratorRequest } from "../models/models_0";
import {
  deserializeAws_json1_1DeregisterDelegatedAdministratorCommand,
  serializeAws_json1_1DeregisterDelegatedAdministratorCommand,
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

export type DeregisterDelegatedAdministratorCommandInput = DeregisterDelegatedAdministratorRequest;
export type DeregisterDelegatedAdministratorCommandOutput = __MetadataBearer;

/**
 * <p>Removes the specified member AWS account as a delegated administrator for the
 *             specified AWS service.</p>
 *         <important>
 *             <p>Deregistering a delegated administrator can have unintended impacts on the
 *                 functionality of the enabled AWS service. See the documentation for the enabled
 *                 service before you deregister a delegated administrator so that you understand any
 *                 potential impacts.</p>
 *         </important>
 *         <p>You can run this action only for AWS services that support this
 *     feature. For a current list of services that support it, see the column <i>Supports
 *     Delegated Administrator</i> in the table at <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrated-services-list.html">AWS Services that you can use with
 *     AWS Organizations</a> in the <i>AWS Organizations User Guide.</i>
 *          </p>
 *         <p>This operation can be called only from the organization's management account.</p>
 */
export class DeregisterDelegatedAdministratorCommand extends $Command<
  DeregisterDelegatedAdministratorCommandInput,
  DeregisterDelegatedAdministratorCommandOutput,
  OrganizationsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeregisterDelegatedAdministratorCommandInput) {
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
  ): Handler<DeregisterDelegatedAdministratorCommandInput, DeregisterDelegatedAdministratorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OrganizationsClient";
    const commandName = "DeregisterDelegatedAdministratorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeregisterDelegatedAdministratorRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeregisterDelegatedAdministratorCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DeregisterDelegatedAdministratorCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeregisterDelegatedAdministratorCommandOutput> {
    return deserializeAws_json1_1DeregisterDelegatedAdministratorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
