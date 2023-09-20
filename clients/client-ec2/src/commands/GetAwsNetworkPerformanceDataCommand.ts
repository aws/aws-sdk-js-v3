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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { GetAwsNetworkPerformanceDataRequest, GetAwsNetworkPerformanceDataResult } from "../models/models_5";
import { de_GetAwsNetworkPerformanceDataCommand, se_GetAwsNetworkPerformanceDataCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetAwsNetworkPerformanceDataCommand}.
 */
export interface GetAwsNetworkPerformanceDataCommandInput extends GetAwsNetworkPerformanceDataRequest {}
/**
 * @public
 *
 * The output of {@link GetAwsNetworkPerformanceDataCommand}.
 */
export interface GetAwsNetworkPerformanceDataCommandOutput
  extends GetAwsNetworkPerformanceDataResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets network performance data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetAwsNetworkPerformanceDataCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetAwsNetworkPerformanceDataCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // GetAwsNetworkPerformanceDataRequest
 *   DataQueries: [ // DataQueries
 *     { // DataQuery
 *       Id: "STRING_VALUE",
 *       Source: "STRING_VALUE",
 *       Destination: "STRING_VALUE",
 *       Metric: "aggregate-latency",
 *       Statistic: "p50",
 *       Period: "five-minutes" || "fifteen-minutes" || "one-hour" || "three-hours" || "one-day" || "one-week",
 *     },
 *   ],
 *   StartTime: new Date("TIMESTAMP"),
 *   EndTime: new Date("TIMESTAMP"),
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new GetAwsNetworkPerformanceDataCommand(input);
 * const response = await client.send(command);
 * // { // GetAwsNetworkPerformanceDataResult
 * //   DataResponses: [ // DataResponses
 * //     { // DataResponse
 * //       Id: "STRING_VALUE",
 * //       Source: "STRING_VALUE",
 * //       Destination: "STRING_VALUE",
 * //       Metric: "aggregate-latency",
 * //       Statistic: "p50",
 * //       Period: "five-minutes" || "fifteen-minutes" || "one-hour" || "three-hours" || "one-day" || "one-week",
 * //       MetricPoints: [ // MetricPoints
 * //         { // MetricPoint
 * //           StartDate: new Date("TIMESTAMP"),
 * //           EndDate: new Date("TIMESTAMP"),
 * //           Value: Number("float"),
 * //           Status: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetAwsNetworkPerformanceDataCommandInput - {@link GetAwsNetworkPerformanceDataCommandInput}
 * @returns {@link GetAwsNetworkPerformanceDataCommandOutput}
 * @see {@link GetAwsNetworkPerformanceDataCommandInput} for command's `input` shape.
 * @see {@link GetAwsNetworkPerformanceDataCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class GetAwsNetworkPerformanceDataCommand extends $Command<
  GetAwsNetworkPerformanceDataCommandInput,
  GetAwsNetworkPerformanceDataCommandOutput,
  EC2ClientResolvedConfig
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
  constructor(readonly input: GetAwsNetworkPerformanceDataCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAwsNetworkPerformanceDataCommandInput, GetAwsNetworkPerformanceDataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetAwsNetworkPerformanceDataCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetAwsNetworkPerformanceDataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "GetAwsNetworkPerformanceData",
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
  private serialize(input: GetAwsNetworkPerformanceDataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetAwsNetworkPerformanceDataCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetAwsNetworkPerformanceDataCommandOutput> {
    return de_GetAwsNetworkPerformanceDataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
