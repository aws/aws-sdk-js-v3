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
import { UpdateLogAnomalyDetectorRequest } from "../models/models_0";
import { de_UpdateLogAnomalyDetectorCommand, se_UpdateLogAnomalyDetectorCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateLogAnomalyDetectorCommand}.
 */
export interface UpdateLogAnomalyDetectorCommandInput extends UpdateLogAnomalyDetectorRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLogAnomalyDetectorCommand}.
 */
export interface UpdateLogAnomalyDetectorCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Updates an existing log anomaly detector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, UpdateLogAnomalyDetectorCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, UpdateLogAnomalyDetectorCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const input = { // UpdateLogAnomalyDetectorRequest
 *   anomalyDetectorArn: "STRING_VALUE", // required
 *   evaluationFrequency: "ONE_MIN" || "FIVE_MIN" || "TEN_MIN" || "FIFTEEN_MIN" || "THIRTY_MIN" || "ONE_HOUR",
 *   filterPattern: "STRING_VALUE",
 *   anomalyVisibilityTime: Number("long"),
 *   enabled: true || false, // required
 * };
 * const command = new UpdateLogAnomalyDetectorCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateLogAnomalyDetectorCommandInput - {@link UpdateLogAnomalyDetectorCommandInput}
 * @returns {@link UpdateLogAnomalyDetectorCommandOutput}
 * @see {@link UpdateLogAnomalyDetectorCommandInput} for command's `input` shape.
 * @see {@link UpdateLogAnomalyDetectorCommandOutput} for command's `response` shape.
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
export class UpdateLogAnomalyDetectorCommand extends $Command<
  UpdateLogAnomalyDetectorCommandInput,
  UpdateLogAnomalyDetectorCommandOutput,
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
  constructor(readonly input: UpdateLogAnomalyDetectorCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchLogsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateLogAnomalyDetectorCommandInput, UpdateLogAnomalyDetectorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateLogAnomalyDetectorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchLogsClient";
    const commandName = "UpdateLogAnomalyDetectorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Logs_20140328",
        operation: "UpdateLogAnomalyDetector",
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
  private serialize(input: UpdateLogAnomalyDetectorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateLogAnomalyDetectorCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateLogAnomalyDetectorCommandOutput> {
    return de_UpdateLogAnomalyDetectorCommand(output, context);
  }
}
