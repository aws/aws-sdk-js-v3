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

import { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient";
import { IncreaseStreamRetentionPeriodInput } from "../models/models_0";
import {
  de_IncreaseStreamRetentionPeriodCommand,
  se_IncreaseStreamRetentionPeriodCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link IncreaseStreamRetentionPeriodCommand}.
 */
export interface IncreaseStreamRetentionPeriodCommandInput extends IncreaseStreamRetentionPeriodInput {}
/**
 * @public
 *
 * The output of {@link IncreaseStreamRetentionPeriodCommand}.
 */
export interface IncreaseStreamRetentionPeriodCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Increases the Kinesis data stream's retention period, which is the length of time data
 *             records are accessible after they are added to the stream. The maximum value of a
 *             stream's retention period is 8760 hours (365 days).</p>
 *          <note>
 *             <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input
 *                 parameter rather than the <code>StreamName</code> input parameter.</p>
 *          </note>
 *          <p>If you choose a longer stream retention period, this operation increases the time
 *             period during which records that have not yet expired are accessible. However, it does
 *             not make previous, expired data (older than the stream's previous retention period)
 *             accessible after the operation has been called. For example, if a stream's retention
 *             period is set to 24 hours and is increased to 168 hours, any data that is older than 24
 *             hours remains inaccessible to consumer applications.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, IncreaseStreamRetentionPeriodCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, IncreaseStreamRetentionPeriodCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * const client = new KinesisClient(config);
 * const input = { // IncreaseStreamRetentionPeriodInput
 *   StreamName: "STRING_VALUE",
 *   RetentionPeriodHours: Number("int"), // required
 *   StreamARN: "STRING_VALUE",
 * };
 * const command = new IncreaseStreamRetentionPeriodCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param IncreaseStreamRetentionPeriodCommandInput - {@link IncreaseStreamRetentionPeriodCommandInput}
 * @returns {@link IncreaseStreamRetentionPeriodCommandOutput}
 * @see {@link IncreaseStreamRetentionPeriodCommandInput} for command's `input` shape.
 * @see {@link IncreaseStreamRetentionPeriodCommandOutput} for command's `response` shape.
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
export class IncreaseStreamRetentionPeriodCommand extends $Command<
  IncreaseStreamRetentionPeriodCommandInput,
  IncreaseStreamRetentionPeriodCommandOutput,
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
  constructor(readonly input: IncreaseStreamRetentionPeriodCommandInput) {
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
  ): Handler<IncreaseStreamRetentionPeriodCommandInput, IncreaseStreamRetentionPeriodCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, IncreaseStreamRetentionPeriodCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisClient";
    const commandName = "IncreaseStreamRetentionPeriodCommand";
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
  private serialize(input: IncreaseStreamRetentionPeriodCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_IncreaseStreamRetentionPeriodCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<IncreaseStreamRetentionPeriodCommandOutput> {
    return de_IncreaseStreamRetentionPeriodCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
