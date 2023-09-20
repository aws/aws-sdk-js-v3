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

import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetContainerServiceMetricDataRequest, GetContainerServiceMetricDataResult } from "../models/models_0";
import {
  de_GetContainerServiceMetricDataCommand,
  se_GetContainerServiceMetricDataCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetContainerServiceMetricDataCommand}.
 */
export interface GetContainerServiceMetricDataCommandInput extends GetContainerServiceMetricDataRequest {}
/**
 * @public
 *
 * The output of {@link GetContainerServiceMetricDataCommand}.
 */
export interface GetContainerServiceMetricDataCommandOutput
  extends GetContainerServiceMetricDataResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns the data points of a specific metric of your Amazon Lightsail container
 *       service.</p>
 *          <p>Metrics report the utilization of your resources. Monitor and collect metric data
 *       regularly to maintain the reliability, availability, and performance of your resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetContainerServiceMetricDataCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetContainerServiceMetricDataCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const input = { // GetContainerServiceMetricDataRequest
 *   serviceName: "STRING_VALUE", // required
 *   metricName: "CPUUtilization" || "MemoryUtilization", // required
 *   startTime: new Date("TIMESTAMP"), // required
 *   endTime: new Date("TIMESTAMP"), // required
 *   period: Number("int"), // required
 *   statistics: [ // MetricStatisticList // required
 *     "Minimum" || "Maximum" || "Sum" || "Average" || "SampleCount",
 *   ],
 * };
 * const command = new GetContainerServiceMetricDataCommand(input);
 * const response = await client.send(command);
 * // { // GetContainerServiceMetricDataResult
 * //   metricName: "CPUUtilization" || "MemoryUtilization",
 * //   metricData: [ // MetricDatapointList
 * //     { // MetricDatapoint
 * //       average: Number("double"),
 * //       maximum: Number("double"),
 * //       minimum: Number("double"),
 * //       sampleCount: Number("double"),
 * //       sum: Number("double"),
 * //       timestamp: new Date("TIMESTAMP"),
 * //       unit: "Seconds" || "Microseconds" || "Milliseconds" || "Bytes" || "Kilobytes" || "Megabytes" || "Gigabytes" || "Terabytes" || "Bits" || "Kilobits" || "Megabits" || "Gigabits" || "Terabits" || "Percent" || "Count" || "Bytes/Second" || "Kilobytes/Second" || "Megabytes/Second" || "Gigabytes/Second" || "Terabytes/Second" || "Bits/Second" || "Kilobits/Second" || "Megabits/Second" || "Gigabits/Second" || "Terabits/Second" || "Count/Second" || "None",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetContainerServiceMetricDataCommandInput - {@link GetContainerServiceMetricDataCommandInput}
 * @returns {@link GetContainerServiceMetricDataCommandOutput}
 * @see {@link GetContainerServiceMetricDataCommandInput} for command's `input` shape.
 * @see {@link GetContainerServiceMetricDataCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid
 *       credentials to access a resource.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Lightsail throws this exception when user input does not conform to the validation rules
 *       of an input field.</p>
 *          <note>
 *             <p>Domain and distribution APIs are only available in the N. Virginia
 *           (<code>us-east-1</code>) Amazon Web Services Region. Please set your Amazon Web Services
 *         Region configuration to <code>us-east-1</code> to create, view, or edit these
 *         resources.</p>
 *          </note>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Lightsail throws this exception when it cannot find a resource.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>A general service exception.</p>
 *
 * @throws {@link UnauthenticatedException} (client fault)
 *  <p>Lightsail throws this exception when the user has not been authenticated.</p>
 *
 * @throws {@link LightsailServiceException}
 * <p>Base exception class for all service exceptions from Lightsail service.</p>
 *
 */
export class GetContainerServiceMetricDataCommand extends $Command<
  GetContainerServiceMetricDataCommandInput,
  GetContainerServiceMetricDataCommandOutput,
  LightsailClientResolvedConfig
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
  constructor(readonly input: GetContainerServiceMetricDataCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetContainerServiceMetricDataCommandInput, GetContainerServiceMetricDataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetContainerServiceMetricDataCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "GetContainerServiceMetricDataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Lightsail_20161128",
        operation: "GetContainerServiceMetricData",
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
  private serialize(input: GetContainerServiceMetricDataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetContainerServiceMetricDataCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetContainerServiceMetricDataCommandOutput> {
    return de_GetContainerServiceMetricDataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
