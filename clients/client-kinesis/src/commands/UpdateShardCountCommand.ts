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
import { UpdateShardCountInput, UpdateShardCountOutput } from "../models/models_0";
import { de_UpdateShardCountCommand, se_UpdateShardCountCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateShardCountCommand}.
 */
export interface UpdateShardCountCommandInput extends UpdateShardCountInput {}
/**
 * @public
 *
 * The output of {@link UpdateShardCountCommand}.
 */
export interface UpdateShardCountCommandOutput extends UpdateShardCountOutput, __MetadataBearer {}

/**
 * @public
 * <p>Updates the shard count of the specified stream to the specified number of shards.
 *             This API is only supported for the data streams with the provisioned capacity
 *             mode.</p>
 *          <note>
 *             <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input
 *                 parameter rather than the <code>StreamName</code> input parameter.</p>
 *          </note>
 *          <p>Updating the shard count is an asynchronous operation. Upon receiving the request,
 *             Kinesis Data Streams returns immediately and sets the status of the stream to
 *                 <code>UPDATING</code>. After the update is complete, Kinesis Data Streams sets the
 *             status of the stream back to <code>ACTIVE</code>. Depending on the size of the stream,
 *             the scaling action could take a few minutes to complete. You can continue to read and
 *             write data to your stream while its status is <code>UPDATING</code>.</p>
 *          <p>To update the shard count, Kinesis Data Streams performs splits or merges on
 *             individual shards. This can cause short-lived shards to be created, in addition to the
 *             final shards. These short-lived shards count towards your total shard limit for your
 *             account in the Region.</p>
 *          <p>When using this operation, we recommend that you specify a target shard count that is
 *             a multiple of 25% (25%, 50%, 75%, 100%). You can specify any target value within your
 *             shard limit. However, if you specify a target that isn't a multiple of 25%, the scaling
 *             action might take longer to complete. </p>
 *          <p>This operation has the following default limits. By default, you cannot do the
 *             following:</p>
 *          <ul>
 *             <li>
 *                <p>Scale more than ten times per rolling 24-hour period per stream</p>
 *             </li>
 *             <li>
 *                <p>Scale up to more than double your current shard count for a stream</p>
 *             </li>
 *             <li>
 *                <p>Scale down below half your current shard count for a stream</p>
 *             </li>
 *             <li>
 *                <p>Scale up to more than 10000 shards in a stream</p>
 *             </li>
 *             <li>
 *                <p>Scale a stream with more than 10000 shards down unless the result is less than
 *                     10000 shards</p>
 *             </li>
 *             <li>
 *                <p>Scale up to more than the shard limit for your account</p>
 *             </li>
 *          </ul>
 *          <p>For the default limits for an Amazon Web Services account, see <a href="https://docs.aws.amazon.com/kinesis/latest/dev/service-sizes-and-limits.html">Streams
 *                 Limits</a> in the <i>Amazon Kinesis Data Streams Developer
 *                 Guide</i>. To request an increase in the call rate limit, the shard limit for
 *             this API, or your overall shard limit, use the <a href="https://console.aws.amazon.com/support/v1#/case/create?issueType=service-limit-increase&limitType=service-code-kinesis">limits form</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, UpdateShardCountCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, UpdateShardCountCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * const client = new KinesisClient(config);
 * const input = { // UpdateShardCountInput
 *   StreamName: "STRING_VALUE",
 *   TargetShardCount: Number("int"), // required
 *   ScalingType: "UNIFORM_SCALING", // required
 *   StreamARN: "STRING_VALUE",
 * };
 * const command = new UpdateShardCountCommand(input);
 * const response = await client.send(command);
 * // { // UpdateShardCountOutput
 * //   StreamName: "STRING_VALUE",
 * //   CurrentShardCount: Number("int"),
 * //   TargetShardCount: Number("int"),
 * //   StreamARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateShardCountCommandInput - {@link UpdateShardCountCommandInput}
 * @returns {@link UpdateShardCountCommandOutput}
 * @see {@link UpdateShardCountCommandInput} for command's `input` shape.
 * @see {@link UpdateShardCountCommandOutput} for command's `response` shape.
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
 * @throws {@link ValidationException} (client fault)
 *  <p>Specifies that you tried to invoke this API for a data stream with the on-demand
 *             capacity mode. This API is only supported for data streams with the provisioned capacity
 *             mode. </p>
 *
 * @throws {@link KinesisServiceException}
 * <p>Base exception class for all service exceptions from Kinesis service.</p>
 *
 */
export class UpdateShardCountCommand extends $Command<
  UpdateShardCountCommandInput,
  UpdateShardCountCommandOutput,
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
  constructor(readonly input: UpdateShardCountCommandInput) {
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
  ): Handler<UpdateShardCountCommandInput, UpdateShardCountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateShardCountCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisClient";
    const commandName = "UpdateShardCountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Kinesis_20131202",
        operation: "UpdateShardCount",
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
  private serialize(input: UpdateShardCountCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateShardCountCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateShardCountCommandOutput> {
    return de_UpdateShardCountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
