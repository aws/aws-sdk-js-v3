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

export interface DescribeEventDetailsForOrganizationCommandInput extends DescribeEventDetailsForOrganizationRequest {}
export interface DescribeEventDetailsForOrganizationCommandOutput
  extends DescribeEventDetailsForOrganizationResponse,
    __MetadataBearer {}

/**
 * <p>Returns detailed information about one or more specified events for one or more AWS
 *          accounts in your organization. This information includes standard event data (such as the
 *          AWS Region and service), an event description, and (depending on the event) possible
 *          metadata. This operation doesn't return affected entities, such as the resources related to
 *          the event. To return affected entities, use the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntitiesForOrganization.html">DescribeAffectedEntitiesForOrganization</a> operation.</p>
 *          <note>
 *             <p>Before you can call this operation, you must first enable AWS Health to work with
 *             AWS Organizations. To do this, call the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EnableHealthServiceAccessForOrganization.html">EnableHealthServiceAccessForOrganization</a> operation from your organization's
 *             management account.</p>
 *          </note>
 *          <p>When you call the <code>DescribeEventDetailsForOrganization</code> operation, specify
 *          the <code>organizationEventDetailFilters</code> object in the request. Depending on the
 *          AWS Health event type, note the following differences:</p>
 *          <ul>
 *             <li>
 *                <p>To return event details for a public event, you must specify a null value for the
 *                   <code>awsAccountId</code> parameter. If you specify an account ID for a public
 *                event, AWS Health returns an error message because public events aren't specific to
 *                an account.</p>
 *             </li>
 *             <li>
 *                <p>To return event details for an event that is specific to an account in your
 *                organization,  you must specify the <code>awsAccountId</code> parameter in the
 *                request. If you don't specify an account ID, AWS Health returns an error message
 *                because the event is specific to an account in your organization. </p>
 *             </li>
 *          </ul>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html">Event</a>.</p>
 *
 *          <note>
 *             <p>This operation doesn't support resource-level permissions. You can't use this operation to allow or deny access to specific AWS Health events. For more
 *                   information, see <a href="https://docs.aws.amazon.com/health/latest/ug/security_iam_id-based-policy-examples.html#resource-action-based-conditions">Resource- and action-based conditions</a> in the <i>AWS Health User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthClient, DescribeEventDetailsForOrganizationCommand } from "@aws-sdk/client-health"; // ES Modules import
 * // const { HealthClient, DescribeEventDetailsForOrganizationCommand } = require("@aws-sdk/client-health"); // CommonJS import
 * const client = new HealthClient(config);
 * const command = new DescribeEventDetailsForOrganizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEventDetailsForOrganizationCommandInput} for command's `input` shape.
 * @see {@link DescribeEventDetailsForOrganizationCommandOutput} for command's `response` shape.
 * @see {@link HealthClientResolvedConfig | config} for command's `input` shape.
 *
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
