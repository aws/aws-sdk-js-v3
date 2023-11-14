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
import { BatchGetTableOptimizerRequest, BatchGetTableOptimizerResponse } from "../models/models_0";
import { de_BatchGetTableOptimizerCommand, se_BatchGetTableOptimizerCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchGetTableOptimizerCommand}.
 */
export interface BatchGetTableOptimizerCommandInput extends BatchGetTableOptimizerRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetTableOptimizerCommand}.
 */
export interface BatchGetTableOptimizerCommandOutput extends BatchGetTableOptimizerResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns the configuration for the specified table optimizers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, BatchGetTableOptimizerCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, BatchGetTableOptimizerCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // BatchGetTableOptimizerRequest
 *   Entries: [ // BatchGetTableOptimizerEntries // required
 *     { // BatchGetTableOptimizerEntry
 *       catalogId: "STRING_VALUE",
 *       databaseName: "STRING_VALUE",
 *       tableName: "STRING_VALUE",
 *       type: "compaction",
 *     },
 *   ],
 * };
 * const command = new BatchGetTableOptimizerCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetTableOptimizerResponse
 * //   TableOptimizers: [ // BatchTableOptimizers
 * //     { // BatchTableOptimizer
 * //       catalogId: "STRING_VALUE",
 * //       databaseName: "STRING_VALUE",
 * //       tableName: "STRING_VALUE",
 * //       tableOptimizer: { // TableOptimizer
 * //         type: "compaction",
 * //         configuration: { // TableOptimizerConfiguration
 * //           roleArn: "STRING_VALUE",
 * //           enabled: true || false,
 * //         },
 * //         lastRun: { // TableOptimizerRun
 * //           eventType: "starting" || "completed" || "failed" || "in_progress",
 * //           startTimestamp: new Date("TIMESTAMP"),
 * //           endTimestamp: new Date("TIMESTAMP"),
 * //           metrics: { // RunMetrics
 * //             NumberOfBytesCompacted: "STRING_VALUE",
 * //             NumberOfFilesCompacted: "STRING_VALUE",
 * //             NumberOfDpus: "STRING_VALUE",
 * //             JobDurationInHour: "STRING_VALUE",
 * //           },
 * //           error: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   Failures: [ // BatchGetTableOptimizerErrors
 * //     { // BatchGetTableOptimizerError
 * //       error: { // ErrorDetail
 * //         ErrorCode: "STRING_VALUE",
 * //         ErrorMessage: "STRING_VALUE",
 * //       },
 * //       catalogId: "STRING_VALUE",
 * //       databaseName: "STRING_VALUE",
 * //       tableName: "STRING_VALUE",
 * //       type: "compaction",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetTableOptimizerCommandInput - {@link BatchGetTableOptimizerCommandInput}
 * @returns {@link BatchGetTableOptimizerCommandOutput}
 * @see {@link BatchGetTableOptimizerCommandInput} for command's `input` shape.
 * @see {@link BatchGetTableOptimizerCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 */
export class BatchGetTableOptimizerCommand extends $Command<
  BatchGetTableOptimizerCommandInput,
  BatchGetTableOptimizerCommandOutput,
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
  constructor(readonly input: BatchGetTableOptimizerCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchGetTableOptimizerCommandInput, BatchGetTableOptimizerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchGetTableOptimizerCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "BatchGetTableOptimizerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSGlue",
        operation: "BatchGetTableOptimizer",
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
  private serialize(input: BatchGetTableOptimizerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchGetTableOptimizerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchGetTableOptimizerCommandOutput> {
    return de_BatchGetTableOptimizerCommand(output, context);
  }
}
