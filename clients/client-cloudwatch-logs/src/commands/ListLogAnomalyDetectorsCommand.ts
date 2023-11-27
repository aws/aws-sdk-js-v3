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
import { ListLogAnomalyDetectorsRequest, ListLogAnomalyDetectorsResponse } from "../models/models_0";
import { de_ListLogAnomalyDetectorsCommand, se_ListLogAnomalyDetectorsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListLogAnomalyDetectorsCommand}.
 */
export interface ListLogAnomalyDetectorsCommandInput extends ListLogAnomalyDetectorsRequest {}
/**
 * @public
 *
 * The output of {@link ListLogAnomalyDetectorsCommand}.
 */
export interface ListLogAnomalyDetectorsCommandOutput extends ListLogAnomalyDetectorsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a list of the log anomaly detectors in the account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, ListLogAnomalyDetectorsCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, ListLogAnomalyDetectorsCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const input = { // ListLogAnomalyDetectorsRequest
 *   filterLogGroupArn: "STRING_VALUE",
 *   limit: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListLogAnomalyDetectorsCommand(input);
 * const response = await client.send(command);
 * // { // ListLogAnomalyDetectorsResponse
 * //   anomalyDetectors: [ // AnomalyDetectors
 * //     { // AnomalyDetector
 * //       anomalyDetectorArn: "STRING_VALUE",
 * //       detectorName: "STRING_VALUE",
 * //       logGroupArnList: [ // LogGroupArnList
 * //         "STRING_VALUE",
 * //       ],
 * //       evaluationFrequency: "ONE_MIN" || "FIVE_MIN" || "TEN_MIN" || "FIFTEEN_MIN" || "THIRTY_MIN" || "ONE_HOUR",
 * //       filterPattern: "STRING_VALUE",
 * //       anomalyDetectorStatus: "INITIALIZING" || "TRAINING" || "ANALYZING" || "FAILED" || "DELETED" || "PAUSED",
 * //       kmsKeyId: "STRING_VALUE",
 * //       creationTimeStamp: Number("long"),
 * //       lastModifiedTimeStamp: Number("long"),
 * //       anomalyVisibilityTime: Number("long"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLogAnomalyDetectorsCommandInput - {@link ListLogAnomalyDetectorsCommandInput}
 * @returns {@link ListLogAnomalyDetectorsCommandOutput}
 * @see {@link ListLogAnomalyDetectorsCommandInput} for command's `input` shape.
 * @see {@link ListLogAnomalyDetectorsCommandOutput} for command's `response` shape.
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
export class ListLogAnomalyDetectorsCommand extends $Command<
  ListLogAnomalyDetectorsCommandInput,
  ListLogAnomalyDetectorsCommandOutput,
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
  constructor(readonly input: ListLogAnomalyDetectorsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchLogsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListLogAnomalyDetectorsCommandInput, ListLogAnomalyDetectorsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListLogAnomalyDetectorsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchLogsClient";
    const commandName = "ListLogAnomalyDetectorsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Logs_20140328",
        operation: "ListLogAnomalyDetectors",
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
  private serialize(input: ListLogAnomalyDetectorsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListLogAnomalyDetectorsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListLogAnomalyDetectorsCommandOutput> {
    return de_ListLogAnomalyDetectorsCommand(output, context);
  }
}
