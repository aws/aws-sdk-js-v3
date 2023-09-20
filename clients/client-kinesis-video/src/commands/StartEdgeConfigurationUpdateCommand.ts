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
import {
  StartEdgeConfigurationUpdateInput,
  StartEdgeConfigurationUpdateInputFilterSensitiveLog,
  StartEdgeConfigurationUpdateOutput,
  StartEdgeConfigurationUpdateOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  de_StartEdgeConfigurationUpdateCommand,
  se_StartEdgeConfigurationUpdateCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartEdgeConfigurationUpdateCommand}.
 */
export interface StartEdgeConfigurationUpdateCommandInput extends StartEdgeConfigurationUpdateInput {}
/**
 * @public
 *
 * The output of {@link StartEdgeConfigurationUpdateCommand}.
 */
export interface StartEdgeConfigurationUpdateCommandOutput
  extends StartEdgeConfigurationUpdateOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>An asynchronous API that updates a stream’s existing edge configuration.
 *             The Kinesis Video Stream will sync the stream’s edge configuration with the Edge Agent IoT Greengrass
 *             component that runs on an IoT Hub Device, setup at your premise. The time to sync can vary
 *             and depends on the connectivity of the Hub Device.
 *             The <code>SyncStatus</code> will be updated as the edge configuration is acknowledged,
 *             and synced with the Edge Agent. </p>
 *          <p>If this API is invoked for the first time, a new edge configuration will be created for the stream,
 *             and the sync status will be set to <code>SYNCING</code>. You will have to wait for the sync status
 *             to reach a terminal state such as: <code>IN_SYNC</code>, or <code>SYNC_FAILED</code>, before using this API again.
 *             If you invoke this API during the syncing process, a <code>ResourceInUseException</code> will be thrown.
 *             The connectivity of the stream’s edge configuration and the Edge Agent will be retried for 15 minutes. After 15 minutes,
 *             the status will transition into the <code>SYNC_FAILED</code> state.</p>
 *          <p>To move an edge configuration from one device to another, use <a>DeleteEdgeConfiguration</a> to delete
 *             the current edge configuration. You can then invoke StartEdgeConfigurationUpdate with an updated Hub Device ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, StartEdgeConfigurationUpdateCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, StartEdgeConfigurationUpdateCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * const client = new KinesisVideoClient(config);
 * const input = { // StartEdgeConfigurationUpdateInput
 *   StreamName: "STRING_VALUE",
 *   StreamARN: "STRING_VALUE",
 *   EdgeConfig: { // EdgeConfig
 *     HubDeviceArn: "STRING_VALUE", // required
 *     RecorderConfig: { // RecorderConfig
 *       MediaSourceConfig: { // MediaSourceConfig
 *         MediaUriSecretArn: "STRING_VALUE", // required
 *         MediaUriType: "RTSP_URI" || "FILE_URI", // required
 *       },
 *       ScheduleConfig: { // ScheduleConfig
 *         ScheduleExpression: "STRING_VALUE", // required
 *         DurationInSeconds: Number("int"), // required
 *       },
 *     },
 *     UploaderConfig: { // UploaderConfig
 *       ScheduleConfig: {
 *         ScheduleExpression: "STRING_VALUE", // required
 *         DurationInSeconds: Number("int"), // required
 *       },
 *     },
 *     DeletionConfig: { // DeletionConfig
 *       EdgeRetentionInHours: Number("int"),
 *       LocalSizeConfig: { // LocalSizeConfig
 *         MaxLocalMediaSizeInMB: Number("int"),
 *         StrategyOnFullSize: "DELETE_OLDEST_MEDIA" || "DENY_NEW_MEDIA",
 *       },
 *       DeleteAfterUpload: true || false,
 *     },
 *   },
 * };
 * const command = new StartEdgeConfigurationUpdateCommand(input);
 * const response = await client.send(command);
 * // { // StartEdgeConfigurationUpdateOutput
 * //   StreamName: "STRING_VALUE",
 * //   StreamARN: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   LastUpdatedTime: new Date("TIMESTAMP"),
 * //   SyncStatus: "SYNCING" || "ACKNOWLEDGED" || "IN_SYNC" || "SYNC_FAILED" || "DELETING" || "DELETE_FAILED" || "DELETING_ACKNOWLEDGED",
 * //   FailedStatusDetails: "STRING_VALUE",
 * //   EdgeConfig: { // EdgeConfig
 * //     HubDeviceArn: "STRING_VALUE", // required
 * //     RecorderConfig: { // RecorderConfig
 * //       MediaSourceConfig: { // MediaSourceConfig
 * //         MediaUriSecretArn: "STRING_VALUE", // required
 * //         MediaUriType: "RTSP_URI" || "FILE_URI", // required
 * //       },
 * //       ScheduleConfig: { // ScheduleConfig
 * //         ScheduleExpression: "STRING_VALUE", // required
 * //         DurationInSeconds: Number("int"), // required
 * //       },
 * //     },
 * //     UploaderConfig: { // UploaderConfig
 * //       ScheduleConfig: {
 * //         ScheduleExpression: "STRING_VALUE", // required
 * //         DurationInSeconds: Number("int"), // required
 * //       },
 * //     },
 * //     DeletionConfig: { // DeletionConfig
 * //       EdgeRetentionInHours: Number("int"),
 * //       LocalSizeConfig: { // LocalSizeConfig
 * //         MaxLocalMediaSizeInMB: Number("int"),
 * //         StrategyOnFullSize: "DELETE_OLDEST_MEDIA" || "DENY_NEW_MEDIA",
 * //       },
 * //       DeleteAfterUpload: true || false,
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param StartEdgeConfigurationUpdateCommandInput - {@link StartEdgeConfigurationUpdateCommandInput}
 * @returns {@link StartEdgeConfigurationUpdateCommandOutput}
 * @see {@link StartEdgeConfigurationUpdateCommandInput} for command's `input` shape.
 * @see {@link StartEdgeConfigurationUpdateCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoClientResolvedConfig | config} for KinesisVideoClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have required permissions to perform this operation.</p>
 *
 * @throws {@link ClientLimitExceededException} (client fault)
 *  <p>Kinesis Video Streams has throttled the request because you have exceeded the limit of
 *             allowed client calls. Try making the call later.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>The value for this input parameter is invalid.</p>
 *
 * @throws {@link NoDataRetentionException} (client fault)
 *  <p>The Stream data retention in hours is equal to zero.</p>
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
 * @throws {@link KinesisVideoServiceException}
 * <p>Base exception class for all service exceptions from KinesisVideo service.</p>
 *
 */
export class StartEdgeConfigurationUpdateCommand extends $Command<
  StartEdgeConfigurationUpdateCommandInput,
  StartEdgeConfigurationUpdateCommandOutput,
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
  constructor(readonly input: StartEdgeConfigurationUpdateCommandInput) {
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
  ): Handler<StartEdgeConfigurationUpdateCommandInput, StartEdgeConfigurationUpdateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartEdgeConfigurationUpdateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisVideoClient";
    const commandName = "StartEdgeConfigurationUpdateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartEdgeConfigurationUpdateInputFilterSensitiveLog,
      outputFilterSensitiveLog: StartEdgeConfigurationUpdateOutputFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "KinesisVideo_20170930",
        operation: "StartEdgeConfigurationUpdate",
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
  private serialize(input: StartEdgeConfigurationUpdateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartEdgeConfigurationUpdateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartEdgeConfigurationUpdateCommandOutput> {
    return de_StartEdgeConfigurationUpdateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
