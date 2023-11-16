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
import { ListColumnStatisticsTaskRunsRequest, ListColumnStatisticsTaskRunsResponse } from "../models/models_2";
import {
  de_ListColumnStatisticsTaskRunsCommand,
  se_ListColumnStatisticsTaskRunsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListColumnStatisticsTaskRunsCommand}.
 */
export interface ListColumnStatisticsTaskRunsCommandInput extends ListColumnStatisticsTaskRunsRequest {}
/**
 * @public
 *
 * The output of {@link ListColumnStatisticsTaskRunsCommand}.
 */
export interface ListColumnStatisticsTaskRunsCommandOutput
  extends ListColumnStatisticsTaskRunsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>List all task runs for a particular account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ListColumnStatisticsTaskRunsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, ListColumnStatisticsTaskRunsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // ListColumnStatisticsTaskRunsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListColumnStatisticsTaskRunsCommand(input);
 * const response = await client.send(command);
 * // { // ListColumnStatisticsTaskRunsResponse
 * //   ColumnStatisticsTaskRunIds: [ // ColumnStatisticsTaskRunIdList
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListColumnStatisticsTaskRunsCommandInput - {@link ListColumnStatisticsTaskRunsCommandInput}
 * @returns {@link ListColumnStatisticsTaskRunsCommandOutput}
 * @see {@link ListColumnStatisticsTaskRunsCommandInput} for command's `input` shape.
 * @see {@link ListColumnStatisticsTaskRunsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 */
export class ListColumnStatisticsTaskRunsCommand extends $Command<
  ListColumnStatisticsTaskRunsCommandInput,
  ListColumnStatisticsTaskRunsCommandOutput,
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
  constructor(readonly input: ListColumnStatisticsTaskRunsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListColumnStatisticsTaskRunsCommandInput, ListColumnStatisticsTaskRunsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListColumnStatisticsTaskRunsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "ListColumnStatisticsTaskRunsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSGlue",
        operation: "ListColumnStatisticsTaskRuns",
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
  private serialize(input: ListColumnStatisticsTaskRunsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListColumnStatisticsTaskRunsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListColumnStatisticsTaskRunsCommandOutput> {
    return de_ListColumnStatisticsTaskRunsCommand(output, context);
  }
}
