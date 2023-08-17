// smithy-typescript generated code
import { getEndpointDiscoveryPlugin } from "@aws-sdk/middleware-endpoint-discovery";
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

import { ListBatchLoadTasksRequest, ListBatchLoadTasksResponse } from "../models/models_0";
import { de_ListBatchLoadTasksCommand, se_ListBatchLoadTasksCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, TimestreamWriteClientResolvedConfig } from "../TimestreamWriteClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListBatchLoadTasksCommand}.
 */
export interface ListBatchLoadTasksCommandInput extends ListBatchLoadTasksRequest {}
/**
 * @public
 *
 * The output of {@link ListBatchLoadTasksCommand}.
 */
export interface ListBatchLoadTasksCommandOutput extends ListBatchLoadTasksResponse, __MetadataBearer {}

/**
 * @public
 * <p>Provides a list of batch load tasks, along with the name, status, when the task is
 *          resumable until, and other details. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.list-batch-load-tasks.html">code
 *             sample</a> for details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamWriteClient, ListBatchLoadTasksCommand } from "@aws-sdk/client-timestream-write"; // ES Modules import
 * // const { TimestreamWriteClient, ListBatchLoadTasksCommand } = require("@aws-sdk/client-timestream-write"); // CommonJS import
 * const client = new TimestreamWriteClient(config);
 * const input = { // ListBatchLoadTasksRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   TaskStatus: "CREATED" || "IN_PROGRESS" || "FAILED" || "SUCCEEDED" || "PROGRESS_STOPPED" || "PENDING_RESUME",
 * };
 * const command = new ListBatchLoadTasksCommand(input);
 * const response = await client.send(command);
 * // { // ListBatchLoadTasksResponse
 * //   NextToken: "STRING_VALUE",
 * //   BatchLoadTasks: [ // BatchLoadTaskList
 * //     { // BatchLoadTask
 * //       TaskId: "STRING_VALUE",
 * //       TaskStatus: "CREATED" || "IN_PROGRESS" || "FAILED" || "SUCCEEDED" || "PROGRESS_STOPPED" || "PENDING_RESUME",
 * //       DatabaseName: "STRING_VALUE",
 * //       TableName: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       LastUpdatedTime: new Date("TIMESTAMP"),
 * //       ResumableUntil: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListBatchLoadTasksCommandInput - {@link ListBatchLoadTasksCommandInput}
 * @returns {@link ListBatchLoadTasksCommandOutput}
 * @see {@link ListBatchLoadTasksCommandInput} for command's `input` shape.
 * @see {@link ListBatchLoadTasksCommandOutput} for command's `response` shape.
 * @see {@link TimestreamWriteClientResolvedConfig | config} for TimestreamWriteClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>
 *          Timestream was unable to fully process this request because of an internal server
 *          error.</p>
 *
 * @throws {@link InvalidEndpointException} (client fault)
 *  <p>The requested endpoint was not valid.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p> Too many requests were made by a user and they exceeded the service quotas. The request
 *          was throttled.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> An invalid or malformed request.</p>
 *
 * @throws {@link TimestreamWriteServiceException}
 * <p>Base exception class for all service exceptions from TimestreamWrite service.</p>
 *
 */
export class ListBatchLoadTasksCommand extends $Command<
  ListBatchLoadTasksCommandInput,
  ListBatchLoadTasksCommandOutput,
  TimestreamWriteClientResolvedConfig
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
  constructor(readonly input: ListBatchLoadTasksCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TimestreamWriteClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListBatchLoadTasksCommandInput, ListBatchLoadTasksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListBatchLoadTasksCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(
      getEndpointDiscoveryPlugin(configuration, { clientStack, options, isDiscoveredEndpointRequired: true })
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TimestreamWriteClient";
    const commandName = "ListBatchLoadTasksCommand";
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
  private serialize(input: ListBatchLoadTasksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListBatchLoadTasksCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListBatchLoadTasksCommandOutput> {
    return de_ListBatchLoadTasksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
