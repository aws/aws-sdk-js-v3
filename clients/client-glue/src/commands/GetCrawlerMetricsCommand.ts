// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import {
  GetCrawlerMetricsRequest,
  GetCrawlerMetricsRequestFilterSensitiveLog,
  GetCrawlerMetricsResponse,
  GetCrawlerMetricsResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1GetCrawlerMetricsCommand,
  serializeAws_json1_1GetCrawlerMetricsCommand,
} from "../protocols/Aws_json1_1";

export interface GetCrawlerMetricsCommandInput extends GetCrawlerMetricsRequest {}
export interface GetCrawlerMetricsCommandOutput extends GetCrawlerMetricsResponse, __MetadataBearer {}

/**
 * <p>Retrieves metrics about specified crawlers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetCrawlerMetricsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetCrawlerMetricsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetCrawlerMetricsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCrawlerMetricsCommandInput} for command's `input` shape.
 * @see {@link GetCrawlerMetricsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 */
export class GetCrawlerMetricsCommand extends $Command<
  GetCrawlerMetricsCommandInput,
  GetCrawlerMetricsCommandOutput,
  GlueClientResolvedConfig
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

  constructor(readonly input: GetCrawlerMetricsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
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
      inputFilterSensitiveLog: GetCrawlerMetricsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetCrawlerMetricsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetCrawlerMetricsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetCrawlerMetricsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCrawlerMetricsCommandOutput> {
    return deserializeAws_json1_1GetCrawlerMetricsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
