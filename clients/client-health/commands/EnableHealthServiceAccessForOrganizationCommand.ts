import { HealthClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthClient";
import {
  deserializeAws_json1_1EnableHealthServiceAccessForOrganizationCommand,
  serializeAws_json1_1EnableHealthServiceAccessForOrganizationCommand,
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

export type EnableHealthServiceAccessForOrganizationCommandInput = {};
export type EnableHealthServiceAccessForOrganizationCommandOutput = __MetadataBearer;

/**
 * <p>Enables AWS Health to work with AWS Organizations. You can use the organizational view feature
 *          to aggregate events from all AWS accounts in your organization in a centralized location. </p>
 *          <p>This operation also creates a service-linked role for the management account in the
 *          organization. </p>
 *          <note>
 *             <p>To call this operation, you must meet the following requirements:</p>
 *             <ul>
 *                <li>
 *                   <p>You must have a Business or Enterprise support plan from <a href="http://aws.amazon.com/premiumsupport/">AWS Support</a> to use the
 *                   AWS Health API. If you call the AWS Health API from an AWS account that
 *                   doesn't have a Business or Enterprise support plan, you receive a
 *                      <code>SubscriptionRequiredException</code> error.</p>
 *                </li>
 *                <li>
 *                   <p>You must have permission to call this operation from the organization's
 *                   management account. For example IAM policies, see <a href="https://docs.aws.amazon.com/health/latest/ug/security_iam_id-based-policy-examples.html">AWS Health
 *                      identity-based policy examples</a>.</p>
 *                </li>
 *             </ul>
 *          </note>
 *          <p>If you don't have the required support plan, you can instead use the AWS Health console
 *          to enable the organizational view feature. For more information, see <a href="https://docs.aws.amazon.com/health/latest/ug/aggregate-events.html">Aggregating
 *             AWS Health events</a> in the <i>AWS Health User Guide</i>.</p>
 */
export class EnableHealthServiceAccessForOrganizationCommand extends $Command<
  EnableHealthServiceAccessForOrganizationCommandInput,
  EnableHealthServiceAccessForOrganizationCommandOutput,
  HealthClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: EnableHealthServiceAccessForOrganizationCommandInput) {
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
    EnableHealthServiceAccessForOrganizationCommandInput,
    EnableHealthServiceAccessForOrganizationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "HealthClient";
    const commandName = "EnableHealthServiceAccessForOrganizationCommand";
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
    input: EnableHealthServiceAccessForOrganizationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1EnableHealthServiceAccessForOrganizationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<EnableHealthServiceAccessForOrganizationCommandOutput> {
    return deserializeAws_json1_1EnableHealthServiceAccessForOrganizationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
