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
import { ListTableOptimizerRunsRequest, ListTableOptimizerRunsResponse } from "../models/models_2";
import { de_ListTableOptimizerRunsCommand, se_ListTableOptimizerRunsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListTableOptimizerRunsCommand}.
 */
export interface ListTableOptimizerRunsCommandInput extends ListTableOptimizerRunsRequest {}
/**
 * @public
 *
 * The output of {@link ListTableOptimizerRunsCommand}.
 */
export interface ListTableOptimizerRunsCommandOutput extends ListTableOptimizerRunsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the history of previous optimizer runs for a specific table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ListTableOptimizerRunsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, ListTableOptimizerRunsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // ListTableOptimizerRunsRequest
 *   CatalogId: "STRING_VALUE", // required
 *   DatabaseName: "STRING_VALUE", // required
 *   TableName: "STRING_VALUE", // required
 *   Type: "compaction", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListTableOptimizerRunsCommand(input);
 * const response = await client.send(command);
 * // { // ListTableOptimizerRunsResponse
 * //   CatalogId: "STRING_VALUE",
 * //   DatabaseName: "STRING_VALUE",
 * //   TableName: "STRING_VALUE",
 * //   NextToken: "STRING_VALUE",
 * //   TableOptimizerRuns: [ // TableOptimizerRuns
 * //     { // TableOptimizerRun
 * //       eventType: "starting" || "completed" || "failed" || "in_progress",
 * //       startTimestamp: new Date("TIMESTAMP"),
 * //       endTimestamp: new Date("TIMESTAMP"),
 * //       metrics: { // RunMetrics
 * //         NumberOfBytesCompacted: "STRING_VALUE",
 * //         NumberOfFilesCompacted: "STRING_VALUE",
 * //         NumberOfDpus: "STRING_VALUE",
 * //         JobDurationInHour: "STRING_VALUE",
 * //       },
 * //       error: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListTableOptimizerRunsCommandInput - {@link ListTableOptimizerRunsCommandInput}
 * @returns {@link ListTableOptimizerRunsCommandOutput}
 * @see {@link ListTableOptimizerRunsCommandInput} for command's `input` shape.
 * @see {@link ListTableOptimizerRunsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 */
export class ListTableOptimizerRunsCommand extends $Command<
  ListTableOptimizerRunsCommandInput,
  ListTableOptimizerRunsCommandOutput,
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
  constructor(readonly input: ListTableOptimizerRunsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTableOptimizerRunsCommandInput, ListTableOptimizerRunsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListTableOptimizerRunsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "ListTableOptimizerRunsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSGlue",
        operation: "ListTableOptimizerRuns",
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
  private serialize(input: ListTableOptimizerRunsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListTableOptimizerRunsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTableOptimizerRunsCommandOutput> {
    return de_ListTableOptimizerRunsCommand(output, context);
  }
}
