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

import { KinesisVideoClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisVideoClient";
import { UpdateDataRetentionInput, UpdateDataRetentionOutput } from "../models/models_0";
import { de_UpdateDataRetentionCommand, se_UpdateDataRetentionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateDataRetentionCommand}.
 */
export interface UpdateDataRetentionCommandInput extends UpdateDataRetentionInput {}
/**
 * @public
 *
 * The output of {@link UpdateDataRetentionCommand}.
 */
export interface UpdateDataRetentionCommandOutput extends UpdateDataRetentionOutput, __MetadataBearer {}

/**
 * @public
 * <p> Increases or decreases the stream's data retention period by the value that you
 *             specify. To indicate whether you want to increase or decrease the data retention period,
 *             specify the <code>Operation</code> parameter in the request body. In the request, you
 *             must specify either the <code>StreamName</code> or the <code>StreamARN</code>. </p>
 *          <note>
 *             <p>The retention period that you specify replaces the current value.</p>
 *          </note>
 *          <p>This operation requires permission for the
 *                 <code>KinesisVideo:UpdateDataRetention</code> action.</p>
 *          <p>Changing the data retention period affects the data in the stream as
 *             follows:</p>
 *          <ul>
 *             <li>
 *                <p>If the data retention period is increased, existing data is retained for
 *                     the new retention period. For example, if the data retention period is increased
 *                     from one hour to seven hours, all existing data is retained for seven
 *                     hours.</p>
 *             </li>
 *             <li>
 *                <p>If the data retention period is decreased, existing data is retained for
 *                     the new retention period. For example, if the data retention period is decreased
 *                     from seven hours to one hour, all existing data is retained for one hour, and
 *                     any data older than one hour is deleted immediately.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, UpdateDataRetentionCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, UpdateDataRetentionCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * const client = new KinesisVideoClient(config);
 * const input = { // UpdateDataRetentionInput
 *   StreamName: "STRING_VALUE",
 *   StreamARN: "STRING_VALUE",
 *   CurrentVersion: "STRING_VALUE", // required
 *   Operation: "INCREASE_DATA_RETENTION" || "DECREASE_DATA_RETENTION", // required
 *   DataRetentionChangeInHours: Number("int"), // required
 * };
 * const command = new UpdateDataRetentionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateDataRetentionCommandInput - {@link UpdateDataRetentionCommandInput}
 * @returns {@link UpdateDataRetentionCommandOutput}
 * @see {@link UpdateDataRetentionCommandInput} for command's `input` shape.
 * @see {@link UpdateDataRetentionCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoClientResolvedConfig | config} for KinesisVideoClient's `config` shape.
 *
 * @throws {@link ClientLimitExceededException} (client fault)
 *  <p>Kinesis Video Streams has throttled the request because you have exceeded the limit of
 *             allowed client calls. Try making the call later.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>The value for this input parameter is invalid.</p>
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>The caller is not authorized to perform this operation.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>When the input <code>StreamARN</code> or <code>ChannelARN</code>
 *             in <code>CLOUD_STORAGE_MODE</code> is already mapped to a different
 *             Kinesis Video Stream resource, or if the provided input <code>StreamARN</code>
 *             or <code>ChannelARN</code> is not in Active status, try one of the following : </p>
 *          <ol>
 *             <li>
 *                <p>The <code>DescribeMediaStorageConfiguration</code> API to determine what the stream given channel is mapped to.
 *             </p>
 *             </li>
 *             <li>
 *                <p>The <code>DescribeMappedResourceConfiguration</code> API to determine the channel that the given stream is mapped to.
 *             </p>
 *             </li>
 *             <li>
 *                <p>The <code>DescribeStream</code> or <code>DescribeSignalingChannel</code> API to determine the status of the resource.
 *             </p>
 *             </li>
 *          </ol>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Amazon Kinesis Video Streams can't find the stream that you specified.</p>
 *
 * @throws {@link VersionMismatchException} (client fault)
 *  <p>The stream version that you specified is not the latest version. To get the latest
 *             version, use the <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_DescribeStream.html">DescribeStream</a>
 *             API.</p>
 *
 * @throws {@link KinesisVideoServiceException}
 * <p>Base exception class for all service exceptions from KinesisVideo service.</p>
 *
 */
export class UpdateDataRetentionCommand extends $Command<
  UpdateDataRetentionCommandInput,
  UpdateDataRetentionCommandOutput,
  KinesisVideoClientResolvedConfig
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
  constructor(readonly input: UpdateDataRetentionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisVideoClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateDataRetentionCommandInput, UpdateDataRetentionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateDataRetentionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisVideoClient";
    const commandName = "UpdateDataRetentionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "KinesisVideo_20170930",
        operation: "UpdateDataRetention",
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
  private serialize(input: UpdateDataRetentionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateDataRetentionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateDataRetentionCommandOutput> {
    return de_UpdateDataRetentionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
