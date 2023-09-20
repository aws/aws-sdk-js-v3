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
import { DescribeAnomalyDetectorRequest, DescribeAnomalyDetectorResponse } from "../models/models_0";
import { de_DescribeAnomalyDetectorCommand, se_DescribeAnomalyDetectorCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeAnomalyDetectorCommand}.
 */
export interface DescribeAnomalyDetectorCommandInput extends DescribeAnomalyDetectorRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAnomalyDetectorCommand}.
 */
export interface DescribeAnomalyDetectorCommandOutput extends DescribeAnomalyDetectorResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes a detector.</p>
 *          <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource
 *       immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, DescribeAnomalyDetectorCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, DescribeAnomalyDetectorCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * const client = new LookoutMetricsClient(config);
 * const input = { // DescribeAnomalyDetectorRequest
 *   AnomalyDetectorArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeAnomalyDetectorCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAnomalyDetectorResponse
 * //   AnomalyDetectorArn: "STRING_VALUE",
 * //   AnomalyDetectorName: "STRING_VALUE",
 * //   AnomalyDetectorDescription: "STRING_VALUE",
 * //   AnomalyDetectorConfig: { // AnomalyDetectorConfigSummary
 * //     AnomalyDetectorFrequency: "P1D" || "PT1H" || "PT10M" || "PT5M",
 * //   },
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   LastModificationTime: new Date("TIMESTAMP"),
 * //   Status: "ACTIVE" || "ACTIVATING" || "DELETING" || "FAILED" || "INACTIVE" || "LEARNING" || "BACK_TEST_ACTIVATING" || "BACK_TEST_ACTIVE" || "BACK_TEST_COMPLETE" || "DEACTIVATED" || "DEACTIVATING",
 * //   FailureReason: "STRING_VALUE",
 * //   KmsKeyArn: "STRING_VALUE",
 * //   FailureType: "ACTIVATION_FAILURE" || "BACK_TEST_ACTIVATION_FAILURE" || "DELETION_FAILURE" || "DEACTIVATION_FAILURE",
 * // };
 *
 * ```
 *
 * @param DescribeAnomalyDetectorCommandInput - {@link DescribeAnomalyDetectorCommandInput}
 * @returns {@link DescribeAnomalyDetectorCommandOutput}
 * @see {@link DescribeAnomalyDetectorCommandInput} for command's `input` shape.
 * @see {@link DescribeAnomalyDetectorCommandOutput} for command's `response` shape.
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
export class DescribeAnomalyDetectorCommand extends $Command<
  DescribeAnomalyDetectorCommandInput,
  DescribeAnomalyDetectorCommandOutput,
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
  constructor(readonly input: DescribeAnomalyDetectorCommandInput) {
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
  ): Handler<DescribeAnomalyDetectorCommandInput, DescribeAnomalyDetectorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAnomalyDetectorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutMetricsClient";
    const commandName = "DescribeAnomalyDetectorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "LookoutMetrics",
        operation: "DescribeAnomalyDetector",
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
  private serialize(input: DescribeAnomalyDetectorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeAnomalyDetectorCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAnomalyDetectorCommandOutput> {
    return de_DescribeAnomalyDetectorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
