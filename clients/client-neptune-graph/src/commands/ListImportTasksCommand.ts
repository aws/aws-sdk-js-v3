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

import { ListImportTasksInput, ListImportTasksOutput } from "../models/models_0";
import { NeptuneGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneGraphClient";
import { de_ListImportTasksCommand, se_ListImportTasksCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListImportTasksCommand}.
 */
export interface ListImportTasksCommandInput extends ListImportTasksInput {}
/**
 * @public
 *
 * The output of {@link ListImportTasksCommand}.
 */
export interface ListImportTasksCommandOutput extends ListImportTasksOutput, __MetadataBearer {}

/**
 * @public
 * <p>Lists import tasks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneGraphClient, ListImportTasksCommand } from "@aws-sdk/client-neptune-graph"; // ES Modules import
 * // const { NeptuneGraphClient, ListImportTasksCommand } = require("@aws-sdk/client-neptune-graph"); // CommonJS import
 * const client = new NeptuneGraphClient(config);
 * const input = { // ListImportTasksInput
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListImportTasksCommand(input);
 * const response = await client.send(command);
 * // { // ListImportTasksOutput
 * //   tasks: [ // ImportTaskSummaryList // required
 * //     { // ImportTaskSummary
 * //       graphId: "STRING_VALUE",
 * //       taskId: "STRING_VALUE", // required
 * //       source: "STRING_VALUE", // required
 * //       format: "CSV" || "OPEN_CYPHER",
 * //       roleArn: "STRING_VALUE", // required
 * //       status: "INITIALIZING" || "EXPORTING" || "ANALYZING_DATA" || "IMPORTING" || "REPROVISIONING" || "ROLLING_BACK" || "SUCCEEDED" || "FAILED" || "CANCELLING" || "CANCELLED", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListImportTasksCommandInput - {@link ListImportTasksCommandInput}
 * @returns {@link ListImportTasksCommandOutput}
 * @see {@link ListImportTasksCommandInput} for command's `input` shape.
 * @see {@link ListImportTasksCommandOutput} for command's `response` shape.
 * @see {@link NeptuneGraphClientResolvedConfig | config} for NeptuneGraphClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>A failure occurred on the server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A specified resource could not be located.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The exception was interrupted by throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A resource could not be validated</p>
 *
 * @throws {@link NeptuneGraphServiceException}
 * <p>Base exception class for all service exceptions from NeptuneGraph service.</p>
 *
 */
export class ListImportTasksCommand extends $Command<
  ListImportTasksCommandInput,
  ListImportTasksCommandOutput,
  NeptuneGraphClientResolvedConfig
> {
  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      ApiType: { type: "staticContextParams", value: `ControlPlane` },
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: ListImportTasksCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NeptuneGraphClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListImportTasksCommandInput, ListImportTasksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListImportTasksCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NeptuneGraphClient";
    const commandName = "ListImportTasksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonNeptuneGraph",
        operation: "ListImportTasks",
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
  private serialize(input: ListImportTasksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListImportTasksCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListImportTasksCommandOutput> {
    return de_ListImportTasksCommand(output, context);
  }
}
