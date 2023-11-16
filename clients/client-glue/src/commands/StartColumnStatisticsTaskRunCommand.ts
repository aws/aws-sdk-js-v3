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
import { StartColumnStatisticsTaskRunRequest, StartColumnStatisticsTaskRunResponse } from "../models/models_2";
import {
  de_StartColumnStatisticsTaskRunCommand,
  se_StartColumnStatisticsTaskRunCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartColumnStatisticsTaskRunCommand}.
 */
export interface StartColumnStatisticsTaskRunCommandInput extends StartColumnStatisticsTaskRunRequest {}
/**
 * @public
 *
 * The output of {@link StartColumnStatisticsTaskRunCommand}.
 */
export interface StartColumnStatisticsTaskRunCommandOutput
  extends StartColumnStatisticsTaskRunResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Starts a column statistics task run, for a specified table and columns.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, StartColumnStatisticsTaskRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, StartColumnStatisticsTaskRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // StartColumnStatisticsTaskRunRequest
 *   DatabaseName: "STRING_VALUE", // required
 *   TableName: "STRING_VALUE", // required
 *   ColumnNameList: [ // ColumnNameList
 *     "STRING_VALUE",
 *   ],
 *   Role: "STRING_VALUE", // required
 *   SampleSize: Number("double"),
 *   CatalogID: "STRING_VALUE",
 *   SecurityConfiguration: "STRING_VALUE",
 * };
 * const command = new StartColumnStatisticsTaskRunCommand(input);
 * const response = await client.send(command);
 * // { // StartColumnStatisticsTaskRunResponse
 * //   ColumnStatisticsTaskRunId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartColumnStatisticsTaskRunCommandInput - {@link StartColumnStatisticsTaskRunCommandInput}
 * @returns {@link StartColumnStatisticsTaskRunCommandOutput}
 * @see {@link StartColumnStatisticsTaskRunCommandInput} for command's `input` shape.
 * @see {@link StartColumnStatisticsTaskRunCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link ColumnStatisticsTaskRunningException} (client fault)
 *  <p>An exception thrown when you try to start another job while running a column stats generation job.</p>
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
 * @throws {@link ResourceNumberLimitExceededException} (client fault)
 *  <p>A resource numerical limit was exceeded.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 */
export class StartColumnStatisticsTaskRunCommand extends $Command<
  StartColumnStatisticsTaskRunCommandInput,
  StartColumnStatisticsTaskRunCommandOutput,
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
  constructor(readonly input: StartColumnStatisticsTaskRunCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartColumnStatisticsTaskRunCommandInput, StartColumnStatisticsTaskRunCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartColumnStatisticsTaskRunCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "StartColumnStatisticsTaskRunCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSGlue",
        operation: "StartColumnStatisticsTaskRun",
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
  private serialize(input: StartColumnStatisticsTaskRunCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartColumnStatisticsTaskRunCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartColumnStatisticsTaskRunCommandOutput> {
    return de_StartColumnStatisticsTaskRunCommand(output, context);
  }
}
