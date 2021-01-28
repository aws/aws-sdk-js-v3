import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import {
  ListAWSServiceAccessForOrganizationRequest,
  ListAWSServiceAccessForOrganizationResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListAWSServiceAccessForOrganizationCommand,
  serializeAws_json1_1ListAWSServiceAccessForOrganizationCommand,
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

export type ListAWSServiceAccessForOrganizationCommandInput = ListAWSServiceAccessForOrganizationRequest;
export type ListAWSServiceAccessForOrganizationCommandOutput = ListAWSServiceAccessForOrganizationResponse &
  __MetadataBearer;

/**
 * <p>Returns a list of the AWS services that you enabled to integrate with your
 *             organization. After a service on this list creates the resources that it requires for
 *             the integration, it can perform operations on your organization and its accounts.</p>
 *         <p>For more information about integrating other services with AWS Organizations, including the
 *             list of services that currently work with Organizations, see <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html">Integrating AWS Organizations with Other
 *                 AWS Services</a> in the <i>AWS Organizations User Guide.</i>
 *          </p>
 *         <p>This operation can be called only from the organization's
 * management account or by a member account that is a delegated administrator for an AWS service.</p>
 */
export class ListAWSServiceAccessForOrganizationCommand extends $Command<
  ListAWSServiceAccessForOrganizationCommandInput,
  ListAWSServiceAccessForOrganizationCommandOutput,
  OrganizationsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAWSServiceAccessForOrganizationCommandInput) {
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
  ): Handler<ListAWSServiceAccessForOrganizationCommandInput, ListAWSServiceAccessForOrganizationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OrganizationsClient";
    const commandName = "ListAWSServiceAccessForOrganizationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAWSServiceAccessForOrganizationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAWSServiceAccessForOrganizationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListAWSServiceAccessForOrganizationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListAWSServiceAccessForOrganizationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListAWSServiceAccessForOrganizationCommandOutput> {
    return deserializeAws_json1_1ListAWSServiceAccessForOrganizationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
