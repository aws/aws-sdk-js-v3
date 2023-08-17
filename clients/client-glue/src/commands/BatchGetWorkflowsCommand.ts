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

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { BatchGetWorkflowsRequest, BatchGetWorkflowsResponse } from "../models/models_0";
import { de_BatchGetWorkflowsCommand, se_BatchGetWorkflowsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchGetWorkflowsCommand}.
 */
export interface BatchGetWorkflowsCommandInput extends BatchGetWorkflowsRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetWorkflowsCommand}.
 */
export interface BatchGetWorkflowsCommandOutput extends BatchGetWorkflowsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of resource metadata for a given list of workflow names. After calling the <code>ListWorkflows</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, BatchGetWorkflowsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, BatchGetWorkflowsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // BatchGetWorkflowsRequest
 *   Names: [ // WorkflowNames // required
 *     "STRING_VALUE",
 *   ],
 *   IncludeGraph: true || false,
 * };
 * const command = new BatchGetWorkflowsCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetWorkflowsResponse
 * //   Workflows: [ // Workflows
 * //     { // Workflow
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       DefaultRunProperties: { // WorkflowRunProperties
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       CreatedOn: new Date("TIMESTAMP"),
 * //       LastModifiedOn: new Date("TIMESTAMP"),
 * //       LastRun: { // WorkflowRun
 * //         Name: "STRING_VALUE",
 * //         WorkflowRunId: "STRING_VALUE",
 * //         PreviousRunId: "STRING_VALUE",
 * //         WorkflowRunProperties: {
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         StartedOn: new Date("TIMESTAMP"),
 * //         CompletedOn: new Date("TIMESTAMP"),
 * //         Status: "RUNNING" || "COMPLETED" || "STOPPING" || "STOPPED" || "ERROR",
 * //         ErrorMessage: "STRING_VALUE",
 * //         Statistics: { // WorkflowRunStatistics
 * //           TotalActions: Number("int"),
 * //           TimeoutActions: Number("int"),
 * //           FailedActions: Number("int"),
 * //           StoppedActions: Number("int"),
 * //           SucceededActions: Number("int"),
 * //           RunningActions: Number("int"),
 * //           ErroredActions: Number("int"),
 * //           WaitingActions: Number("int"),
 * //         },
 * //         Graph: { // WorkflowGraph
 * //           Nodes: [ // NodeList
 * //             { // Node
 * //               Type: "CRAWLER" || "JOB" || "TRIGGER",
 * //               Name: "STRING_VALUE",
 * //               UniqueId: "STRING_VALUE",
 * //               TriggerDetails: { // TriggerNodeDetails
 * //                 Trigger: { // Trigger
 * //                   Name: "STRING_VALUE",
 * //                   WorkflowName: "STRING_VALUE",
 * //                   Id: "STRING_VALUE",
 * //                   Type: "SCHEDULED" || "CONDITIONAL" || "ON_DEMAND" || "EVENT",
 * //                   State: "CREATING" || "CREATED" || "ACTIVATING" || "ACTIVATED" || "DEACTIVATING" || "DEACTIVATED" || "DELETING" || "UPDATING",
 * //                   Description: "STRING_VALUE",
 * //                   Schedule: "STRING_VALUE",
 * //                   Actions: [ // ActionList
 * //                     { // Action
 * //                       JobName: "STRING_VALUE",
 * //                       Arguments: { // GenericMap
 * //                         "<keys>": "STRING_VALUE",
 * //                       },
 * //                       Timeout: Number("int"),
 * //                       SecurityConfiguration: "STRING_VALUE",
 * //                       NotificationProperty: { // NotificationProperty
 * //                         NotifyDelayAfter: Number("int"),
 * //                       },
 * //                       CrawlerName: "STRING_VALUE",
 * //                     },
 * //                   ],
 * //                   Predicate: { // Predicate
 * //                     Logical: "AND" || "ANY",
 * //                     Conditions: [ // ConditionList
 * //                       { // Condition
 * //                         LogicalOperator: "EQUALS",
 * //                         JobName: "STRING_VALUE",
 * //                         State: "STARTING" || "RUNNING" || "STOPPING" || "STOPPED" || "SUCCEEDED" || "FAILED" || "TIMEOUT" || "ERROR" || "WAITING",
 * //                         CrawlerName: "STRING_VALUE",
 * //                         CrawlState: "RUNNING" || "CANCELLING" || "CANCELLED" || "SUCCEEDED" || "FAILED" || "ERROR",
 * //                       },
 * //                     ],
 * //                   },
 * //                   EventBatchingCondition: { // EventBatchingCondition
 * //                     BatchSize: Number("int"), // required
 * //                     BatchWindow: Number("int"),
 * //                   },
 * //                 },
 * //               },
 * //               JobDetails: { // JobNodeDetails
 * //                 JobRuns: [ // JobRunList
 * //                   { // JobRun
 * //                     Id: "STRING_VALUE",
 * //                     Attempt: Number("int"),
 * //                     PreviousRunId: "STRING_VALUE",
 * //                     TriggerName: "STRING_VALUE",
 * //                     JobName: "STRING_VALUE",
 * //                     StartedOn: new Date("TIMESTAMP"),
 * //                     LastModifiedOn: new Date("TIMESTAMP"),
 * //                     CompletedOn: new Date("TIMESTAMP"),
 * //                     JobRunState: "STARTING" || "RUNNING" || "STOPPING" || "STOPPED" || "SUCCEEDED" || "FAILED" || "TIMEOUT" || "ERROR" || "WAITING",
 * //                     Arguments: {
 * //                       "<keys>": "STRING_VALUE",
 * //                     },
 * //                     ErrorMessage: "STRING_VALUE",
 * //                     PredecessorRuns: [ // PredecessorList
 * //                       { // Predecessor
 * //                         JobName: "STRING_VALUE",
 * //                         RunId: "STRING_VALUE",
 * //                       },
 * //                     ],
 * //                     AllocatedCapacity: Number("int"),
 * //                     ExecutionTime: Number("int"),
 * //                     Timeout: Number("int"),
 * //                     MaxCapacity: Number("double"),
 * //                     WorkerType: "Standard" || "G.1X" || "G.2X" || "G.025X" || "G.4X" || "G.8X" || "Z.2X",
 * //                     NumberOfWorkers: Number("int"),
 * //                     SecurityConfiguration: "STRING_VALUE",
 * //                     LogGroupName: "STRING_VALUE",
 * //                     NotificationProperty: {
 * //                       NotifyDelayAfter: Number("int"),
 * //                     },
 * //                     GlueVersion: "STRING_VALUE",
 * //                     DPUSeconds: Number("double"),
 * //                     ExecutionClass: "FLEX" || "STANDARD",
 * //                   },
 * //                 ],
 * //               },
 * //               CrawlerDetails: { // CrawlerNodeDetails
 * //                 Crawls: [ // CrawlList
 * //                   { // Crawl
 * //                     State: "RUNNING" || "CANCELLING" || "CANCELLED" || "SUCCEEDED" || "FAILED" || "ERROR",
 * //                     StartedOn: new Date("TIMESTAMP"),
 * //                     CompletedOn: new Date("TIMESTAMP"),
 * //                     ErrorMessage: "STRING_VALUE",
 * //                     LogGroup: "STRING_VALUE",
 * //                     LogStream: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //               },
 * //             },
 * //           ],
 * //           Edges: [ // EdgeList
 * //             { // Edge
 * //               SourceId: "STRING_VALUE",
 * //               DestinationId: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //         StartingEventBatchCondition: { // StartingEventBatchCondition
 * //           BatchSize: Number("int"),
 * //           BatchWindow: Number("int"),
 * //         },
 * //       },
 * //       Graph: {
 * //         Nodes: [
 * //           {
 * //             Type: "CRAWLER" || "JOB" || "TRIGGER",
 * //             Name: "STRING_VALUE",
 * //             UniqueId: "STRING_VALUE",
 * //             TriggerDetails: {
 * //               Trigger: {
 * //                 Name: "STRING_VALUE",
 * //                 WorkflowName: "STRING_VALUE",
 * //                 Id: "STRING_VALUE",
 * //                 Type: "SCHEDULED" || "CONDITIONAL" || "ON_DEMAND" || "EVENT",
 * //                 State: "CREATING" || "CREATED" || "ACTIVATING" || "ACTIVATED" || "DEACTIVATING" || "DEACTIVATED" || "DELETING" || "UPDATING",
 * //                 Description: "STRING_VALUE",
 * //                 Schedule: "STRING_VALUE",
 * //                 Actions: [
 * //                   {
 * //                     JobName: "STRING_VALUE",
 * //                     Arguments: {
 * //                       "<keys>": "STRING_VALUE",
 * //                     },
 * //                     Timeout: Number("int"),
 * //                     SecurityConfiguration: "STRING_VALUE",
 * //                     NotificationProperty: {
 * //                       NotifyDelayAfter: Number("int"),
 * //                     },
 * //                     CrawlerName: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //                 Predicate: {
 * //                   Logical: "AND" || "ANY",
 * //                   Conditions: [
 * //                     {
 * //                       LogicalOperator: "EQUALS",
 * //                       JobName: "STRING_VALUE",
 * //                       State: "STARTING" || "RUNNING" || "STOPPING" || "STOPPED" || "SUCCEEDED" || "FAILED" || "TIMEOUT" || "ERROR" || "WAITING",
 * //                       CrawlerName: "STRING_VALUE",
 * //                       CrawlState: "RUNNING" || "CANCELLING" || "CANCELLED" || "SUCCEEDED" || "FAILED" || "ERROR",
 * //                     },
 * //                   ],
 * //                 },
 * //                 EventBatchingCondition: {
 * //                   BatchSize: Number("int"), // required
 * //                   BatchWindow: Number("int"),
 * //                 },
 * //               },
 * //             },
 * //             JobDetails: {
 * //               JobRuns: [
 * //                 {
 * //                   Id: "STRING_VALUE",
 * //                   Attempt: Number("int"),
 * //                   PreviousRunId: "STRING_VALUE",
 * //                   TriggerName: "STRING_VALUE",
 * //                   JobName: "STRING_VALUE",
 * //                   StartedOn: new Date("TIMESTAMP"),
 * //                   LastModifiedOn: new Date("TIMESTAMP"),
 * //                   CompletedOn: new Date("TIMESTAMP"),
 * //                   JobRunState: "STARTING" || "RUNNING" || "STOPPING" || "STOPPED" || "SUCCEEDED" || "FAILED" || "TIMEOUT" || "ERROR" || "WAITING",
 * //                   Arguments: "<GenericMap>",
 * //                   ErrorMessage: "STRING_VALUE",
 * //                   PredecessorRuns: [
 * //                     {
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
 * //                   NotificationProperty: "<NotificationProperty>",
 * //                   GlueVersion: "STRING_VALUE",
 * //                   DPUSeconds: Number("double"),
 * //                   ExecutionClass: "FLEX" || "STANDARD",
 * //                 },
 * //               ],
 * //             },
 * //             CrawlerDetails: {
 * //               Crawls: [
 * //                 {
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
 * //         Edges: [
 * //           {
 * //             SourceId: "STRING_VALUE",
 * //             DestinationId: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //       MaxConcurrentRuns: Number("int"),
 * //       BlueprintDetails: { // BlueprintDetails
 * //         BlueprintName: "STRING_VALUE",
 * //         RunId: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   MissingWorkflows: [ // WorkflowNames
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetWorkflowsCommandInput - {@link BatchGetWorkflowsCommandInput}
 * @returns {@link BatchGetWorkflowsCommandOutput}
 * @see {@link BatchGetWorkflowsCommandInput} for command's `input` shape.
 * @see {@link BatchGetWorkflowsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
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
 */
export class BatchGetWorkflowsCommand extends $Command<
  BatchGetWorkflowsCommandInput,
  BatchGetWorkflowsCommandOutput,
  GlueClientResolvedConfig
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
  constructor(readonly input: BatchGetWorkflowsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchGetWorkflowsCommandInput, BatchGetWorkflowsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchGetWorkflowsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "BatchGetWorkflowsCommand";
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
  private serialize(input: BatchGetWorkflowsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchGetWorkflowsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchGetWorkflowsCommandOutput> {
    return de_BatchGetWorkflowsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
