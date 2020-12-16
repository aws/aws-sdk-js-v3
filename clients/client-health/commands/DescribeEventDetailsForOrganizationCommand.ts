import { HealthClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthClient";
import {
  DescribeEventDetailsForOrganizationRequest,
  DescribeEventDetailsForOrganizationResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeEventDetailsForOrganizationCommand,
  serializeAws_json1_1DescribeEventDetailsForOrganizationCommand,
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

export type DescribeEventDetailsForOrganizationCommandInput = DescribeEventDetailsForOrganizationRequest;
export type DescribeEventDetailsForOrganizationCommandOutput = DescribeEventDetailsForOrganizationResponse &
  __MetadataBearer;

/**
 * <p>Returns detailed information about one or more specified events for one or more accounts
 *          in your organization. Information includes standard event data (Region, service, and so on,
 *          as returned by <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventsForOrganization.html">DescribeEventsForOrganization</a>), a detailed event description, and possible
 *          additional metadata that depends upon the nature of the event. Affected entities are not
 *          included; to retrieve those, use the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntitiesForOrganization.html">DescribeAffectedEntitiesForOrganization</a> operation.</p>
 *          <p>Before you can call this operation, you must first enable AWS Health to work with
 *          AWS Organizations. To do this, call the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EnableHealthServiceAccessForOrganization.html">EnableHealthServiceAccessForOrganization</a>
 *          operation from your organization's master account.</p>
 *          <p>When you call the <code>DescribeEventDetailsForOrganization</code> operation, you
 *          specify the <code>organizationEventDetailFilters</code> object in the request. Depending on
 *          the AWS Health event type, note the following differences:</p>
 *          <ul>
 *             <li>
 *                <p>If the event is public, the <code>awsAccountId</code> parameter must be empty. If
 *                you specify an account ID for a public event, then an error message is returned.
 *                That's because the event might apply to all AWS accounts and isn't specific to an
 *                account in your organization.</p>
 *             </li>
 *             <li>
 *                <p>If the event is specific to an account, then you must specify the
 *                   <code>awsAccountId</code> parameter in the request. If you don't specify an
 *                account ID, an error message returns because the event is specific to an AWS
 *                account in your organization. </p>
 *             </li>
 *          </ul>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html">Event</a>.</p>
 */
export class DescribeEventDetailsForOrganizationCommand extends $Command<
  DescribeEventDetailsForOrganizationCommandInput,
  DescribeEventDetailsForOrganizationCommandOutput,
  HealthClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeEventDetailsForOrganizationCommandInput) {
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
  ): Handler<DescribeEventDetailsForOrganizationCommandInput, DescribeEventDetailsForOrganizationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "HealthClient";
    const commandName = "DescribeEventDetailsForOrganizationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeEventDetailsForOrganizationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeEventDetailsForOrganizationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeEventDetailsForOrganizationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeEventDetailsForOrganizationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeEventDetailsForOrganizationCommandOutput> {
    return deserializeAws_json1_1DescribeEventDetailsForOrganizationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
