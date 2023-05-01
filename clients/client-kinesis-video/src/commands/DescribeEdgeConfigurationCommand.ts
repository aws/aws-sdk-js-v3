// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { KinesisVideoClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisVideoClient";
import {
  DescribeEdgeConfigurationInput,
  DescribeEdgeConfigurationOutput,
  DescribeEdgeConfigurationOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeEdgeConfigurationCommand, se_DescribeEdgeConfigurationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link DescribeEdgeConfigurationCommand}.
 */
export interface DescribeEdgeConfigurationCommandInput extends DescribeEdgeConfigurationInput {}
/**
 * @public
 *
 * The output of {@link DescribeEdgeConfigurationCommand}.
 */
export interface DescribeEdgeConfigurationCommandOutput extends DescribeEdgeConfigurationOutput, __MetadataBearer {}

/**
 * @public
 * <p>Describes a stream’s edge configuration that was set using the <code>StartEdgeConfigurationUpdate</code> API.
 *              Use this API to get the status of the configuration if the configuration is in sync with the
 *             Edge Agent.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, DescribeEdgeConfigurationCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, DescribeEdgeConfigurationCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * const client = new KinesisVideoClient(config);
 * const input = { // DescribeEdgeConfigurationInput
 *   StreamName: "STRING_VALUE",
 *   StreamARN: "STRING_VALUE",
 * };
 * const command = new DescribeEdgeConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEdgeConfigurationOutput
 * //   StreamName: "STRING_VALUE",
 * //   StreamARN: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   LastUpdatedTime: new Date("TIMESTAMP"),
 * //   SyncStatus: "SYNCING" || "ACKNOWLEDGED" || "IN_SYNC" || "SYNC_FAILED" || "DELETING" || "DELETE_FAILED",
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
 * @param DescribeEdgeConfigurationCommandInput - {@link DescribeEdgeConfigurationCommandInput}
 * @returns {@link DescribeEdgeConfigurationCommandOutput}
 * @see {@link DescribeEdgeConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeEdgeConfigurationCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Amazon Kinesis Video Streams can't find the stream that you specified.</p>
 *
 * @throws {@link StreamEdgeConfigurationNotFoundException} (client fault)
 *  <p>The Exception rendered when the Amazon Kinesis Video Stream can't find a stream's edge configuration
 *          that you specified. </p>
 *
 * @throws {@link KinesisVideoServiceException}
 * <p>Base exception class for all service exceptions from KinesisVideo service.</p>
 *
 */
export class DescribeEdgeConfigurationCommand extends $Command<
  DescribeEdgeConfigurationCommandInput,
  DescribeEdgeConfigurationCommandOutput,
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
  constructor(readonly input: DescribeEdgeConfigurationCommandInput) {
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
  ): Handler<DescribeEdgeConfigurationCommandInput, DescribeEdgeConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeEdgeConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisVideoClient";
    const commandName = "DescribeEdgeConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DescribeEdgeConfigurationOutputFilterSensitiveLog,
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
  private serialize(input: DescribeEdgeConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeEdgeConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeEdgeConfigurationCommandOutput> {
    return de_DescribeEdgeConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
