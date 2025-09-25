// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeEventsMessage, EventsMessage } from "../models/models_0";
import { DescribeEvents } from "../schemas/schemas_18_DescribeEvents";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * // import type { ElastiCacheClientConfig } from "@aws-sdk/client-elasticache";
 * const config = {}; // type is ElastiCacheClientConfig
 * const client = new ElastiCacheClient(config);
 * const input = { // DescribeEventsMessage
 *   SourceIdentifier: "STRING_VALUE",
 *   SourceType: "cache-cluster" || "cache-parameter-group" || "cache-security-group" || "cache-subnet-group" || "replication-group" || "serverless-cache" || "serverless-cache-snapshot" || "user" || "user-group",
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
 * //       SourceType: "cache-cluster" || "cache-parameter-group" || "cache-security-group" || "cache-subnet-group" || "replication-group" || "serverless-cache" || "serverless-cache-snapshot" || "user" || "user-group",
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
 *
 * @example DescribeEvents
 * ```javascript
 * // Describes all the cache-cluster events for the past 120 minutes.
 * const input = {
 *   Duration: 360,
 *   SourceType: "cache-cluster"
 * };
 * const command = new DescribeEventsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Events: [
 *     {
 *       Date: "2016-12-22T16:27:56.088Z",
 *       Message: "Added cache node 0001 in availability zone us-east-1e",
 *       SourceIdentifier: "redis-cluster",
 *       SourceType: "cache-cluster"
 *     },
 *     {
 *       Date: "2016-12-22T16:27:56.078Z",
 *       Message: "Cache cluster created",
 *       SourceIdentifier: "redis-cluster",
 *       SourceType: "cache-cluster"
 *     },
 *     {
 *       Date: "2016-12-22T16:05:17.326Z",
 *       Message: "Added cache node 0002 in availability zone us-east-1c",
 *       SourceIdentifier: "my-memcached2",
 *       SourceType: "cache-cluster"
 *     },
 *     {
 *       Date: "2016-12-22T16:05:17.323Z",
 *       Message: "Added cache node 0001 in availability zone us-east-1e",
 *       SourceIdentifier: "my-memcached2",
 *       SourceType: "cache-cluster"
 *     },
 *     {
 *       Date: "2016-12-22T16:05:17.314Z",
 *       Message: "Cache cluster created",
 *       SourceIdentifier: "my-memcached2",
 *       SourceType: "cache-cluster"
 *     }
 *   ],
 *   Marker: ""
 * }
 * *\/
 * ```
 *
 * @example DescribeEvents
 * ```javascript
 * // Describes all the replication-group events from 3:00P to 5:00P on November 11, 2016.
 * const input = {
 *   StartTime: "2016-12-22T15:00:00.000Z"
 * };
 * const command = new DescribeEventsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Events: [
 *     {
 *       Date: "2016-12-22T21:35:46.674Z",
 *       Message: "Snapshot succeeded for snapshot with ID 'cr-bkup' of replication group with ID 'clustered-redis'",
 *       SourceIdentifier: "clustered-redis-0001-001",
 *       SourceType: "cache-cluster"
 *     },
 *     {
 *       Date: "2016-12-22T16:27:56.088Z",
 *       Message: "Added cache node 0001 in availability zone us-east-1e",
 *       SourceIdentifier: "redis-cluster",
 *       SourceType: "cache-cluster"
 *     },
 *     {
 *       Date: "2016-12-22T16:27:56.078Z",
 *       Message: "Cache cluster created",
 *       SourceIdentifier: "redis-cluster",
 *       SourceType: "cache-cluster"
 *     },
 *     {
 *       Date: "2016-12-22T16:05:17.326Z",
 *       Message: "Added cache node 0002 in availability zone us-east-1c",
 *       SourceIdentifier: "my-memcached2",
 *       SourceType: "cache-cluster"
 *     },
 *     {
 *       Date: "2016-12-22T16:05:17.323Z",
 *       Message: "Added cache node 0001 in availability zone us-east-1e",
 *       SourceIdentifier: "my-memcached2",
 *       SourceType: "cache-cluster"
 *     },
 *     {
 *       Date: "2016-12-22T16:05:17.314Z",
 *       Message: "Cache cluster created",
 *       SourceIdentifier: "my-memcached2",
 *       SourceType: "cache-cluster"
 *     }
 *   ],
 *   Marker: ""
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeEventsCommand extends $Command
  .classBuilder<
    DescribeEventsCommandInput,
    DescribeEventsCommandOutput,
    ElastiCacheClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElastiCacheClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonElastiCacheV9", "DescribeEvents", {})
  .n("ElastiCacheClient", "DescribeEventsCommand")
  .sc(DescribeEvents)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeEventsMessage;
      output: EventsMessage;
    };
    sdk: {
      input: DescribeEventsCommandInput;
      output: DescribeEventsCommandOutput;
    };
  };
}
