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

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { DescribeEventsMessage, EventsMessage } from "../models/models_0";
import { de_DescribeEventsCommand, se_DescribeEventsCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeEventsCommand}.
 */
export interface DescribeEventsCommandInput extends DescribeEventsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeEventsCommand}.
 */
export interface DescribeEventsCommandOutput extends EventsMessage, __MetadataBearer {}

/**
 * @public
 * <p>Returns events related to clusters, cache security groups, and cache parameter groups.
 *             You can obtain events specific to a particular cluster, cache security group, or cache
 *             parameter group by providing the name as a parameter.</p>
 *          <p>By default, only the events occurring within the last hour are returned; however, you
 *             can retrieve up to 14 days' worth of events if necessary.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DescribeEventsCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DescribeEventsCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const input = { // DescribeEventsMessage
 *   SourceIdentifier: "STRING_VALUE",
 *   SourceType: "cache-cluster" || "cache-parameter-group" || "cache-security-group" || "cache-subnet-group" || "replication-group" || "user" || "user-group",
 *   StartTime: new Date("TIMESTAMP"),
 *   EndTime: new Date("TIMESTAMP"),
 *   Duration: Number("int"),
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeEventsCommand(input);
 * const response = await client.send(command);
 * // { // EventsMessage
 * //   Marker: "STRING_VALUE",
 * //   Events: [ // EventList
 * //     { // Event
 * //       SourceIdentifier: "STRING_VALUE",
 * //       SourceType: "cache-cluster" || "cache-parameter-group" || "cache-security-group" || "cache-subnet-group" || "replication-group" || "user" || "user-group",
 * //       Message: "STRING_VALUE",
 * //       Date: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeEventsCommandInput - {@link DescribeEventsCommandInput}
 * @returns {@link DescribeEventsCommandOutput}
 * @see {@link DescribeEventsCommandInput} for command's `input` shape.
 * @see {@link DescribeEventsCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Two or more incompatible parameters were specified.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value for a parameter is invalid.</p>
 *
 * @throws {@link ElastiCacheServiceException}
 * <p>Base exception class for all service exceptions from ElastiCache service.</p>
 *
 * @example DescribeEvents
 * ```javascript
 * // Describes all the cache-cluster events for the past 120 minutes.
 * const input = {
 *   "Duration": 360,
 *   "SourceType": "cache-cluster"
 * };
 * const command = new DescribeEventsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Events": [
 *     {
 *       "Date": "2016-12-22T16:27:56.088Z",
 *       "Message": "Added cache node 0001 in availability zone us-east-1e",
 *       "SourceIdentifier": "redis-cluster",
 *       "SourceType": "cache-cluster"
 *     },
 *     {
 *       "Date": "2016-12-22T16:27:56.078Z",
 *       "Message": "Cache cluster created",
 *       "SourceIdentifier": "redis-cluster",
 *       "SourceType": "cache-cluster"
 *     },
 *     {
 *       "Date": "2016-12-22T16:05:17.326Z",
 *       "Message": "Added cache node 0002 in availability zone us-east-1c",
 *       "SourceIdentifier": "my-memcached2",
 *       "SourceType": "cache-cluster"
 *     },
 *     {
 *       "Date": "2016-12-22T16:05:17.323Z",
 *       "Message": "Added cache node 0001 in availability zone us-east-1e",
 *       "SourceIdentifier": "my-memcached2",
 *       "SourceType": "cache-cluster"
 *     },
 *     {
 *       "Date": "2016-12-22T16:05:17.314Z",
 *       "Message": "Cache cluster created",
 *       "SourceIdentifier": "my-memcached2",
 *       "SourceType": "cache-cluster"
 *     }
 *   ],
 *   "Marker": ""
 * }
 * *\/
 * // example id: describeevents-1481843894757
 * ```
 *
 */
export class DescribeEventsCommand extends $Command<
  DescribeEventsCommandInput,
  DescribeEventsCommandOutput,
  ElastiCacheClientResolvedConfig
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
  constructor(readonly input: DescribeEventsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElastiCacheClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeEventsCommandInput, DescribeEventsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeEventsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "DescribeEventsCommand";
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
  private serialize(input: DescribeEventsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeEventsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeEventsCommandOutput> {
    return de_DescribeEventsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
