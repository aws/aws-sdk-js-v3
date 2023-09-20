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

import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import { DescribeDataRepositoryTasksRequest, DescribeDataRepositoryTasksResponse } from "../models/models_0";
import { de_DescribeDataRepositoryTasksCommand, se_DescribeDataRepositoryTasksCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeDataRepositoryTasksCommand}.
 */
export interface DescribeDataRepositoryTasksCommandInput extends DescribeDataRepositoryTasksRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDataRepositoryTasksCommand}.
 */
export interface DescribeDataRepositoryTasksCommandOutput
  extends DescribeDataRepositoryTasksResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns the description of specific Amazon FSx for Lustre or Amazon File Cache data repository tasks, if
 *             one or more <code>TaskIds</code> values are provided in the request, or if filters are used in the request.
 *             You can use filters to narrow the response to include just tasks for specific file systems or caches,
 *             or tasks in a specific lifecycle state. Otherwise, it returns all data repository tasks owned
 *             by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling.</p>
 *          <p>When retrieving all tasks, you can paginate the response by using  the optional <code>MaxResults</code>
 *             parameter to limit the number of tasks returned in a response. If more tasks remain,
 *             a <code>NextToken</code> value is returned in the response. In this case, send a later
 *             request with the <code>NextToken</code> request parameter set to the value of
 *             <code>NextToken</code> from the last response.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, DescribeDataRepositoryTasksCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, DescribeDataRepositoryTasksCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const input = { // DescribeDataRepositoryTasksRequest
 *   TaskIds: [ // TaskIds
 *     "STRING_VALUE",
 *   ],
 *   Filters: [ // DataRepositoryTaskFilters
 *     { // DataRepositoryTaskFilter
 *       Name: "file-system-id" || "task-lifecycle" || "data-repository-association-id" || "file-cache-id",
 *       Values: [ // DataRepositoryTaskFilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeDataRepositoryTasksCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDataRepositoryTasksResponse
 * //   DataRepositoryTasks: [ // DataRepositoryTasks
 * //     { // DataRepositoryTask
 * //       TaskId: "STRING_VALUE", // required
 * //       Lifecycle: "PENDING" || "EXECUTING" || "FAILED" || "SUCCEEDED" || "CANCELED" || "CANCELING", // required
 * //       Type: "EXPORT_TO_REPOSITORY" || "IMPORT_METADATA_FROM_REPOSITORY" || "RELEASE_DATA_FROM_FILESYSTEM" || "AUTO_RELEASE_DATA", // required
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //       StartTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //       ResourceARN: "STRING_VALUE",
 * //       Tags: [ // Tags
 * //         { // Tag
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       FileSystemId: "STRING_VALUE",
 * //       Paths: [ // DataRepositoryTaskPaths
 * //         "STRING_VALUE",
 * //       ],
 * //       FailureDetails: { // DataRepositoryTaskFailureDetails
 * //         Message: "STRING_VALUE",
 * //       },
 * //       Status: { // DataRepositoryTaskStatus
 * //         TotalCount: Number("long"),
 * //         SucceededCount: Number("long"),
 * //         FailedCount: Number("long"),
 * //         LastUpdatedTime: new Date("TIMESTAMP"),
 * //         ReleasedCapacity: Number("long"),
 * //       },
 * //       Report: { // CompletionReport
 * //         Enabled: true || false, // required
 * //         Path: "STRING_VALUE",
 * //         Format: "REPORT_CSV_20191124",
 * //         Scope: "FAILED_FILES_ONLY",
 * //       },
 * //       CapacityToRelease: Number("long"),
 * //       FileCacheId: "STRING_VALUE",
 * //       ReleaseConfiguration: { // ReleaseConfiguration
 * //         DurationSinceLastAccess: { // DurationSinceLastAccess
 * //           Unit: "DAYS",
 * //           Value: Number("long"),
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeDataRepositoryTasksCommandInput - {@link DescribeDataRepositoryTasksCommandInput}
 * @returns {@link DescribeDataRepositoryTasksCommandOutput}
 * @see {@link DescribeDataRepositoryTasksCommandInput} for command's `input` shape.
 * @see {@link DescribeDataRepositoryTasksCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for FSxClient's `config` shape.
 *
 * @throws {@link BadRequest} (client fault)
 *  <p>A generic error indicating a failure with a client request.</p>
 *
 * @throws {@link DataRepositoryTaskNotFound} (client fault)
 *  <p>The data repository task or tasks you specified could not be found.</p>
 *
 * @throws {@link FileSystemNotFound} (client fault)
 *  <p>No Amazon FSx file systems were found based upon supplied parameters.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>A generic error indicating a server-side failure.</p>
 *
 * @throws {@link FSxServiceException}
 * <p>Base exception class for all service exceptions from FSx service.</p>
 *
 */
export class DescribeDataRepositoryTasksCommand extends $Command<
  DescribeDataRepositoryTasksCommandInput,
  DescribeDataRepositoryTasksCommandOutput,
  FSxClientResolvedConfig
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
  constructor(readonly input: DescribeDataRepositoryTasksCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FSxClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDataRepositoryTasksCommandInput, DescribeDataRepositoryTasksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDataRepositoryTasksCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FSxClient";
    const commandName = "DescribeDataRepositoryTasksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSSimbaAPIService_v20180301",
        operation: "DescribeDataRepositoryTasks",
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
  private serialize(input: DescribeDataRepositoryTasksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeDataRepositoryTasksCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDataRepositoryTasksCommandOutput> {
    return de_DescribeDataRepositoryTasksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
