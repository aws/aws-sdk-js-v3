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
import { GetColumnStatisticsTaskRunsRequest, GetColumnStatisticsTaskRunsResponse } from "../models/models_1";
import { de_GetColumnStatisticsTaskRunsCommand, se_GetColumnStatisticsTaskRunsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetColumnStatisticsTaskRunsCommand}.
 */
export interface GetColumnStatisticsTaskRunsCommandInput extends GetColumnStatisticsTaskRunsRequest {}
/**
 * @public
 *
 * The output of {@link GetColumnStatisticsTaskRunsCommand}.
 */
export interface GetColumnStatisticsTaskRunsCommandOutput
  extends GetColumnStatisticsTaskRunsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieves information about all runs associated with the specified table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetColumnStatisticsTaskRunsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetColumnStatisticsTaskRunsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // GetColumnStatisticsTaskRunsRequest
 *   DatabaseName: "STRING_VALUE", // required
 *   TableName: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetColumnStatisticsTaskRunsCommand(input);
 * const response = await client.send(command);
 * // { // GetColumnStatisticsTaskRunsResponse
 * //   ColumnStatisticsTaskRuns: [ // ColumnStatisticsTaskRunsList
 * //     { // ColumnStatisticsTaskRun
 * //       CustomerId: "STRING_VALUE",
 * //       ColumnStatisticsTaskRunId: "STRING_VALUE",
 * //       DatabaseName: "STRING_VALUE",
 * //       TableName: "STRING_VALUE",
 * //       ColumnNameList: [ // ColumnNameList
 * //         "STRING_VALUE",
 * //       ],
 * //       CatalogID: "STRING_VALUE",
 * //       Role: "STRING_VALUE",
 * //       SampleSize: Number("double"),
 * //       SecurityConfiguration: "STRING_VALUE",
 * //       NumberOfWorkers: Number("int"),
 * //       WorkerType: "STRING_VALUE",
 * //       Status: "STARTING" || "RUNNING" || "SUCCEEDED" || "FAILED" || "STOPPED",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       LastUpdated: new Date("TIMESTAMP"),
 * //       StartTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //       ErrorMessage: "STRING_VALUE",
 * //       DPUSeconds: Number("double"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetColumnStatisticsTaskRunsCommandInput - {@link GetColumnStatisticsTaskRunsCommandInput}
 * @returns {@link GetColumnStatisticsTaskRunsCommandOutput}
 * @see {@link GetColumnStatisticsTaskRunsCommandInput} for command's `input` shape.
 * @see {@link GetColumnStatisticsTaskRunsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 */
export class GetColumnStatisticsTaskRunsCommand extends $Command<
  GetColumnStatisticsTaskRunsCommandInput,
  GetColumnStatisticsTaskRunsCommandOutput,
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
  constructor(readonly input: GetColumnStatisticsTaskRunsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetColumnStatisticsTaskRunsCommandInput, GetColumnStatisticsTaskRunsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetColumnStatisticsTaskRunsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetColumnStatisticsTaskRunsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSGlue",
        operation: "GetColumnStatisticsTaskRuns",
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
  private serialize(input: GetColumnStatisticsTaskRunsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetColumnStatisticsTaskRunsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetColumnStatisticsTaskRunsCommandOutput> {
    return de_GetColumnStatisticsTaskRunsCommand(output, context);
  }
}
