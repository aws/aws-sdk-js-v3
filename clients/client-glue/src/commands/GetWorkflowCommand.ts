// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type { GetWorkflowRequest, GetWorkflowResponse } from "../models/models_2";
import { GetWorkflow } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetWorkflowCommand}.
 */
export interface GetWorkflowCommandInput extends GetWorkflowRequest {}
/**
 * @public
 *
 * The output of {@link GetWorkflowCommand}.
 */
export interface GetWorkflowCommandOutput extends GetWorkflowResponse, __MetadataBearer {}

/**
 * <p>Retrieves resource metadata for a workflow.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetWorkflowCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetWorkflowCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // GetWorkflowRequest
 *   Name: "STRING_VALUE", // required
 *   IncludeGraph: true || false,
 * };
 * const command = new GetWorkflowCommand(input);
 * const response = await client.send(command);
 * // { // GetWorkflowResponse
 * //   Workflow: { // Workflow
 * //     Name: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     DefaultRunProperties: { // WorkflowRunProperties
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     CreatedOn: new Date("TIMESTAMP"),
 * //     LastModifiedOn: new Date("TIMESTAMP"),
 * //     LastRun: { // WorkflowRun
 * //       Name: "STRING_VALUE",
 * //       WorkflowRunId: "STRING_VALUE",
 * //       PreviousRunId: "STRING_VALUE",
 * //       WorkflowRunProperties: {
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       StartedOn: new Date("TIMESTAMP"),
 * //       CompletedOn: new Date("TIMESTAMP"),
 * //       Status: "RUNNING" || "COMPLETED" || "STOPPING" || "STOPPED" || "ERROR",
 * //       ErrorMessage: "STRING_VALUE",
 * //       Statistics: { // WorkflowRunStatistics
 * //         TotalActions: Number("int"),
 * //         TimeoutActions: Number("int"),
 * //         FailedActions: Number("int"),
 * //         StoppedActions: Number("int"),
 * //         SucceededActions: Number("int"),
 * //         RunningActions: Number("int"),
 * //         ErroredActions: Number("int"),
 * //         WaitingActions: Number("int"),
 * //       },
 * //       Graph: { // WorkflowGraph
 * //         Nodes: [ // NodeList
 * //           { // Node
 * //             Type: "CRAWLER" || "JOB" || "TRIGGER",
 * //             Name: "STRING_VALUE",
 * //             UniqueId: "STRING_VALUE",
 * //             TriggerDetails: { // TriggerNodeDetails
 * //               Trigger: { // Trigger
 * //                 Name: "STRING_VALUE",
 * //                 WorkflowName: "STRING_VALUE",
 * //                 Id: "STRING_VALUE",
 * //                 Type: "SCHEDULED" || "CONDITIONAL" || "ON_DEMAND" || "EVENT",
 * //                 State: "CREATING" || "CREATED" || "ACTIVATING" || "ACTIVATED" || "DEACTIVATING" || "DEACTIVATED" || "DELETING" || "UPDATING",
 * //                 Description: "STRING_VALUE",
 * //                 Schedule: "STRING_VALUE",
 * //                 Actions: [ // ActionList
 * //                   { // Action
 * //                     JobName: "STRING_VALUE",
 * //                     Arguments: { // GenericMap
 * //                       "<keys>": "STRING_VALUE",
 * //                     },
 * //                     Timeout: Number("int"),
 * //                     SecurityConfiguration: "STRING_VALUE",
 * //                     NotificationProperty: { // NotificationProperty
 * //                       NotifyDelayAfter: Number("int"),
 * //                     },
 * //                     CrawlerName: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //                 Predicate: { // Predicate
 * //                   Logical: "AND" || "ANY",
 * //                   Conditions: [ // ConditionList
 * //                     { // Condition
 * //                       LogicalOperator: "EQUALS",
 * //                       JobName: "STRING_VALUE",
 * //                       State: "STARTING" || "RUNNING" || "STOPPING" || "STOPPED" || "SUCCEEDED" || "FAILED" || "TIMEOUT" || "ERROR" || "WAITING" || "EXPIRED",
 * //                       CrawlerName: "STRING_VALUE",
 * //                       CrawlState: "RUNNING" || "CANCELLING" || "CANCELLED" || "SUCCEEDED" || "FAILED" || "ERROR",
 * //                     },
 * //                   ],
 * //                 },
 * //                 EventBatchingCondition: { // EventBatchingCondition
 * //                   BatchSize: Number("int"), // required
 * //                   BatchWindow: Number("int"),
 * //                 },
 * //               },
 * //             },
 * //             JobDetails: { // JobNodeDetails
 * //               JobRuns: [ // JobRunList
 * //                 { // JobRun
 * //                   Id: "STRING_VALUE",
 * //                   Attempt: Number("int"),
 * //                   PreviousRunId: "STRING_VALUE",
 * //                   TriggerName: "STRING_VALUE",
 * //                   JobName: "STRING_VALUE",
 * //                   JobMode: "SCRIPT" || "VISUAL" || "NOTEBOOK",
 * //                   JobRunQueuingEnabled: true || false,
 * //                   StartedOn: new Date("TIMESTAMP"),
 * //                   LastModifiedOn: new Date("TIMESTAMP"),
 * //                   CompletedOn: new Date("TIMESTAMP"),
 * //                   JobRunState: "STARTING" || "RUNNING" || "STOPPING" || "STOPPED" || "SUCCEEDED" || "FAILED" || "TIMEOUT" || "ERROR" || "WAITING" || "EXPIRED",
 * //                   Arguments: {
 * //                     "<keys>": "STRING_VALUE",
 * //                   },
 * //                   ErrorMessage: "STRING_VALUE",
 * //                   PredecessorRuns: [ // PredecessorList
 * //                     { // Predecessor
 * //                       JobName: "STRING_VALUE",
 * //                       RunId: "STRING_VALUE",
 * //                     },
 * //                   ],
 * //                   AllocatedCapacity: Number("int"),
 * //                   ExecutionTime: Number("int"),
 * //                   Timeout: Number("int"),
 * //                   MaxCapacity: Number("double"),
 * //                   WorkerType: "Standard" || "G.1X" || "G.2X" || "G.025X" || "G.4X" || "G.8X" || "Z.2X",
 * //                   NumberOfWorkers: Number("int"),
 * //                   SecurityConfiguration: "STRING_VALUE",
 * //                   LogGroupName: "STRING_VALUE",
 * //                   NotificationProperty: {
 * //                     NotifyDelayAfter: Number("int"),
 * //                   },
 * //                   GlueVersion: "STRING_VALUE",
 * //                   DPUSeconds: Number("double"),
 * //                   ExecutionClass: "FLEX" || "STANDARD",
 * //                   MaintenanceWindow: "STRING_VALUE",
 * //                   ProfileName: "STRING_VALUE",
 * //                   StateDetail: "STRING_VALUE",
 * //                   ExecutionRoleSessionPolicy: "STRING_VALUE",
 * //                 },
 * //               ],
 * //             },
 * //             CrawlerDetails: { // CrawlerNodeDetails
 * //               Crawls: [ // CrawlList
 * //                 { // Crawl
 * //                   State: "RUNNING" || "CANCELLING" || "CANCELLED" || "SUCCEEDED" || "FAILED" || "ERROR",
 * //                   StartedOn: new Date("TIMESTAMP"),
 * //                   CompletedOn: new Date("TIMESTAMP"),
 * //                   ErrorMessage: "STRING_VALUE",
 * //                   LogGroup: "STRING_VALUE",
 * //                   LogStream: "STRING_VALUE",
 * //                 },
 * //               ],
 * //             },
 * //           },
 * //         ],
 * //         Edges: [ // EdgeList
 * //           { // Edge
 * //             SourceId: "STRING_VALUE",
 * //             DestinationId: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //       StartingEventBatchCondition: { // StartingEventBatchCondition
 * //         BatchSize: Number("int"),
 * //         BatchWindow: Number("int"),
 * //       },
 * //     },
 * //     Graph: {
 * //       Nodes: [
 * //         {
 * //           Type: "CRAWLER" || "JOB" || "TRIGGER",
 * //           Name: "STRING_VALUE",
 * //           UniqueId: "STRING_VALUE",
 * //           TriggerDetails: {
 * //             Trigger: {
 * //               Name: "STRING_VALUE",
 * //               WorkflowName: "STRING_VALUE",
 * //               Id: "STRING_VALUE",
 * //               Type: "SCHEDULED" || "CONDITIONAL" || "ON_DEMAND" || "EVENT",
 * //               State: "CREATING" || "CREATED" || "ACTIVATING" || "ACTIVATED" || "DEACTIVATING" || "DEACTIVATED" || "DELETING" || "UPDATING",
 * //               Description: "STRING_VALUE",
 * //               Schedule: "STRING_VALUE",
 * //               Actions: [
 * //                 {
 * //                   JobName: "STRING_VALUE",
 * //                   Arguments: {
 * //                     "<keys>": "STRING_VALUE",
 * //                   },
 * //                   Timeout: Number("int"),
 * //                   SecurityConfiguration: "STRING_VALUE",
 * //                   NotificationProperty: {
 * //                     NotifyDelayAfter: Number("int"),
 * //                   },
 * //                   CrawlerName: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               Predicate: {
 * //                 Logical: "AND" || "ANY",
 * //                 Conditions: [
 * //                   {
 * //                     LogicalOperator: "EQUALS",
 * //                     JobName: "STRING_VALUE",
 * //                     State: "STARTING" || "RUNNING" || "STOPPING" || "STOPPED" || "SUCCEEDED" || "FAILED" || "TIMEOUT" || "ERROR" || "WAITING" || "EXPIRED",
 * //                     CrawlerName: "STRING_VALUE",
 * //                     CrawlState: "RUNNING" || "CANCELLING" || "CANCELLED" || "SUCCEEDED" || "FAILED" || "ERROR",
 * //                   },
 * //                 ],
 * //               },
 * //               EventBatchingCondition: {
 * //                 BatchSize: Number("int"), // required
 * //                 BatchWindow: Number("int"),
 * //               },
 * //             },
 * //           },
 * //           JobDetails: {
 * //             JobRuns: [
 * //               {
 * //                 Id: "STRING_VALUE",
 * //                 Attempt: Number("int"),
 * //                 PreviousRunId: "STRING_VALUE",
 * //                 TriggerName: "STRING_VALUE",
 * //                 JobName: "STRING_VALUE",
 * //                 JobMode: "SCRIPT" || "VISUAL" || "NOTEBOOK",
 * //                 JobRunQueuingEnabled: true || false,
 * //                 StartedOn: new Date("TIMESTAMP"),
 * //                 LastModifiedOn: new Date("TIMESTAMP"),
 * //                 CompletedOn: new Date("TIMESTAMP"),
 * //                 JobRunState: "STARTING" || "RUNNING" || "STOPPING" || "STOPPED" || "SUCCEEDED" || "FAILED" || "TIMEOUT" || "ERROR" || "WAITING" || "EXPIRED",
 * //                 Arguments: "<GenericMap>",
 * //                 ErrorMessage: "STRING_VALUE",
 * //                 PredecessorRuns: [
 * //                   {
 * //                     JobName: "STRING_VALUE",
 * //                     RunId: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //                 AllocatedCapacity: Number("int"),
 * //                 ExecutionTime: Number("int"),
 * //                 Timeout: Number("int"),
 * //                 MaxCapacity: Number("double"),
 * //                 WorkerType: "Standard" || "G.1X" || "G.2X" || "G.025X" || "G.4X" || "G.8X" || "Z.2X",
 * //                 NumberOfWorkers: Number("int"),
 * //                 SecurityConfiguration: "STRING_VALUE",
 * //                 LogGroupName: "STRING_VALUE",
 * //                 NotificationProperty: "<NotificationProperty>",
 * //                 GlueVersion: "STRING_VALUE",
 * //                 DPUSeconds: Number("double"),
 * //                 ExecutionClass: "FLEX" || "STANDARD",
 * //                 MaintenanceWindow: "STRING_VALUE",
 * //                 ProfileName: "STRING_VALUE",
 * //                 StateDetail: "STRING_VALUE",
 * //                 ExecutionRoleSessionPolicy: "STRING_VALUE",
 * //               },
 * //             ],
 * //           },
 * //           CrawlerDetails: {
 * //             Crawls: [
 * //               {
 * //                 State: "RUNNING" || "CANCELLING" || "CANCELLED" || "SUCCEEDED" || "FAILED" || "ERROR",
 * //                 StartedOn: new Date("TIMESTAMP"),
 * //                 CompletedOn: new Date("TIMESTAMP"),
 * //                 ErrorMessage: "STRING_VALUE",
 * //                 LogGroup: "STRING_VALUE",
 * //                 LogStream: "STRING_VALUE",
 * //               },
 * //             ],
 * //           },
 * //         },
 * //       ],
 * //       Edges: [
 * //         {
 * //           SourceId: "STRING_VALUE",
 * //           DestinationId: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //     MaxConcurrentRuns: Number("int"),
 * //     BlueprintDetails: { // BlueprintDetails
 * //       BlueprintName: "STRING_VALUE",
 * //       RunId: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetWorkflowCommandInput - {@link GetWorkflowCommandInput}
 * @returns {@link GetWorkflowCommandOutput}
 * @see {@link GetWorkflowCommandInput} for command's `input` shape.
 * @see {@link GetWorkflowCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class GetWorkflowCommand extends $Command
  .classBuilder<
    GetWorkflowCommandInput,
    GetWorkflowCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "GetWorkflow", {})
  .n("GlueClient", "GetWorkflowCommand")
  .sc(GetWorkflow)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetWorkflowRequest;
      output: GetWorkflowResponse;
    };
    sdk: {
      input: GetWorkflowCommandInput;
      output: GetWorkflowCommandOutput;
    };
  };
}
