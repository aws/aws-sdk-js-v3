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

import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { LookupEventsRequest, LookupEventsResponse } from "../models/models_0";
import { de_LookupEventsCommand, se_LookupEventsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link LookupEventsCommand}.
 */
export interface LookupEventsCommandInput extends LookupEventsRequest {}
/**
 * @public
 *
 * The output of {@link LookupEventsCommand}.
 */
export interface LookupEventsCommandOutput extends LookupEventsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Looks up <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html#cloudtrail-concepts-management-events">management events</a> or <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html#cloudtrail-concepts-insights-events">CloudTrail Insights events</a> that are captured by CloudTrail.
 *          You can look up events that occurred in a Region within the last 90 days. Lookup supports
 *          the following attributes for management events:</p>
 *          <ul>
 *             <li>
 *                <p>Amazon Web Services access key</p>
 *             </li>
 *             <li>
 *                <p>Event ID</p>
 *             </li>
 *             <li>
 *                <p>Event name</p>
 *             </li>
 *             <li>
 *                <p>Event source</p>
 *             </li>
 *             <li>
 *                <p>Read only</p>
 *             </li>
 *             <li>
 *                <p>Resource name</p>
 *             </li>
 *             <li>
 *                <p>Resource type</p>
 *             </li>
 *             <li>
 *                <p>User name</p>
 *             </li>
 *          </ul>
 *          <p>Lookup supports the following attributes for Insights events:</p>
 *          <ul>
 *             <li>
 *                <p>Event ID</p>
 *             </li>
 *             <li>
 *                <p>Event name</p>
 *             </li>
 *             <li>
 *                <p>Event source</p>
 *             </li>
 *          </ul>
 *          <p>All attributes are optional. The default number of results returned is 50, with a
 *          maximum of 50 possible. The response includes a token that you can use to get the next page
 *          of results.</p>
 *          <important>
 *             <p>The rate of lookup requests is limited to two per second, per account, per Region. If
 *             this limit is exceeded, a throttling error occurs.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, LookupEventsCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, LookupEventsCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * const client = new CloudTrailClient(config);
 * const input = { // LookupEventsRequest
 *   LookupAttributes: [ // LookupAttributesList
 *     { // LookupAttribute
 *       AttributeKey: "EventId" || "EventName" || "ReadOnly" || "Username" || "ResourceType" || "ResourceName" || "EventSource" || "AccessKeyId", // required
 *       AttributeValue: "STRING_VALUE", // required
 *     },
 *   ],
 *   StartTime: new Date("TIMESTAMP"),
 *   EndTime: new Date("TIMESTAMP"),
 *   EventCategory: "insight",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new LookupEventsCommand(input);
 * const response = await client.send(command);
 * // { // LookupEventsResponse
 * //   Events: [ // EventsList
 * //     { // Event
 * //       EventId: "STRING_VALUE",
 * //       EventName: "STRING_VALUE",
 * //       ReadOnly: "STRING_VALUE",
 * //       AccessKeyId: "STRING_VALUE",
 * //       EventTime: new Date("TIMESTAMP"),
 * //       EventSource: "STRING_VALUE",
 * //       Username: "STRING_VALUE",
 * //       Resources: [ // ResourceList
 * //         { // Resource
 * //           ResourceType: "STRING_VALUE",
 * //           ResourceName: "STRING_VALUE",
 * //         },
 * //       ],
 * //       CloudTrailEvent: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param LookupEventsCommandInput - {@link LookupEventsCommandInput}
 * @returns {@link LookupEventsCommandOutput}
 * @see {@link LookupEventsCommandInput} for command's `input` shape.
 * @see {@link LookupEventsCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for CloudTrailClient's `config` shape.
 *
 * @throws {@link InvalidEventCategoryException} (client fault)
 *  <p>Occurs if an event category that is not valid is specified as a value of
 *             <code>EventCategory</code>.</p>
 *
 * @throws {@link InvalidLookupAttributesException} (client fault)
 *  <p>Occurs when a lookup attribute is specified that is not valid.</p>
 *
 * @throws {@link InvalidMaxResultsException} (client fault)
 *  <p>This exception is thrown if the limit specified is not valid.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>A token that is not valid, or a token that was previously used in a request with
 *          different parameters. This exception is thrown if the token is not valid.</p>
 *
 * @throws {@link InvalidTimeRangeException} (client fault)
 *  <p>Occurs if the timestamp values are not valid. Either the start time occurs after the end
 *          time, or the time range is outside the range of possible values.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>This exception is thrown when the requested operation is not permitted.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>This exception is thrown when the requested operation is not supported.</p>
 *
 * @throws {@link CloudTrailServiceException}
 * <p>Base exception class for all service exceptions from CloudTrail service.</p>
 *
 */
export class LookupEventsCommand extends $Command<
  LookupEventsCommandInput,
  LookupEventsCommandOutput,
  CloudTrailClientResolvedConfig
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
  constructor(readonly input: LookupEventsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudTrailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<LookupEventsCommandInput, LookupEventsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, LookupEventsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudTrailClient";
    const commandName = "LookupEventsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CloudTrail_20131101",
        operation: "LookupEvents",
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
  private serialize(input: LookupEventsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_LookupEventsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<LookupEventsCommandOutput> {
    return de_LookupEventsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
