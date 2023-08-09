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

import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { DescribeEnvironmentHealthRequest, DescribeEnvironmentHealthResult } from "../models/models_0";
import { de_DescribeEnvironmentHealthCommand, se_DescribeEnvironmentHealthCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeEnvironmentHealthCommand}.
 */
export interface DescribeEnvironmentHealthCommandInput extends DescribeEnvironmentHealthRequest {}
/**
 * @public
 *
 * The output of {@link DescribeEnvironmentHealthCommand}.
 */
export interface DescribeEnvironmentHealthCommandOutput extends DescribeEnvironmentHealthResult, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about the overall health of the specified environment. The
 *         <b>DescribeEnvironmentHealth</b> operation is only available with
 *       AWS Elastic Beanstalk Enhanced Health.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, DescribeEnvironmentHealthCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, DescribeEnvironmentHealthCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const input = { // DescribeEnvironmentHealthRequest
 *   EnvironmentName: "STRING_VALUE",
 *   EnvironmentId: "STRING_VALUE",
 *   AttributeNames: [ // EnvironmentHealthAttributes
 *     "Status" || "Color" || "Causes" || "ApplicationMetrics" || "InstancesHealth" || "All" || "HealthStatus" || "RefreshedAt",
 *   ],
 * };
 * const command = new DescribeEnvironmentHealthCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEnvironmentHealthResult
 * //   EnvironmentName: "STRING_VALUE",
 * //   HealthStatus: "STRING_VALUE",
 * //   Status: "Green" || "Yellow" || "Red" || "Grey",
 * //   Color: "STRING_VALUE",
 * //   Causes: [ // Causes
 * //     "STRING_VALUE",
 * //   ],
 * //   ApplicationMetrics: { // ApplicationMetrics
 * //     Duration: Number("int"),
 * //     RequestCount: Number("int"),
 * //     StatusCodes: { // StatusCodes
 * //       Status2xx: Number("int"),
 * //       Status3xx: Number("int"),
 * //       Status4xx: Number("int"),
 * //       Status5xx: Number("int"),
 * //     },
 * //     Latency: { // Latency
 * //       P999: Number("double"),
 * //       P99: Number("double"),
 * //       P95: Number("double"),
 * //       P90: Number("double"),
 * //       P85: Number("double"),
 * //       P75: Number("double"),
 * //       P50: Number("double"),
 * //       P10: Number("double"),
 * //     },
 * //   },
 * //   InstancesHealth: { // InstanceHealthSummary
 * //     NoData: Number("int"),
 * //     Unknown: Number("int"),
 * //     Pending: Number("int"),
 * //     Ok: Number("int"),
 * //     Info: Number("int"),
 * //     Warning: Number("int"),
 * //     Degraded: Number("int"),
 * //     Severe: Number("int"),
 * //   },
 * //   RefreshedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeEnvironmentHealthCommandInput - {@link DescribeEnvironmentHealthCommandInput}
 * @returns {@link DescribeEnvironmentHealthCommandOutput}
 * @see {@link DescribeEnvironmentHealthCommandInput} for command's `input` shape.
 * @see {@link DescribeEnvironmentHealthCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 * @throws {@link ElasticBeanstalkServiceException} (client fault)
 *  <p>A generic service exception has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>One or more input parameters is not valid. Please correct the input parameters and try
 *       the operation again.</p>
 *
 * @throws {@link ElasticBeanstalkServiceException}
 * <p>Base exception class for all service exceptions from ElasticBeanstalk service.</p>
 *
 * @example To view environment health
 * ```javascript
 * // The following operation retrieves overall health information for an environment named my-env:
 * const input = {
 *   "AttributeNames": [
 *     "All"
 *   ],
 *   "EnvironmentName": "my-env"
 * };
 * const command = new DescribeEnvironmentHealthCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ApplicationMetrics": {
 *     "Duration": 10,
 *     "Latency": {
 *       "P10": 0.001,
 *       "P50": 0.001,
 *       "P75": 0.002,
 *       "P85": 0.003,
 *       "P90": 0.003,
 *       "P95": 0.004,
 *       "P99": 0.004,
 *       "P999": 0.004
 *     },
 *     "RequestCount": 45,
 *     "StatusCodes": {
 *       "Status2xx": 45,
 *       "Status3xx": 0,
 *       "Status4xx": 0,
 *       "Status5xx": 0
 *     }
 *   },
 *   "Causes": [],
 *   "Color": "Green",
 *   "EnvironmentName": "my-env",
 *   "HealthStatus": "Ok",
 *   "InstancesHealth": {
 *     "Degraded": 0,
 *     "Info": 0,
 *     "NoData": 0,
 *     "Ok": 1,
 *     "Pending": 0,
 *     "Severe": 0,
 *     "Unknown": 0,
 *     "Warning": 0
 *   },
 *   "RefreshedAt": "2015-08-20T21:09:18Z"
 * }
 * *\/
 * // example id: to-view-environment-health-1456277109510
 * ```
 *
 */
export class DescribeEnvironmentHealthCommand extends $Command<
  DescribeEnvironmentHealthCommandInput,
  DescribeEnvironmentHealthCommandOutput,
  ElasticBeanstalkClientResolvedConfig
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
  constructor(readonly input: DescribeEnvironmentHealthCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticBeanstalkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeEnvironmentHealthCommandInput, DescribeEnvironmentHealthCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeEnvironmentHealthCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticBeanstalkClient";
    const commandName = "DescribeEnvironmentHealthCommand";
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
  private serialize(input: DescribeEnvironmentHealthCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeEnvironmentHealthCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeEnvironmentHealthCommandOutput> {
    return de_DescribeEnvironmentHealthCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
