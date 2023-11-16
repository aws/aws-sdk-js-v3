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
import { StopColumnStatisticsTaskRunRequest, StopColumnStatisticsTaskRunResponse } from "../models/models_2";
import { de_StopColumnStatisticsTaskRunCommand, se_StopColumnStatisticsTaskRunCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StopColumnStatisticsTaskRunCommand}.
 */
export interface StopColumnStatisticsTaskRunCommandInput extends StopColumnStatisticsTaskRunRequest {}
/**
 * @public
 *
 * The output of {@link StopColumnStatisticsTaskRunCommand}.
 */
export interface StopColumnStatisticsTaskRunCommandOutput
  extends StopColumnStatisticsTaskRunResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Stops a task run for the specified table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, StopColumnStatisticsTaskRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, StopColumnStatisticsTaskRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // StopColumnStatisticsTaskRunRequest
 *   DatabaseName: "STRING_VALUE", // required
 *   TableName: "STRING_VALUE", // required
 * };
 * const command = new StopColumnStatisticsTaskRunCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopColumnStatisticsTaskRunCommandInput - {@link StopColumnStatisticsTaskRunCommandInput}
 * @returns {@link StopColumnStatisticsTaskRunCommandOutput}
 * @see {@link StopColumnStatisticsTaskRunCommandInput} for command's `input` shape.
 * @see {@link StopColumnStatisticsTaskRunCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link ColumnStatisticsTaskNotRunningException} (client fault)
 *  <p>An exception thrown when you try to stop a task run when there is no task running.</p>
 *
 * @throws {@link ColumnStatisticsTaskStoppingException} (client fault)
 *  <p>An exception thrown when you try to stop a task run.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 */
export class StopColumnStatisticsTaskRunCommand extends $Command<
  StopColumnStatisticsTaskRunCommandInput,
  StopColumnStatisticsTaskRunCommandOutput,
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
  constructor(readonly input: StopColumnStatisticsTaskRunCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopColumnStatisticsTaskRunCommandInput, StopColumnStatisticsTaskRunCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StopColumnStatisticsTaskRunCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "StopColumnStatisticsTaskRunCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSGlue",
        operation: "StopColumnStatisticsTaskRun",
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
  private serialize(input: StopColumnStatisticsTaskRunCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StopColumnStatisticsTaskRunCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StopColumnStatisticsTaskRunCommandOutput> {
    return de_StopColumnStatisticsTaskRunCommand(output, context);
  }
}
