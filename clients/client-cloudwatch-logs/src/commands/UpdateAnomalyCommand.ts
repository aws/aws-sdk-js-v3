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

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { UpdateAnomalyRequest } from "../models/models_0";
import { de_UpdateAnomalyCommand, se_UpdateAnomalyCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateAnomalyCommand}.
 */
export interface UpdateAnomalyCommandInput extends UpdateAnomalyRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAnomalyCommand}.
 */
export interface UpdateAnomalyCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Use this operation to <i>suppress</i> anomaly detection for a specified anomaly or pattern. If you suppress
 *        an anomaly, CloudWatch Logs won’t report new occurrences of that anomaly and won't
 *        update that anomaly
 *        with new data. If you suppress a pattern, CloudWatch Logs won’t report any anomalies related to that pattern.</p>
 *          <p>You must specify either <code>anomalyId</code> or <code>patternId</code>, but you can't specify both parameters in the
 *      same operation.</p>
 *          <p>If you have previously used this operation to suppress detection of a pattern or anomaly, you can use it again to cause
 *        CloudWatch Logs to end the suppression. To do this, use this operation and specify the anomaly or pattern to
 *      stop suppressing, and omit the <code>suppressionType</code> and <code>suppressionPeriod</code> parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, UpdateAnomalyCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, UpdateAnomalyCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const input = { // UpdateAnomalyRequest
 *   anomalyId: "STRING_VALUE",
 *   patternId: "STRING_VALUE",
 *   anomalyDetectorArn: "STRING_VALUE", // required
 *   suppressionType: "LIMITED" || "INFINITE",
 *   suppressionPeriod: { // SuppressionPeriod
 *     value: Number("int"),
 *     suppressionUnit: "SECONDS" || "MINUTES" || "HOURS",
 *   },
 * };
 * const command = new UpdateAnomalyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateAnomalyCommandInput - {@link UpdateAnomalyCommandInput}
 * @returns {@link UpdateAnomalyCommandOutput}
 * @see {@link UpdateAnomalyCommandInput} for command's `input` shape.
 * @see {@link UpdateAnomalyCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
 *
 * @throws {@link OperationAbortedException} (client fault)
 *  <p>Multiple concurrent requests to update the same resource were in conflict.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service cannot complete the request.</p>
 *
 * @throws {@link CloudWatchLogsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchLogs service.</p>
 *
 */
export class UpdateAnomalyCommand extends $Command<
  UpdateAnomalyCommandInput,
  UpdateAnomalyCommandOutput,
  CloudWatchLogsClientResolvedConfig
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
  constructor(readonly input: UpdateAnomalyCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchLogsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateAnomalyCommandInput, UpdateAnomalyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateAnomalyCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchLogsClient";
    const commandName = "UpdateAnomalyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Logs_20140328",
        operation: "UpdateAnomaly",
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
  private serialize(input: UpdateAnomalyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateAnomalyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateAnomalyCommandOutput> {
    return de_UpdateAnomalyCommand(output, context);
  }
}
