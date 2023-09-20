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

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { ListNotebookExecutionsInput, ListNotebookExecutionsOutput } from "../models/models_0";
import { de_ListNotebookExecutionsCommand, se_ListNotebookExecutionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListNotebookExecutionsCommand}.
 */
export interface ListNotebookExecutionsCommandInput extends ListNotebookExecutionsInput {}
/**
 * @public
 *
 * The output of {@link ListNotebookExecutionsCommand}.
 */
export interface ListNotebookExecutionsCommandOutput extends ListNotebookExecutionsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Provides summaries of all notebook executions. You can filter the list based on multiple
 *          criteria such as status, time range, and editor id. Returns a maximum of 50 notebook
 *          executions and a marker to track the paging of a longer notebook execution list across
 *          multiple <code>ListNotebookExecutions</code> calls.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, ListNotebookExecutionsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, ListNotebookExecutionsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const input = { // ListNotebookExecutionsInput
 *   EditorId: "STRING_VALUE",
 *   Status: "START_PENDING" || "STARTING" || "RUNNING" || "FINISHING" || "FINISHED" || "FAILING" || "FAILED" || "STOP_PENDING" || "STOPPING" || "STOPPED",
 *   From: new Date("TIMESTAMP"),
 *   To: new Date("TIMESTAMP"),
 *   Marker: "STRING_VALUE",
 *   ExecutionEngineId: "STRING_VALUE",
 * };
 * const command = new ListNotebookExecutionsCommand(input);
 * const response = await client.send(command);
 * // { // ListNotebookExecutionsOutput
 * //   NotebookExecutions: [ // NotebookExecutionSummaryList
 * //     { // NotebookExecutionSummary
 * //       NotebookExecutionId: "STRING_VALUE",
 * //       EditorId: "STRING_VALUE",
 * //       NotebookExecutionName: "STRING_VALUE",
 * //       Status: "START_PENDING" || "STARTING" || "RUNNING" || "FINISHING" || "FINISHED" || "FAILING" || "FAILED" || "STOP_PENDING" || "STOPPING" || "STOPPED",
 * //       StartTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //       NotebookS3Location: { // NotebookS3LocationForOutput
 * //         Bucket: "STRING_VALUE",
 * //         Key: "STRING_VALUE",
 * //       },
 * //       ExecutionEngineId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListNotebookExecutionsCommandInput - {@link ListNotebookExecutionsCommandInput}
 * @returns {@link ListNotebookExecutionsCommandOutput}
 * @see {@link ListNotebookExecutionsCommandInput} for command's `input` shape.
 * @see {@link ListNotebookExecutionsCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Indicates that an error occurred while processing the request and that the request was
 *          not completed.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception occurs when there is something wrong with user input.</p>
 *
 * @throws {@link EMRServiceException}
 * <p>Base exception class for all service exceptions from EMR service.</p>
 *
 */
export class ListNotebookExecutionsCommand extends $Command<
  ListNotebookExecutionsCommandInput,
  ListNotebookExecutionsCommandOutput,
  EMRClientResolvedConfig
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
  constructor(readonly input: ListNotebookExecutionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListNotebookExecutionsCommandInput, ListNotebookExecutionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListNotebookExecutionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "ListNotebookExecutionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ElasticMapReduce",
        operation: "ListNotebookExecutions",
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
  private serialize(input: ListNotebookExecutionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListNotebookExecutionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListNotebookExecutionsCommandOutput> {
    return de_ListNotebookExecutionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
