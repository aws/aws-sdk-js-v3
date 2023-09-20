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

import { LookoutMetricsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutMetricsClient";
import {
  DescribeAnomalyDetectionExecutionsRequest,
  DescribeAnomalyDetectionExecutionsResponse,
} from "../models/models_0";
import {
  de_DescribeAnomalyDetectionExecutionsCommand,
  se_DescribeAnomalyDetectionExecutionsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeAnomalyDetectionExecutionsCommand}.
 */
export interface DescribeAnomalyDetectionExecutionsCommandInput extends DescribeAnomalyDetectionExecutionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAnomalyDetectionExecutionsCommand}.
 */
export interface DescribeAnomalyDetectionExecutionsCommandOutput
  extends DescribeAnomalyDetectionExecutionsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns information about the status of the specified anomaly detection jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, DescribeAnomalyDetectionExecutionsCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, DescribeAnomalyDetectionExecutionsCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * const client = new LookoutMetricsClient(config);
 * const input = { // DescribeAnomalyDetectionExecutionsRequest
 *   AnomalyDetectorArn: "STRING_VALUE", // required
 *   Timestamp: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeAnomalyDetectionExecutionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAnomalyDetectionExecutionsResponse
 * //   ExecutionList: [ // ExecutionList
 * //     { // ExecutionStatus
 * //       Timestamp: "STRING_VALUE",
 * //       Status: "PENDING" || "IN_PROGRESS" || "COMPLETED" || "FAILED" || "FAILED_TO_SCHEDULE",
 * //       FailureReason: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeAnomalyDetectionExecutionsCommandInput - {@link DescribeAnomalyDetectionExecutionsCommandInput}
 * @returns {@link DescribeAnomalyDetectionExecutionsCommandOutput}
 * @see {@link DescribeAnomalyDetectionExecutionsCommandInput} for command's `input` shape.
 * @see {@link DescribeAnomalyDetectionExecutionsCommandOutput} for command's `response` shape.
 * @see {@link LookoutMetricsClientResolvedConfig | config} for LookoutMetricsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found. Check the ARN of the resource and try again.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request was denied due to too many requests being submitted at the same time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the AWS service. Check your input values and try
 *       again.</p>
 *
 * @throws {@link LookoutMetricsServiceException}
 * <p>Base exception class for all service exceptions from LookoutMetrics service.</p>
 *
 */
export class DescribeAnomalyDetectionExecutionsCommand extends $Command<
  DescribeAnomalyDetectionExecutionsCommandInput,
  DescribeAnomalyDetectionExecutionsCommandOutput,
  LookoutMetricsClientResolvedConfig
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
  constructor(readonly input: DescribeAnomalyDetectionExecutionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LookoutMetricsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAnomalyDetectionExecutionsCommandInput, DescribeAnomalyDetectionExecutionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAnomalyDetectionExecutionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutMetricsClient";
    const commandName = "DescribeAnomalyDetectionExecutionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "LookoutMetrics",
        operation: "DescribeAnomalyDetectionExecutions",
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
  private serialize(
    input: DescribeAnomalyDetectionExecutionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeAnomalyDetectionExecutionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAnomalyDetectionExecutionsCommandOutput> {
    return de_DescribeAnomalyDetectionExecutionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
