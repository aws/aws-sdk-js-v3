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
import { GetCrawlerMetricsRequest, GetCrawlerMetricsResponse } from "../models/models_1";
import { de_GetCrawlerMetricsCommand, se_GetCrawlerMetricsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetCrawlerMetricsCommand}.
 */
export interface GetCrawlerMetricsCommandInput extends GetCrawlerMetricsRequest {}
/**
 * @public
 *
 * The output of {@link GetCrawlerMetricsCommand}.
 */
export interface GetCrawlerMetricsCommandOutput extends GetCrawlerMetricsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves metrics about specified crawlers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetCrawlerMetricsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetCrawlerMetricsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // GetCrawlerMetricsRequest
 *   CrawlerNameList: [ // CrawlerNameList
 *     "STRING_VALUE",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetCrawlerMetricsCommand(input);
 * const response = await client.send(command);
 * // { // GetCrawlerMetricsResponse
 * //   CrawlerMetricsList: [ // CrawlerMetricsList
 * //     { // CrawlerMetrics
 * //       CrawlerName: "STRING_VALUE",
 * //       TimeLeftSeconds: Number("double"),
 * //       StillEstimating: true || false,
 * //       LastRuntimeSeconds: Number("double"),
 * //       MedianRuntimeSeconds: Number("double"),
 * //       TablesCreated: Number("int"),
 * //       TablesUpdated: Number("int"),
 * //       TablesDeleted: Number("int"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetCrawlerMetricsCommandInput - {@link GetCrawlerMetricsCommandInput}
 * @returns {@link GetCrawlerMetricsCommandOutput}
 * @see {@link GetCrawlerMetricsCommandInput} for command's `input` shape.
 * @see {@link GetCrawlerMetricsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 */
export class GetCrawlerMetricsCommand extends $Command<
  GetCrawlerMetricsCommandInput,
  GetCrawlerMetricsCommandOutput,
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
  constructor(readonly input: GetCrawlerMetricsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCrawlerMetricsCommandInput, GetCrawlerMetricsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetCrawlerMetricsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetCrawlerMetricsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSGlue",
        operation: "GetCrawlerMetrics",
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
  private serialize(input: GetCrawlerMetricsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetCrawlerMetricsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCrawlerMetricsCommandOutput> {
    return de_GetCrawlerMetricsCommand(output, context);
  }
}
