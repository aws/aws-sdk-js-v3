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
} from "@smithy/types";

import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DescribeCustomMetricRequest, DescribeCustomMetricResponse } from "../models/models_1";
import { de_DescribeCustomMetricCommand, se_DescribeCustomMetricCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeCustomMetricCommand}.
 */
export interface DescribeCustomMetricCommandInput extends DescribeCustomMetricRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCustomMetricCommand}.
 */
export interface DescribeCustomMetricCommandOutput extends DescribeCustomMetricResponse, __MetadataBearer {}

/**
 * @public
 * <p>
 *       Gets information about a Device Defender detect custom metric.
 *     </p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeCustomMetric</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeCustomMetricCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeCustomMetricCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // DescribeCustomMetricRequest
 *   metricName: "STRING_VALUE", // required
 * };
 * const command = new DescribeCustomMetricCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCustomMetricResponse
 * //   metricName: "STRING_VALUE",
 * //   metricArn: "STRING_VALUE",
 * //   metricType: "string-list" || "ip-address-list" || "number-list" || "number",
 * //   displayName: "STRING_VALUE",
 * //   creationDate: new Date("TIMESTAMP"),
 * //   lastModifiedDate: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeCustomMetricCommandInput - {@link DescribeCustomMetricCommandInput}
 * @returns {@link DescribeCustomMetricCommandOutput}
 * @see {@link DescribeCustomMetricCommandInput} for command's `input` shape.
 * @see {@link DescribeCustomMetricCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 */
export class DescribeCustomMetricCommand extends $Command<
  DescribeCustomMetricCommandInput,
  DescribeCustomMetricCommandOutput,
  IoTClientResolvedConfig
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
  constructor(readonly input: DescribeCustomMetricCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeCustomMetricCommandInput, DescribeCustomMetricCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeCustomMetricCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "DescribeCustomMetricCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: DescribeCustomMetricCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeCustomMetricCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeCustomMetricCommandOutput> {
    return de_DescribeCustomMetricCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
