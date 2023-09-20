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
import { DescribeEventAggregatesRequest, DescribeEventAggregatesResponse } from "../models/models_0";
import { de_DescribeEventAggregatesCommand, se_DescribeEventAggregatesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeEventAggregatesCommand}.
 */
export interface DescribeEventAggregatesCommandInput extends DescribeEventAggregatesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeEventAggregatesCommand}.
 */
export interface DescribeEventAggregatesCommandOutput extends DescribeEventAggregatesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns the number of events of each event type (issue, scheduled change, and account
 *          notification). If no filter is specified, the counts of all events in each category are
 *          returned.</p>
 *          <note>
 *             <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the next request to return more results.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthClient, DescribeEventAggregatesCommand } from "@aws-sdk/client-health"; // ES Modules import
 * // const { HealthClient, DescribeEventAggregatesCommand } = require("@aws-sdk/client-health"); // CommonJS import
 * const client = new HealthClient(config);
 * const input = { // DescribeEventAggregatesRequest
 *   filter: { // EventFilter
 *     eventArns: [ // eventArnList
 *       "STRING_VALUE",
 *     ],
 *     eventTypeCodes: [ // eventTypeList2
 *       "STRING_VALUE",
 *     ],
 *     services: [ // serviceList
 *       "STRING_VALUE",
 *     ],
 *     regions: [ // regionList
 *       "STRING_VALUE",
 *     ],
 *     availabilityZones: [ // availabilityZones
 *       "STRING_VALUE",
 *     ],
 *     startTimes: [ // dateTimeRangeList
 *       { // DateTimeRange
 *         from: new Date("TIMESTAMP"),
 *         to: new Date("TIMESTAMP"),
 *       },
 *     ],
 *     endTimes: [
 *       {
 *         from: new Date("TIMESTAMP"),
 *         to: new Date("TIMESTAMP"),
 *       },
 *     ],
 *     lastUpdatedTimes: [
 *       {
 *         from: new Date("TIMESTAMP"),
 *         to: new Date("TIMESTAMP"),
 *       },
 *     ],
 *     entityArns: [ // entityArnList
 *       "STRING_VALUE",
 *     ],
 *     entityValues: [ // entityValueList
 *       "STRING_VALUE",
 *     ],
 *     eventTypeCategories: [ // eventTypeCategoryList2
 *       "issue" || "accountNotification" || "scheduledChange" || "investigation",
 *     ],
 *     tags: [ // tagFilter
 *       { // tagSet
 *         "<keys>": "STRING_VALUE",
 *       },
 *     ],
 *     eventStatusCodes: [ // eventStatusCodeList
 *       "open" || "closed" || "upcoming",
 *     ],
 *   },
 *   aggregateField: "eventTypeCategory", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new DescribeEventAggregatesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEventAggregatesResponse
 * //   eventAggregates: [ // EventAggregateList
 * //     { // EventAggregate
 * //       aggregateValue: "STRING_VALUE",
 * //       count: Number("int"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeEventAggregatesCommandInput - {@link DescribeEventAggregatesCommandInput}
 * @returns {@link DescribeEventAggregatesCommandOutput}
 * @see {@link DescribeEventAggregatesCommandInput} for command's `input` shape.
 * @see {@link DescribeEventAggregatesCommandOutput} for command's `response` shape.
 * @see {@link HealthClientResolvedConfig | config} for HealthClient's `config` shape.
 *
 * @throws {@link InvalidPaginationToken} (client fault)
 *  <p>The specified pagination token (<code>nextToken</code>) is not valid.</p>
 *
 * @throws {@link HealthServiceException}
 * <p>Base exception class for all service exceptions from Health service.</p>
 *
 */
export class DescribeEventAggregatesCommand extends $Command<
  DescribeEventAggregatesCommandInput,
  DescribeEventAggregatesCommandOutput,
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
  constructor(readonly input: DescribeEventAggregatesCommandInput) {
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
  ): Handler<DescribeEventAggregatesCommandInput, DescribeEventAggregatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeEventAggregatesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "HealthClient";
    const commandName = "DescribeEventAggregatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSHealth_20160804",
        operation: "DescribeEventAggregates",
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
  private serialize(input: DescribeEventAggregatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeEventAggregatesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeEventAggregatesCommandOutput> {
    return de_DescribeEventAggregatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
