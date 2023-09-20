// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { HealthClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthClient";
import {
  DescribeEventDetailsForOrganizationRequest,
  DescribeEventDetailsForOrganizationResponse,
} from "../models/models_0";
import {
  de_DescribeEventDetailsForOrganizationCommand,
  se_DescribeEventDetailsForOrganizationCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeEventDetailsForOrganizationCommand}.
 */
export interface DescribeEventDetailsForOrganizationCommandInput extends DescribeEventDetailsForOrganizationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeEventDetailsForOrganizationCommand}.
 */
export interface DescribeEventDetailsForOrganizationCommandOutput
  extends DescribeEventDetailsForOrganizationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns detailed information about one or more specified events for one or more
 *          Amazon Web Services accounts in your organization. This information includes standard event data (such as
 *          the Amazon Web Services Region and service), an event description, and (depending on the event) possible
 *          metadata. This operation doesn't return affected entities, such as the resources related to
 *          the event. To return affected entities, use the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntitiesForOrganization.html">DescribeAffectedEntitiesForOrganization</a> operation.</p>
 *          <note>
 *             <p>Before you can call this operation, you must first enable Health to work with
 *             Organizations. To do this, call the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EnableHealthServiceAccessForOrganization.html">EnableHealthServiceAccessForOrganization</a> operation from your organization's
 *             management account.</p>
 *          </note>
 *          <p>When you call the <code>DescribeEventDetailsForOrganization</code> operation, specify
 *          the <code>organizationEventDetailFilters</code> object in the request. Depending on the
 *          Health event type, note the following differences:</p>
 *          <ul>
 *             <li>
 *                <p>To return event details for a public event, you must specify a null value for the
 *                   <code>awsAccountId</code> parameter. If you specify an account ID for a public
 *                event, Health returns an error message because public events aren't specific to
 *                an account.</p>
 *             </li>
 *             <li>
 *                <p>To return event details for an event that is specific to an account in your
 *                organization, you must specify the <code>awsAccountId</code> parameter in the
 *                request. If you don't specify an account ID, Health returns an error message
 *                because the event is specific to an account in your organization. </p>
 *             </li>
 *          </ul>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html">Event</a>.</p>
 *          <note>
 *             <p>This operation doesn't support resource-level permissions. You can't use this operation to allow or deny access to specific Health events. For more
 *                   information, see <a href="https://docs.aws.amazon.com/health/latest/ug/security_iam_id-based-policy-examples.html#resource-action-based-conditions">Resource- and action-based conditions</a> in the <i>Health User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthClient, DescribeEventDetailsForOrganizationCommand } from "@aws-sdk/client-health"; // ES Modules import
 * // const { HealthClient, DescribeEventDetailsForOrganizationCommand } = require("@aws-sdk/client-health"); // CommonJS import
 * const client = new HealthClient(config);
 * const input = { // DescribeEventDetailsForOrganizationRequest
 *   organizationEventDetailFilters: [ // OrganizationEventDetailFiltersList // required
 *     { // EventAccountFilter
 *       eventArn: "STRING_VALUE", // required
 *       awsAccountId: "STRING_VALUE",
 *     },
 *   ],
 *   locale: "STRING_VALUE",
 * };
 * const command = new DescribeEventDetailsForOrganizationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEventDetailsForOrganizationResponse
 * //   successfulSet: [ // DescribeEventDetailsForOrganizationSuccessfulSet
 * //     { // OrganizationEventDetails
 * //       awsAccountId: "STRING_VALUE",
 * //       event: { // Event
 * //         arn: "STRING_VALUE",
 * //         service: "STRING_VALUE",
 * //         eventTypeCode: "STRING_VALUE",
 * //         eventTypeCategory: "issue" || "accountNotification" || "scheduledChange" || "investigation",
 * //         region: "STRING_VALUE",
 * //         availabilityZone: "STRING_VALUE",
 * //         startTime: new Date("TIMESTAMP"),
 * //         endTime: new Date("TIMESTAMP"),
 * //         lastUpdatedTime: new Date("TIMESTAMP"),
 * //         statusCode: "open" || "closed" || "upcoming",
 * //         eventScopeCode: "PUBLIC" || "ACCOUNT_SPECIFIC" || "NONE",
 * //       },
 * //       eventDescription: { // EventDescription
 * //         latestDescription: "STRING_VALUE",
 * //       },
 * //       eventMetadata: { // eventMetadata
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   failedSet: [ // DescribeEventDetailsForOrganizationFailedSet
 * //     { // OrganizationEventDetailsErrorItem
 * //       awsAccountId: "STRING_VALUE",
 * //       eventArn: "STRING_VALUE",
 * //       errorName: "STRING_VALUE",
 * //       errorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeEventDetailsForOrganizationCommandInput - {@link DescribeEventDetailsForOrganizationCommandInput}
 * @returns {@link DescribeEventDetailsForOrganizationCommandOutput}
 * @see {@link DescribeEventDetailsForOrganizationCommandInput} for command's `input` shape.
 * @see {@link DescribeEventDetailsForOrganizationCommandOutput} for command's `response` shape.
 * @see {@link HealthClientResolvedConfig | config} for HealthClient's `config` shape.
 *
 * @throws {@link UnsupportedLocale} (client fault)
 *  <p>The specified locale is not supported.</p>
 *
 * @throws {@link HealthServiceException}
 * <p>Base exception class for all service exceptions from Health service.</p>
 *
 */
export class DescribeEventDetailsForOrganizationCommand extends $Command<
  DescribeEventDetailsForOrganizationCommandInput,
  DescribeEventDetailsForOrganizationCommandOutput,
  HealthClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeEventDetailsForOrganizationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "HealthClient";
    const commandName = "DescribeEventDetailsForOrganizationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSHealth_20160804",
        operation: "DescribeEventDetailsForOrganization",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(
    input: DescribeEventDetailsForOrganizationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeEventDetailsForOrganizationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeEventDetailsForOrganizationCommandOutput> {
    return de_DescribeEventDetailsForOrganizationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
