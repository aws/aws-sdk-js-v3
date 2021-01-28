import { HealthClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthClient";
import {
  deserializeAws_json1_1DisableHealthServiceAccessForOrganizationCommand,
  serializeAws_json1_1DisableHealthServiceAccessForOrganizationCommand,
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

export type DisableHealthServiceAccessForOrganizationCommandInput = {};
export type DisableHealthServiceAccessForOrganizationCommandOutput = __MetadataBearer;

/**
 * <p>Disables AWS Health from working with AWS Organizations. To call this operation, you must sign
 *          in as an AWS Identity and Access Management (IAM) user, assume an IAM role, or sign in as the root user (not
 *          recommended) in the organization's master AWS account. For more information, see <a href="https://docs.aws.amazon.com/health/latest/ug/aggregate-events.html">Aggregating
 *             AWS Health events</a> in the
 *             <i>AWS Health User Guide</i>.</p>
 *          <p>This operation doesn't remove the service-linked role (SLR) from the AWS master
 *          account in your organization. You must use the IAM console, API, or AWS Command Line Interface (AWS CLI) to
 *          remove the SLR. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/using-service-linked-roles.html#delete-service-linked-role">Deleting a Service-Linked Role</a> in the
 *          <i>IAM User Guide</i>.</p>
 *          <note>
 *             <p>You can also disable the organizational feature by using the Organizations <a href="https://docs.aws.amazon.com/organizations/latest/APIReference/API_DisableAWSServiceAccess.html">DisableAWSServiceAccess</a> API operation. After you call this operation,
 *             AWS Health stops aggregating events for all other AWS accounts in your organization.
 *             If you call the AWS Health API operations for organizational view, AWS Health returns
 *             an error. AWS Health continues to aggregate health events for your AWS
 *             account.</p>
 *          </note>
 */
export class DisableHealthServiceAccessForOrganizationCommand extends $Command<
  DisableHealthServiceAccessForOrganizationCommandInput,
  DisableHealthServiceAccessForOrganizationCommandOutput,
  HealthClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisableHealthServiceAccessForOrganizationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: HealthClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DisableHealthServiceAccessForOrganizationCommandInput,
    DisableHealthServiceAccessForOrganizationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "HealthClient";
    const commandName = "DisableHealthServiceAccessForOrganizationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (input: any) => input,
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
    input: DisableHealthServiceAccessForOrganizationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DisableHealthServiceAccessForOrganizationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisableHealthServiceAccessForOrganizationCommandOutput> {
    return deserializeAws_json1_1DisableHealthServiceAccessForOrganizationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
