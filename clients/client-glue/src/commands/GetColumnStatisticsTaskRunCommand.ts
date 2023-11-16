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

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetColumnStatisticsTaskRunRequest, GetColumnStatisticsTaskRunResponse } from "../models/models_1";
import { de_GetColumnStatisticsTaskRunCommand, se_GetColumnStatisticsTaskRunCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetColumnStatisticsTaskRunCommand}.
 */
export interface GetColumnStatisticsTaskRunCommandInput extends GetColumnStatisticsTaskRunRequest {}
/**
 * @public
 *
 * The output of {@link GetColumnStatisticsTaskRunCommand}.
 */
export interface GetColumnStatisticsTaskRunCommandOutput extends GetColumnStatisticsTaskRunResponse, __MetadataBearer {}

/**
 * @public
 * <p>Get the associated metadata/information for a task run, given a task run ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetColumnStatisticsTaskRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetColumnStatisticsTaskRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // GetColumnStatisticsTaskRunRequest
 *   ColumnStatisticsTaskRunId: "STRING_VALUE", // required
 * };
 * const command = new GetColumnStatisticsTaskRunCommand(input);
 * const response = await client.send(command);
 * // { // GetColumnStatisticsTaskRunResponse
 * //   ColumnStatisticsTaskRun: { // ColumnStatisticsTaskRun
 * //     CustomerId: "STRING_VALUE",
 * //     ColumnStatisticsTaskRunId: "STRING_VALUE",
 * //     DatabaseName: "STRING_VALUE",
 * //     TableName: "STRING_VALUE",
 * //     ColumnNameList: [ // ColumnNameList
 * //       "STRING_VALUE",
 * //     ],
 * //     CatalogID: "STRING_VALUE",
 * //     Role: "STRING_VALUE",
 * //     SampleSize: Number("double"),
 * //     SecurityConfiguration: "STRING_VALUE",
 * //     NumberOfWorkers: Number("int"),
 * //     WorkerType: "STRING_VALUE",
 * //     Status: "STARTING" || "RUNNING" || "SUCCEEDED" || "FAILED" || "STOPPED",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     LastUpdated: new Date("TIMESTAMP"),
 * //     StartTime: new Date("TIMESTAMP"),
 * //     EndTime: new Date("TIMESTAMP"),
 * //     ErrorMessage: "STRING_VALUE",
 * //     DPUSeconds: Number("double"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetColumnStatisticsTaskRunCommandInput - {@link GetColumnStatisticsTaskRunCommandInput}
 * @returns {@link GetColumnStatisticsTaskRunCommandOutput}
 * @see {@link GetColumnStatisticsTaskRunCommandInput} for command's `input` shape.
 * @see {@link GetColumnStatisticsTaskRunCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
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
export class GetColumnStatisticsTaskRunCommand extends $Command<
  GetColumnStatisticsTaskRunCommandInput,
  GetColumnStatisticsTaskRunCommandOutput,
  GlueClientResolvedConfig
> {
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
  constructor(readonly input: GetColumnStatisticsTaskRunCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetColumnStatisticsTaskRunCommandInput, GetColumnStatisticsTaskRunCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetColumnStatisticsTaskRunCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetColumnStatisticsTaskRunCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSGlue",
        operation: "GetColumnStatisticsTaskRun",
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
  private serialize(input: GetColumnStatisticsTaskRunCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetColumnStatisticsTaskRunCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetColumnStatisticsTaskRunCommandOutput> {
    return de_GetColumnStatisticsTaskRunCommand(output, context);
  }
}
