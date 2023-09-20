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

import { PublishMetricsInput, PublishMetricsOutput } from "../models/models_0";
import { MWAAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MWAAClient";
import { de_PublishMetricsCommand, se_PublishMetricsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PublishMetricsCommand}.
 */
export interface PublishMetricsCommandInput extends PublishMetricsInput {}
/**
 * @public
 *
 * The output of {@link PublishMetricsCommand}.
 */
export interface PublishMetricsCommandOutput extends PublishMetricsOutput, __MetadataBearer {}

/**
 * @public
 * <p>
 *             <b>Internal only</b>. Publishes environment health metrics to Amazon CloudWatch.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MWAAClient, PublishMetricsCommand } from "@aws-sdk/client-mwaa"; // ES Modules import
 * // const { MWAAClient, PublishMetricsCommand } = require("@aws-sdk/client-mwaa"); // CommonJS import
 * const client = new MWAAClient(config);
 * const input = { // PublishMetricsInput
 *   EnvironmentName: "STRING_VALUE", // required
 *   MetricData: [ // MetricData // required
 *     { // MetricDatum
 *       MetricName: "STRING_VALUE", // required
 *       Timestamp: new Date("TIMESTAMP"), // required
 *       Dimensions: [ // Dimensions
 *         { // Dimension
 *           Name: "STRING_VALUE", // required
 *           Value: "STRING_VALUE", // required
 *         },
 *       ],
 *       Value: Number("double"),
 *       Unit: "STRING_VALUE",
 *       StatisticValues: { // StatisticSet
 *         SampleCount: Number("int"),
 *         Sum: Number("double"),
 *         Minimum: Number("double"),
 *         Maximum: Number("double"),
 *       },
 *     },
 *   ],
 * };
 * const command = new PublishMetricsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PublishMetricsCommandInput - {@link PublishMetricsCommandInput}
 * @returns {@link PublishMetricsCommandOutput}
 * @see {@link PublishMetricsCommandInput} for command's `input` shape.
 * @see {@link PublishMetricsCommandOutput} for command's `response` shape.
 * @see {@link MWAAClientResolvedConfig | config} for MWAAClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>InternalServerException: An internal error has occurred.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>ValidationException: The provided input is not valid.</p>
 *
 * @throws {@link MWAAServiceException}
 * <p>Base exception class for all service exceptions from MWAA service.</p>
 *
 */
export class PublishMetricsCommand extends $Command<
  PublishMetricsCommandInput,
  PublishMetricsCommandOutput,
  MWAAClientResolvedConfig
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
  constructor(readonly input: PublishMetricsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MWAAClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PublishMetricsCommandInput, PublishMetricsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PublishMetricsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MWAAClient";
    const commandName = "PublishMetricsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonMWAA",
        operation: "PublishMetrics",
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
  private serialize(input: PublishMetricsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PublishMetricsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PublishMetricsCommandOutput> {
    return de_PublishMetricsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
