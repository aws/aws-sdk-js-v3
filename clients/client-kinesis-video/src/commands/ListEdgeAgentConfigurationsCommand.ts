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
  ListEdgeAgentConfigurationsInput,
  ListEdgeAgentConfigurationsOutput,
  ListEdgeAgentConfigurationsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  de_ListEdgeAgentConfigurationsCommand,
  se_ListEdgeAgentConfigurationsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListEdgeAgentConfigurationsCommand}.
 */
export interface ListEdgeAgentConfigurationsCommandInput extends ListEdgeAgentConfigurationsInput {}
/**
 * @public
 *
 * The output of {@link ListEdgeAgentConfigurationsCommand}.
 */
export interface ListEdgeAgentConfigurationsCommandOutput extends ListEdgeAgentConfigurationsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns an array of edge configurations associated with the specified Edge Agent.</p>
 *          <p>In the request, you must specify the Edge Agent <code>HubDeviceArn</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, ListEdgeAgentConfigurationsCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, ListEdgeAgentConfigurationsCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * const client = new KinesisVideoClient(config);
 * const input = { // ListEdgeAgentConfigurationsInput
 *   HubDeviceArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListEdgeAgentConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListEdgeAgentConfigurationsOutput
 * //   EdgeConfigs: [ // ListEdgeAgentConfigurationsEdgeConfigList
 * //     { // ListEdgeAgentConfigurationsEdgeConfig
 * //       StreamName: "STRING_VALUE",
 * //       StreamARN: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       LastUpdatedTime: new Date("TIMESTAMP"),
 * //       SyncStatus: "SYNCING" || "ACKNOWLEDGED" || "IN_SYNC" || "SYNC_FAILED" || "DELETING" || "DELETE_FAILED" || "DELETING_ACKNOWLEDGED",
 * //       FailedStatusDetails: "STRING_VALUE",
 * //       EdgeConfig: { // EdgeConfig
 * //         HubDeviceArn: "STRING_VALUE", // required
 * //         RecorderConfig: { // RecorderConfig
 * //           MediaSourceConfig: { // MediaSourceConfig
 * //             MediaUriSecretArn: "STRING_VALUE", // required
 * //             MediaUriType: "RTSP_URI" || "FILE_URI", // required
 * //           },
 * //           ScheduleConfig: { // ScheduleConfig
 * //             ScheduleExpression: "STRING_VALUE", // required
 * //             DurationInSeconds: Number("int"), // required
 * //           },
 * //         },
 * //         UploaderConfig: { // UploaderConfig
 * //           ScheduleConfig: {
 * //             ScheduleExpression: "STRING_VALUE", // required
 * //             DurationInSeconds: Number("int"), // required
 * //           },
 * //         },
 * //         DeletionConfig: { // DeletionConfig
 * //           EdgeRetentionInHours: Number("int"),
 * //           LocalSizeConfig: { // LocalSizeConfig
 * //             MaxLocalMediaSizeInMB: Number("int"),
 * //             StrategyOnFullSize: "DELETE_OLDEST_MEDIA" || "DENY_NEW_MEDIA",
 * //           },
 * //           DeleteAfterUpload: true || false,
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEdgeAgentConfigurationsCommandInput - {@link ListEdgeAgentConfigurationsCommandInput}
 * @returns {@link ListEdgeAgentConfigurationsCommandOutput}
 * @see {@link ListEdgeAgentConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListEdgeAgentConfigurationsCommandOutput} for command's `response` shape.
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
 * @throws {@link KinesisVideoServiceException}
 * <p>Base exception class for all service exceptions from KinesisVideo service.</p>
 *
 */
export class ListEdgeAgentConfigurationsCommand extends $Command<
  ListEdgeAgentConfigurationsCommandInput,
  ListEdgeAgentConfigurationsCommandOutput,
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
  constructor(readonly input: ListEdgeAgentConfigurationsCommandInput) {
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
  ): Handler<ListEdgeAgentConfigurationsCommandInput, ListEdgeAgentConfigurationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListEdgeAgentConfigurationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisVideoClient";
    const commandName = "ListEdgeAgentConfigurationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: ListEdgeAgentConfigurationsOutputFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "KinesisVideo_20170930",
        operation: "ListEdgeAgentConfigurations",
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
  private serialize(input: ListEdgeAgentConfigurationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListEdgeAgentConfigurationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListEdgeAgentConfigurationsCommandOutput> {
    return de_ListEdgeAgentConfigurationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
