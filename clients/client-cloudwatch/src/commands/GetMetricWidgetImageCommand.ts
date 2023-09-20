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

import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { GetMetricWidgetImageInput, GetMetricWidgetImageOutput } from "../models/models_0";
import { de_GetMetricWidgetImageCommand, se_GetMetricWidgetImageCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetMetricWidgetImageCommand}.
 */
export interface GetMetricWidgetImageCommandInput extends GetMetricWidgetImageInput {}
/**
 * @public
 *
 * The output of {@link GetMetricWidgetImageCommand}.
 */
export interface GetMetricWidgetImageCommandOutput extends GetMetricWidgetImageOutput, __MetadataBearer {}

/**
 * @public
 * <p>You can use the <code>GetMetricWidgetImage</code> API to retrieve a snapshot graph of
 * 			one or more Amazon CloudWatch metrics as a bitmap image. You can then embed this
 * 			image into your services and products, such as wiki pages, reports, and documents.
 * 			You could also retrieve images regularly, such as every minute, and create your own
 * 			custom live dashboard.</p>
 *          <p>The graph you retrieve can include all CloudWatch metric graph features, including metric math
 * 		and horizontal and vertical annotations.</p>
 *          <p>There is a limit of 20 transactions per second for this API. Each <code>GetMetricWidgetImage</code> action has the following limits:</p>
 *          <ul>
 *             <li>
 *                <p>As many as 100 metrics in the graph.</p>
 *             </li>
 *             <li>
 *                <p>Up to 100 KB uncompressed payload.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, GetMetricWidgetImageCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, GetMetricWidgetImageCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const input = { // GetMetricWidgetImageInput
 *   MetricWidget: "STRING_VALUE", // required
 *   OutputFormat: "STRING_VALUE",
 * };
 * const command = new GetMetricWidgetImageCommand(input);
 * const response = await client.send(command);
 * // { // GetMetricWidgetImageOutput
 * //   MetricWidgetImage: "BLOB_VALUE",
 * // };
 *
 * ```
 *
 * @param GetMetricWidgetImageCommandInput - {@link GetMetricWidgetImageCommandInput}
 * @returns {@link GetMetricWidgetImageCommandOutput}
 * @see {@link GetMetricWidgetImageCommandInput} for command's `input` shape.
 * @see {@link GetMetricWidgetImageCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 * @throws {@link CloudWatchServiceException}
 * <p>Base exception class for all service exceptions from CloudWatch service.</p>
 *
 */
export class GetMetricWidgetImageCommand extends $Command<
  GetMetricWidgetImageCommandInput,
  GetMetricWidgetImageCommandOutput,
  CloudWatchClientResolvedConfig
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

  /**
   * @public
   */
  constructor(readonly input: GetMetricWidgetImageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetMetricWidgetImageCommandInput, GetMetricWidgetImageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetMetricWidgetImageCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchClient";
    const commandName = "GetMetricWidgetImageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "GraniteServiceVersion20100801",
        operation: "GetMetricWidgetImage",
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
  private serialize(input: GetMetricWidgetImageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetMetricWidgetImageCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetMetricWidgetImageCommandOutput> {
    return de_GetMetricWidgetImageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
