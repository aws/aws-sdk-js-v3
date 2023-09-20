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

import { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient";
import { DescribeStreamSummaryInput, DescribeStreamSummaryOutput } from "../models/models_0";
import { de_DescribeStreamSummaryCommand, se_DescribeStreamSummaryCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeStreamSummaryCommand}.
 */
export interface DescribeStreamSummaryCommandInput extends DescribeStreamSummaryInput {}
/**
 * @public
 *
 * The output of {@link DescribeStreamSummaryCommand}.
 */
export interface DescribeStreamSummaryCommandOutput extends DescribeStreamSummaryOutput, __MetadataBearer {}

/**
 * @public
 * <p>Provides a summarized description of the specified Kinesis data stream without the
 *             shard list.</p>
 *          <note>
 *             <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input
 *                 parameter rather than the <code>StreamName</code> input parameter.</p>
 *          </note>
 *          <p>The information returned includes the stream name, Amazon Resource Name (ARN), status,
 *             record retention period, approximate creation time, monitoring, encryption details, and
 *             open shard count. </p>
 *          <p>
 *             <a>DescribeStreamSummary</a> has a limit of 20 transactions per second per
 *             account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, DescribeStreamSummaryCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, DescribeStreamSummaryCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * const client = new KinesisClient(config);
 * const input = { // DescribeStreamSummaryInput
 *   StreamName: "STRING_VALUE",
 *   StreamARN: "STRING_VALUE",
 * };
 * const command = new DescribeStreamSummaryCommand(input);
 * const response = await client.send(command);
 * // { // DescribeStreamSummaryOutput
 * //   StreamDescriptionSummary: { // StreamDescriptionSummary
 * //     StreamName: "STRING_VALUE", // required
 * //     StreamARN: "STRING_VALUE", // required
 * //     StreamStatus: "CREATING" || "DELETING" || "ACTIVE" || "UPDATING", // required
 * //     StreamModeDetails: { // StreamModeDetails
 * //       StreamMode: "PROVISIONED" || "ON_DEMAND", // required
 * //     },
 * //     RetentionPeriodHours: Number("int"), // required
 * //     StreamCreationTimestamp: new Date("TIMESTAMP"), // required
 * //     EnhancedMonitoring: [ // EnhancedMonitoringList // required
 * //       { // EnhancedMetrics
 * //         ShardLevelMetrics: [ // MetricsNameList
 * //           "IncomingBytes" || "IncomingRecords" || "OutgoingBytes" || "OutgoingRecords" || "WriteProvisionedThroughputExceeded" || "ReadProvisionedThroughputExceeded" || "IteratorAgeMilliseconds" || "ALL",
 * //         ],
 * //       },
 * //     ],
 * //     EncryptionType: "NONE" || "KMS",
 * //     KeyId: "STRING_VALUE",
 * //     OpenShardCount: Number("int"), // required
 * //     ConsumerCount: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeStreamSummaryCommandInput - {@link DescribeStreamSummaryCommandInput}
 * @returns {@link DescribeStreamSummaryCommandOutput}
 * @see {@link DescribeStreamSummaryCommandInput} for command's `input` shape.
 * @see {@link DescribeStreamSummaryCommandOutput} for command's `response` shape.
 * @see {@link KinesisClientResolvedConfig | config} for KinesisClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Specifies that you do not have the permissions required to perform this
 *             operation.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>A specified parameter exceeds its restrictions, is not supported, or can't be used.
 *             For more information, see the returned message.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The requested resource exceeds the maximum number allowed, or the number of concurrent
 *             stream requests exceeds the maximum number allowed. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found. The stream might not be specified
 *             correctly.</p>
 *
 * @throws {@link KinesisServiceException}
 * <p>Base exception class for all service exceptions from Kinesis service.</p>
 *
 */
export class DescribeStreamSummaryCommand extends $Command<
  DescribeStreamSummaryCommandInput,
  DescribeStreamSummaryCommandOutput,
  KinesisClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      OperationType: { type: "staticContextParams", value: `control` },
      StreamARN: { type: "contextParams", name: "StreamARN" },
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: DescribeStreamSummaryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeStreamSummaryCommandInput, DescribeStreamSummaryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeStreamSummaryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisClient";
    const commandName = "DescribeStreamSummaryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Kinesis_20131202",
        operation: "DescribeStreamSummary",
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
  private serialize(input: DescribeStreamSummaryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeStreamSummaryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeStreamSummaryCommandOutput> {
    return de_DescribeStreamSummaryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
