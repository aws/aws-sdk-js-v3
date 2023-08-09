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
} from "@smithy/types";

import { HealthClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthClient";
import { DescribeEventsForOrganizationRequest, DescribeEventsForOrganizationResponse } from "../models/models_0";
import {
  de_DescribeEventsForOrganizationCommand,
  se_DescribeEventsForOrganizationCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeEventsForOrganizationCommand}.
 */
export interface DescribeEventsForOrganizationCommandInput extends DescribeEventsForOrganizationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeEventsForOrganizationCommand}.
 */
export interface DescribeEventsForOrganizationCommandOutput
  extends DescribeEventsForOrganizationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns information about events across your organization in Organizations. You can use
 *             the<code>filters</code> parameter to specify the events that you want to return. Events
 *          are returned in a summary form and don't include the affected accounts, detailed
 *          description, any additional metadata that depends on the event type, or any affected
 *          resources. To retrieve that information, use the following operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedAccountsForOrganization.html">DescribeAffectedAccountsForOrganization</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetailsForOrganization.html">DescribeEventDetailsForOrganization</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntitiesForOrganization.html">DescribeAffectedEntitiesForOrganization</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>If you don't specify a <code>filter</code>, the
 *             <code>DescribeEventsForOrganizations</code> returns all events across your organization.
 *          Results are sorted by <code>lastModifiedTime</code>, starting with the most recent event. </p>
 *          <p>For more information about the different types of Health events, see <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html">Event</a>.</p>
 *          <p>Before you can call this operation, you must first enable Health to work with
 *          Organizations. To do this, call the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EnableHealthServiceAccessForOrganization.html">EnableHealthServiceAccessForOrganization</a> operation from your organization's
 *          management account.</p>
 *          <note>
 *             <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the next request to return more results.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthClient, DescribeEventsForOrganizationCommand } from "@aws-sdk/client-health"; // ES Modules import
 * // const { HealthClient, DescribeEventsForOrganizationCommand } = require("@aws-sdk/client-health"); // CommonJS import
 * const client = new HealthClient(config);
 * const input = { // DescribeEventsForOrganizationRequest
 *   filter: { // OrganizationEventFilter
 *     eventTypeCodes: [ // eventTypeList2
 *       "STRING_VALUE",
 *     ],
 *     awsAccountIds: [ // awsAccountIdsList
 *       "STRING_VALUE",
 *     ],
 *     services: [ // serviceList
 *       "STRING_VALUE",
 *     ],
 *     regions: [ // regionList
 *       "STRING_VALUE",
 *     ],
 *     startTime: { // DateTimeRange
 *       from: new Date("TIMESTAMP"),
 *       to: new Date("TIMESTAMP"),
 *     },
 *     endTime: {
 *       from: new Date("TIMESTAMP"),
 *       to: new Date("TIMESTAMP"),
 *     },
 *     lastUpdatedTime: {
 *       from: new Date("TIMESTAMP"),
 *       to: new Date("TIMESTAMP"),
 *     },
 *     entityArns: [ // entityArnList
 *       "STRING_VALUE",
 *     ],
 *     entityValues: [ // entityValueList
 *       "STRING_VALUE",
 *     ],
 *     eventTypeCategories: [ // eventTypeCategoryList2
 *       "issue" || "accountNotification" || "scheduledChange" || "investigation",
 *     ],
 *     eventStatusCodes: [ // eventStatusCodeList
 *       "open" || "closed" || "upcoming",
 *     ],
 *   },
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   locale: "STRING_VALUE",
 * };
 * const command = new DescribeEventsForOrganizationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEventsForOrganizationResponse
 * //   events: [ // OrganizationEventList
 * //     { // OrganizationEvent
 * //       arn: "STRING_VALUE",
 * //       service: "STRING_VALUE",
 * //       eventTypeCode: "STRING_VALUE",
 * //       eventTypeCategory: "issue" || "accountNotification" || "scheduledChange" || "investigation",
 * //       eventScopeCode: "PUBLIC" || "ACCOUNT_SPECIFIC" || "NONE",
 * //       region: "STRING_VALUE",
 * //       startTime: new Date("TIMESTAMP"),
 * //       endTime: new Date("TIMESTAMP"),
 * //       lastUpdatedTime: new Date("TIMESTAMP"),
 * //       statusCode: "open" || "closed" || "upcoming",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeEventsForOrganizationCommandInput - {@link DescribeEventsForOrganizationCommandInput}
 * @returns {@link DescribeEventsForOrganizationCommandOutput}
 * @see {@link DescribeEventsForOrganizationCommandInput} for command's `input` shape.
 * @see {@link DescribeEventsForOrganizationCommandOutput} for command's `response` shape.
 * @see {@link HealthClientResolvedConfig | config} for HealthClient's `config` shape.
 *
 * @throws {@link InvalidPaginationToken} (client fault)
 *  <p>The specified pagination token (<code>nextToken</code>) is not valid.</p>
 *
 * @throws {@link UnsupportedLocale} (client fault)
 *  <p>The specified locale is not supported.</p>
 *
 * @throws {@link HealthServiceException}
 * <p>Base exception class for all service exceptions from Health service.</p>
 *
 */
export class DescribeEventsForOrganizationCommand extends $Command<
  DescribeEventsForOrganizationCommandInput,
  DescribeEventsForOrganizationCommandOutput,
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
  constructor(readonly input: DescribeEventsForOrganizationCommandInput) {
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
  ): Handler<DescribeEventsForOrganizationCommandInput, DescribeEventsForOrganizationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeEventsForOrganizationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "HealthClient";
    const commandName = "DescribeEventsForOrganizationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: DescribeEventsForOrganizationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeEventsForOrganizationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeEventsForOrganizationCommandOutput> {
    return de_DescribeEventsForOrganizationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
