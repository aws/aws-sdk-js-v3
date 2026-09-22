// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetContextGraphInput, GetContextGraphOutput } from "../models/models_0";
import { GetContextGraph$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetContextGraphCommand}.
 */
export interface GetContextGraphCommandInput extends GetContextGraphInput {}
/**
 * @public
 *
 * The output of {@link GetContextGraphCommand}.
 */
export interface GetContextGraphCommandOutput extends GetContextGraphOutput, __MetadataBearer {}

/**
 * Queries the context graph with filtering, traversal, and pagination support.
 *
 * Pagination note: nodes and edges are returned together as a coherent
 * subgraph. Pagination cursors advance over nodes (the primary collection);
 * each page includes all edges connecting nodes within that page. Callers
 * should treat nodes as the paginated collection and edges as supplementary
 * relationship data attached to those nodes.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchOmniClient, GetContextGraphCommand } from "@aws-sdk/client-cloudwatchomni"; // ES Modules import
 * // const { CloudWatchOmniClient, GetContextGraphCommand } = require("@aws-sdk/client-cloudwatchomni"); // CommonJS import
 * // import type { CloudWatchOmniClientConfig } from "@aws-sdk/client-cloudwatchomni";
 * const config = {}; // type is CloudWatchOmniClientConfig
 * const client = new CloudWatchOmniClient(config);
 * const input = { // GetContextGraphInput
 *   nodeFilters: { // NodeFilters
 *     nodeId: "STRING_VALUE",
 *     nodeType: "SERVICE" || "RESOURCE" || "REMOTE_SERVICE",
 *     name: "STRING_VALUE",
 *     tags: [ // KeyFilterList
 *       { // KeyFilter
 *         key: "STRING_VALUE", // required
 *         values: [ // KeyFilterValues
 *           "STRING_VALUE",
 *         ],
 *       },
 *     ],
 *     telemetryAttributes: [
 *       {
 *         key: "STRING_VALUE", // required
 *         values: [
 *           "STRING_VALUE",
 *         ],
 *       },
 *     ],
 *     region: [ // StringSet
 *       "STRING_VALUE",
 *     ],
 *     cloudProvider: [
 *       "STRING_VALUE",
 *     ],
 *     sourceAccountId: [
 *       "STRING_VALUE",
 *     ],
 *     namespace: [
 *       "STRING_VALUE",
 *     ],
 *     category: [ // NodeCategorySet
 *       "GEN_AI_AGENT" || "GEN_AI_MODEL" || "DATABASE" || "MESSAGING_QUEUE" || "COMPUTE" || "STORAGE" || "NETWORK",
 *     ],
 *     stage: [
 *       "STRING_VALUE",
 *     ],
 *     sources: [ // SourceSet
 *       "VPC_FLOW_LOG" || "CLOUDTRAIL" || "IAM_POLICY" || "CODE_SEMANTICS" || "TELEMETRY" || "AZURE_VNET_FLOW_LOG" || "ELB_ACCESS_LOG" || "CLOUDFRONT_ACCESS_LOG" || "S3_ACCESS_LOG" || "WAF_ACCESS_LOG" || "AWS_INTEGRATION" || "CONFIG",
 *     ],
 *   },
 *   edgeFilters: { // EdgeFilters
 *     edgeId: "STRING_VALUE",
 *     from: "STRING_VALUE",
 *     to: "STRING_VALUE",
 *     edgeType: "CALLS" || "ACCESSES" || "RUNS_ON",
 *     operations: "<StringSet>",
 *     telemetryAttributes: [
 *       {
 *         key: "STRING_VALUE", // required
 *         values: [
 *           "STRING_VALUE",
 *         ],
 *       },
 *     ],
 *     sources: [
 *       "VPC_FLOW_LOG" || "CLOUDTRAIL" || "IAM_POLICY" || "CODE_SEMANTICS" || "TELEMETRY" || "AZURE_VNET_FLOW_LOG" || "ELB_ACCESS_LOG" || "CLOUDFRONT_ACCESS_LOG" || "S3_ACCESS_LOG" || "WAF_ACCESS_LOG" || "AWS_INTEGRATION" || "CONFIG",
 *     ],
 *   },
 *   startTime: new Date("TIMESTAMP"), // required
 *   endTime: new Date("TIMESTAMP"), // required
 *   depth: Number("int"),
 *   maxResults: Number("int"),
 *   maxEdgesPerNode: Number("int"),
 *   includeMetadata: true || false,
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new GetContextGraphCommand(input);
 * const response = await client.send(command);
 * // { // GetContextGraphOutput
 * //   nodes: [ // NodeList // required
 * //     { // Node
 * //       nodeId: "STRING_VALUE",
 * //       nodeType: "SERVICE" || "RESOURCE" || "REMOTE_SERVICE",
 * //       name: "STRING_VALUE",
 * //       alternateNames: [ // StringSet
 * //         "STRING_VALUE",
 * //       ],
 * //       tags: { // IntelligenceTagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       nodeProperties: { // NodeProperties
 * //         region: "STRING_VALUE",
 * //         cloudProvider: "STRING_VALUE",
 * //         sourceAccountId: "STRING_VALUE",
 * //         namespace: "STRING_VALUE",
 * //         category: "GEN_AI_AGENT" || "GEN_AI_MODEL" || "DATABASE" || "MESSAGING_QUEUE" || "COMPUTE" || "STORAGE" || "NETWORK",
 * //         stage: "STRING_VALUE",
 * //       },
 * //       telemetryAttributes: { // ContextGraphAttributeMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       operationDetails: { // OperationDetails
 * //         "<keys>": [ // OperationIdentifierSets
 * //           { // OperationIdentifierSet
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //       signalTypes: [ // SignalSet
 * //         "LOGS" || "METRICS" || "TRACES" || "CONFIG" || "UNKNOWN",
 * //       ],
 * //       sources: [ // SourceSet
 * //         "VPC_FLOW_LOG" || "CLOUDTRAIL" || "IAM_POLICY" || "CODE_SEMANTICS" || "TELEMETRY" || "AZURE_VNET_FLOW_LOG" || "ELB_ACCESS_LOG" || "CLOUDFRONT_ACCESS_LOG" || "S3_ACCESS_LOG" || "WAF_ACCESS_LOG" || "AWS_INTEGRATION" || "CONFIG",
 * //       ],
 * //       metadata: { // Metadata
 * //         metrics: [ // MetricMetadataList
 * //           { // MetricMetadata
 * //             name: "STRING_VALUE",
 * //             namespace: "STRING_VALUE",
 * //             preferredStat: "STRING_VALUE",
 * //             metricType: "STRING_VALUE",
 * //             attributes: { // MetadataAttributeMap
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //             semantics: { // MetricSemantics
 * //               description: "STRING_VALUE",
 * //               unit: "STRING_VALUE",
 * //             },
 * //           },
 * //         ],
 * //         semantics: { // NodeSemantics
 * //           purpose: "STRING_VALUE",
 * //           language: "STRING_VALUE",
 * //           framework: "STRING_VALUE",
 * //           kind: "STRING_VALUE",
 * //           repository: "STRING_VALUE",
 * //         },
 * //         logs: [ // LogMetadataList
 * //           { // LogMetadata
 * //             attributes: { // LogMetadataAttributeMap
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //           },
 * //         ],
 * //         traces: [ // TraceMetadataList
 * //           { // TraceMetadata
 * //             attributes: { // TraceMetadataAttributeMap
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //           },
 * //         ],
 * //       },
 * //       firstObservedAt: new Date("TIMESTAMP"),
 * //       lastObservedAt: new Date("TIMESTAMP"),
 * //       edges: [ // EdgeList
 * //         { // Edge
 * //           edgeId: "STRING_VALUE",
 * //           from: "STRING_VALUE",
 * //           to: "STRING_VALUE",
 * //           edgeType: "CALLS" || "ACCESSES" || "RUNS_ON",
 * //           operations: [
 * //             "STRING_VALUE",
 * //           ],
 * //           edgeProperties: { // EdgeProperties
 * //             protocol: "STRING_VALUE",
 * //             sourcePort: "STRING_VALUE",
 * //             destinationPort: "STRING_VALUE",
 * //             blocked: true || false,
 * //             errorCode: "STRING_VALUE",
 * //             httpStatusCode: "STRING_VALUE",
 * //             httpMethod: "STRING_VALUE",
 * //             serviceInitiated: true || false,
 * //             trafficStats: { // EdgeTrafficStats
 * //               bytes: Number("long"),
 * //               packets: Number("long"),
 * //               flows: Number("long"),
 * //               sentBytes: Number("long"),
 * //               receivedBytes: Number("long"),
 * //             },
 * //           },
 * //           telemetryAttributes: {
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //           signalTypes: [
 * //             "LOGS" || "METRICS" || "TRACES" || "CONFIG" || "UNKNOWN",
 * //           ],
 * //           sources: [
 * //             "VPC_FLOW_LOG" || "CLOUDTRAIL" || "IAM_POLICY" || "CODE_SEMANTICS" || "TELEMETRY" || "AZURE_VNET_FLOW_LOG" || "ELB_ACCESS_LOG" || "CLOUDFRONT_ACCESS_LOG" || "S3_ACCESS_LOG" || "WAF_ACCESS_LOG" || "AWS_INTEGRATION" || "CONFIG",
 * //           ],
 * //           metadata: {
 * //             metrics: [
 * //               {
 * //                 name: "STRING_VALUE",
 * //                 namespace: "STRING_VALUE",
 * //                 preferredStat: "STRING_VALUE",
 * //                 metricType: "STRING_VALUE",
 * //                 attributes: {
 * //                   "<keys>": "STRING_VALUE",
 * //                 },
 * //                 semantics: {
 * //                   description: "STRING_VALUE",
 * //                   unit: "STRING_VALUE",
 * //                 },
 * //               },
 * //             ],
 * //             semantics: {
 * //               purpose: "STRING_VALUE",
 * //               language: "STRING_VALUE",
 * //               framework: "STRING_VALUE",
 * //               kind: "STRING_VALUE",
 * //               repository: "STRING_VALUE",
 * //             },
 * //             logs: [
 * //               {
 * //                 attributes: {
 * //                   "<keys>": "STRING_VALUE",
 * //                 },
 * //               },
 * //             ],
 * //             traces: [
 * //               {
 * //                 attributes: {
 * //                   "<keys>": "STRING_VALUE",
 * //                 },
 * //               },
 * //             ],
 * //           },
 * //           firstObservedAt: new Date("TIMESTAMP"),
 * //           lastObservedAt: new Date("TIMESTAMP"),
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetContextGraphCommandInput - {@link GetContextGraphCommandInput}
 * @returns {@link GetContextGraphCommandOutput}
 * @see {@link GetContextGraphCommandInput} for command's `input` shape.
 * @see {@link GetContextGraphCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchOmniClientResolvedConfig | config} for CloudWatchOmniClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  The caller is not authorized to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *  An unexpected error occurred while processing the request.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was throttled due to exceeding the allowed request rate.
 *
 * @throws {@link ValidationException} (client fault)
 *  A parameter is specified incorrectly.
 *
 * @throws {@link CloudWatchOmniServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchOmni service.</p>
 *
 *
 * @example Query a service and its immediate dependencies
 * ```javascript
 * // The following example returns context graph nodes matching the filter and traverses one hop out to their direct dependencies, over a one-hour window. Payloads are shown as JSON; on the wire they are CBOR-encoded.
 * const input = {
 *   depth: 1,
 *   endTime: "2026-09-16T01:00:00Z",
 *   includeMetadata: false,
 *   maxResults: 100,
 *   nodeFilters: {
 *     namespace: [
 *       "ecommerce"
 *     ],
 *     nodeType: "SERVICE"
 *   },
 *   startTime: "2026-09-16T00:00:00Z"
 * };
 * const command = new GetContextGraphCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   nextToken: "eyJvZmZzZXQiOjEwMH0=",
 *   nodes: [
 *     {
 *       edges: [
 *         {
 *           edgeId: "edge:checkout-service->payments-service",
 *           edgeType: "CALLS",
 *           firstObservedAt: "2026-09-16T00:03:00Z",
 *           from: "svc:checkout-service",
 *           lastObservedAt: "2026-09-16T00:58:00Z",
 *           operations: [
 *             "POST /charges"
 *           ],
 *           signalTypes: [
 *             "TRACES"
 *           ],
 *           sources: [
 *             "TELEMETRY"
 *           ],
 *           to: "svc:payments-service"
 *         }
 *       ],
 *       firstObservedAt: "2026-09-16T00:03:00Z",
 *       lastObservedAt: "2026-09-16T00:58:00Z",
 *       name: "checkout-service",
 *       nodeId: "svc:checkout-service",
 *       nodeProperties: {
 *         cloudProvider: "aws",
 *         namespace: "ecommerce",
 *         region: "us-east-1",
 *         sourceAccountId: "123456789012"
 *       },
 *       nodeType: "SERVICE",
 *       signalTypes: [
 *         "TRACES"
 *       ],
 *       sources: [
 *         "TELEMETRY"
 *       ]
 *     },
 *     {
 *       firstObservedAt: "2026-09-16T00:01:00Z",
 *       lastObservedAt: "2026-09-16T00:59:00Z",
 *       name: "payments-service",
 *       nodeId: "svc:payments-service",
 *       nodeProperties: {
 *         cloudProvider: "aws",
 *         namespace: "ecommerce",
 *         region: "us-east-1",
 *         sourceAccountId: "123456789012"
 *       },
 *       nodeType: "SERVICE",
 *       signalTypes: [
 *         "TRACES"
 *       ],
 *       sources: [
 *         "TELEMETRY"
 *       ]
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetContextGraphCommand extends command<GetContextGraphCommandInput, GetContextGraphCommandOutput>(
  _ep0,
  _mw0,
  "GetContextGraph",
  GetContextGraph$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetContextGraphInput;
      output: GetContextGraphOutput;
    };
    sdk: {
      input: GetContextGraphCommandInput;
      output: GetContextGraphCommandOutput;
    };
  };
}
