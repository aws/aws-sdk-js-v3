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
import { EnableEnhancedMonitoringInput, EnhancedMonitoringOutput } from "../models/models_0";
import { de_EnableEnhancedMonitoringCommand, se_EnableEnhancedMonitoringCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link EnableEnhancedMonitoringCommand}.
 */
export interface EnableEnhancedMonitoringCommandInput extends EnableEnhancedMonitoringInput {}
/**
 * @public
 *
 * The output of {@link EnableEnhancedMonitoringCommand}.
 */
export interface EnableEnhancedMonitoringCommandOutput extends EnhancedMonitoringOutput, __MetadataBearer {}

/**
 * @public
 * <p>Enables enhanced Kinesis data stream monitoring for shard-level metrics.</p>
 *          <note>
 *             <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input
 *                 parameter rather than the <code>StreamName</code> input parameter.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, EnableEnhancedMonitoringCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, EnableEnhancedMonitoringCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * const client = new KinesisClient(config);
 * const input = { // EnableEnhancedMonitoringInput
 *   StreamName: "STRING_VALUE",
 *   ShardLevelMetrics: [ // MetricsNameList // required
 *     "IncomingBytes" || "IncomingRecords" || "OutgoingBytes" || "OutgoingRecords" || "WriteProvisionedThroughputExceeded" || "ReadProvisionedThroughputExceeded" || "IteratorAgeMilliseconds" || "ALL",
 *   ],
 *   StreamARN: "STRING_VALUE",
 * };
 * const command = new EnableEnhancedMonitoringCommand(input);
 * const response = await client.send(command);
 * // { // EnhancedMonitoringOutput
 * //   StreamName: "STRING_VALUE",
 * //   CurrentShardLevelMetrics: [ // MetricsNameList
 * //     "IncomingBytes" || "IncomingRecords" || "OutgoingBytes" || "OutgoingRecords" || "WriteProvisionedThroughputExceeded" || "ReadProvisionedThroughputExceeded" || "IteratorAgeMilliseconds" || "ALL",
 * //   ],
 * //   DesiredShardLevelMetrics: [
 * //     "IncomingBytes" || "IncomingRecords" || "OutgoingBytes" || "OutgoingRecords" || "WriteProvisionedThroughputExceeded" || "ReadProvisionedThroughputExceeded" || "IteratorAgeMilliseconds" || "ALL",
 * //   ],
 * //   StreamARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param EnableEnhancedMonitoringCommandInput - {@link EnableEnhancedMonitoringCommandInput}
 * @returns {@link EnableEnhancedMonitoringCommandOutput}
 * @see {@link EnableEnhancedMonitoringCommandInput} for command's `input` shape.
 * @see {@link EnableEnhancedMonitoringCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The resource is not available for this operation. For successful operation, the
 *             resource must be in the <code>ACTIVE</code> state.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found. The stream might not be specified
 *             correctly.</p>
 *
 * @throws {@link KinesisServiceException}
 * <p>Base exception class for all service exceptions from Kinesis service.</p>
 *
 */
export class EnableEnhancedMonitoringCommand extends $Command<
  EnableEnhancedMonitoringCommandInput,
  EnableEnhancedMonitoringCommandOutput,
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
  constructor(readonly input: EnableEnhancedMonitoringCommandInput) {
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
  ): Handler<EnableEnhancedMonitoringCommandInput, EnableEnhancedMonitoringCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, EnableEnhancedMonitoringCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisClient";
    const commandName = "EnableEnhancedMonitoringCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Kinesis_20131202",
        operation: "EnableEnhancedMonitoring",
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
  private serialize(input: EnableEnhancedMonitoringCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_EnableEnhancedMonitoringCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<EnableEnhancedMonitoringCommandOutput> {
    return de_EnableEnhancedMonitoringCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
