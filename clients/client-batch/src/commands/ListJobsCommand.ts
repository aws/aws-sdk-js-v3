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

import { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import { ListJobsRequest, ListJobsResponse } from "../models/models_0";
import { de_ListJobsCommand, se_ListJobsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListJobsCommand}.
 */
export interface ListJobsCommandInput extends ListJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListJobsCommand}.
 */
export interface ListJobsCommandOutput extends ListJobsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of Batch jobs.</p>
 *          <p>You must specify only one of the following items:</p>
 *          <ul>
 *             <li>
 *                <p>A job queue ID to return a list of jobs in that job queue</p>
 *             </li>
 *             <li>
 *                <p>A multi-node parallel job ID to return a list of nodes for that job</p>
 *             </li>
 *             <li>
 *                <p>An array job ID to return a list of the children for that job</p>
 *             </li>
 *          </ul>
 *          <p>You can filter the results by job status with the <code>jobStatus</code> parameter. If you don't specify a
 *    status, only <code>RUNNING</code> jobs are returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, ListJobsCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, ListJobsCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * const client = new BatchClient(config);
 * const input = { // ListJobsRequest
 *   jobQueue: "STRING_VALUE",
 *   arrayJobId: "STRING_VALUE",
 *   multiNodeJobId: "STRING_VALUE",
 *   jobStatus: "SUBMITTED" || "PENDING" || "RUNNABLE" || "STARTING" || "RUNNING" || "SUCCEEDED" || "FAILED",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   filters: [ // ListJobsFilterList
 *     { // KeyValuesPair
 *       name: "STRING_VALUE",
 *       values: [ // StringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new ListJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListJobsResponse
 * //   jobSummaryList: [ // JobSummaryList // required
 * //     { // JobSummary
 * //       jobArn: "STRING_VALUE",
 * //       jobId: "STRING_VALUE", // required
 * //       jobName: "STRING_VALUE", // required
 * //       createdAt: Number("long"),
 * //       status: "SUBMITTED" || "PENDING" || "RUNNABLE" || "STARTING" || "RUNNING" || "SUCCEEDED" || "FAILED",
 * //       statusReason: "STRING_VALUE",
 * //       startedAt: Number("long"),
 * //       stoppedAt: Number("long"),
 * //       container: { // ContainerSummary
 * //         exitCode: Number("int"),
 * //         reason: "STRING_VALUE",
 * //       },
 * //       arrayProperties: { // ArrayPropertiesSummary
 * //         size: Number("int"),
 * //         index: Number("int"),
 * //       },
 * //       nodeProperties: { // NodePropertiesSummary
 * //         isMainNode: true || false,
 * //         numNodes: Number("int"),
 * //         nodeIndex: Number("int"),
 * //       },
 * //       jobDefinition: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListJobsCommandInput - {@link ListJobsCommandInput}
 * @returns {@link ListJobsCommandOutput}
 * @see {@link ListJobsCommandInput} for command's `input` shape.
 * @see {@link ListJobsCommandOutput} for command's `response` shape.
 * @see {@link BatchClientResolvedConfig | config} for BatchClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. One example cause is using an action or resource on behalf
 *    of a user that doesn't have permissions to use the action or resource. Another cause is specifying an identifier
 *    that's not valid.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link BatchServiceException}
 * <p>Base exception class for all service exceptions from Batch service.</p>
 *
 * @example To list running jobs
 * ```javascript
 * // This example lists the running jobs in the HighPriority job queue.
 * const input = {
 *   "jobQueue": "HighPriority"
 * };
 * const command = new ListJobsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "jobSummaryList": [
 *     {
 *       "jobId": "e66ff5fd-a1ff-4640-b1a2-0b0a142f49bb",
 *       "jobName": "example"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-list-running-jobs-1481154202164
 * ```
 *
 * @example To list submitted jobs
 * ```javascript
 * // This example lists jobs in the HighPriority job queue that are in the SUBMITTED job status.
 * const input = {
 *   "jobQueue": "HighPriority",
 *   "jobStatus": "SUBMITTED"
 * };
 * const command = new ListJobsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "jobSummaryList": [
 *     {
 *       "jobId": "68f0c163-fbd4-44e6-9fd1-25b14a434786",
 *       "jobName": "example"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-list-submitted-jobs-1481154251623
 * ```
 *
 */
export class ListJobsCommand extends $Command<ListJobsCommandInput, ListJobsCommandOutput, BatchClientResolvedConfig> {
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
  constructor(readonly input: ListJobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BatchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListJobsCommandInput, ListJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListJobsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BatchClient";
    const commandName = "ListJobsCommand";
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
  private serialize(input: ListJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListJobsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListJobsCommandOutput> {
    return de_ListJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
