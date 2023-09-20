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

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import {
  CreateMediaCapturePipelineRequest,
  CreateMediaCapturePipelineRequestFilterSensitiveLog,
  CreateMediaCapturePipelineResponse,
  CreateMediaCapturePipelineResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateMediaCapturePipelineCommand, se_CreateMediaCapturePipelineCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateMediaCapturePipelineCommand}.
 */
export interface CreateMediaCapturePipelineCommandInput extends CreateMediaCapturePipelineRequest {}
/**
 * @public
 *
 * The output of {@link CreateMediaCapturePipelineCommand}.
 */
export interface CreateMediaCapturePipelineCommandOutput extends CreateMediaCapturePipelineResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Creates a media capture pipeline.</p>
 *          <important>
 *             <p>
 *                <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_media-pipelines-chime_CreateMediaCapturePipeline">CreateMediaCapturePipeline</a>, in the Amazon Chime SDK.</p>
 *             <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to
 *                 <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the
 *                 <i>Amazon Chime SDK Developer Guide</i>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, CreateMediaCapturePipelineCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, CreateMediaCapturePipelineCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const input = { // CreateMediaCapturePipelineRequest
 *   SourceType: "ChimeSdkMeeting", // required
 *   SourceArn: "STRING_VALUE", // required
 *   SinkType: "S3Bucket", // required
 *   SinkArn: "STRING_VALUE", // required
 *   ClientRequestToken: "STRING_VALUE",
 *   ChimeSdkMeetingConfiguration: { // ChimeSdkMeetingConfiguration
 *     SourceConfiguration: { // SourceConfiguration
 *       SelectedVideoStreams: { // SelectedVideoStreams
 *         AttendeeIds: [ // AttendeeIdList
 *           "STRING_VALUE",
 *         ],
 *         ExternalUserIds: [ // ExternalUserIdList
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *     ArtifactsConfiguration: { // ArtifactsConfiguration
 *       Audio: { // AudioArtifactsConfiguration
 *         MuxType: "AudioOnly" || "AudioWithActiveSpeakerVideo", // required
 *       },
 *       Video: { // VideoArtifactsConfiguration
 *         State: "Enabled" || "Disabled", // required
 *         MuxType: "VideoOnly",
 *       },
 *       Content: { // ContentArtifactsConfiguration
 *         State: "Enabled" || "Disabled", // required
 *         MuxType: "ContentOnly",
 *       },
 *     },
 *   },
 * };
 * const command = new CreateMediaCapturePipelineCommand(input);
 * const response = await client.send(command);
 * // { // CreateMediaCapturePipelineResponse
 * //   MediaCapturePipeline: { // MediaCapturePipeline
 * //     MediaPipelineId: "STRING_VALUE",
 * //     SourceType: "ChimeSdkMeeting",
 * //     SourceArn: "STRING_VALUE",
 * //     Status: "Initializing" || "InProgress" || "Failed" || "Stopping" || "Stopped",
 * //     SinkType: "S3Bucket",
 * //     SinkArn: "STRING_VALUE",
 * //     CreatedTimestamp: new Date("TIMESTAMP"),
 * //     UpdatedTimestamp: new Date("TIMESTAMP"),
 * //     ChimeSdkMeetingConfiguration: { // ChimeSdkMeetingConfiguration
 * //       SourceConfiguration: { // SourceConfiguration
 * //         SelectedVideoStreams: { // SelectedVideoStreams
 * //           AttendeeIds: [ // AttendeeIdList
 * //             "STRING_VALUE",
 * //           ],
 * //           ExternalUserIds: [ // ExternalUserIdList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //       ArtifactsConfiguration: { // ArtifactsConfiguration
 * //         Audio: { // AudioArtifactsConfiguration
 * //           MuxType: "AudioOnly" || "AudioWithActiveSpeakerVideo", // required
 * //         },
 * //         Video: { // VideoArtifactsConfiguration
 * //           State: "Enabled" || "Disabled", // required
 * //           MuxType: "VideoOnly",
 * //         },
 * //         Content: { // ContentArtifactsConfiguration
 * //           State: "Enabled" || "Disabled", // required
 * //           MuxType: "ContentOnly",
 * //         },
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateMediaCapturePipelineCommandInput - {@link CreateMediaCapturePipelineCommandInput}
 * @returns {@link CreateMediaCapturePipelineCommandOutput}
 * @see {@link CreateMediaCapturePipelineCommandInput} for command's `input` shape.
 * @see {@link CreateMediaCapturePipelineCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>The request exceeds the resource limit.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 * @throws {@link ChimeServiceException}
 * <p>Base exception class for all service exceptions from Chime service.</p>
 *
 */
export class CreateMediaCapturePipelineCommand extends $Command<
  CreateMediaCapturePipelineCommandInput,
  CreateMediaCapturePipelineCommandOutput,
  ChimeClientResolvedConfig
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
  constructor(readonly input: CreateMediaCapturePipelineCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateMediaCapturePipelineCommandInput, CreateMediaCapturePipelineCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateMediaCapturePipelineCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "CreateMediaCapturePipelineCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateMediaCapturePipelineRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateMediaCapturePipelineResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "UCBuzzConsoleService",
        operation: "CreateMediaCapturePipeline",
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
  private serialize(input: CreateMediaCapturePipelineCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateMediaCapturePipelineCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateMediaCapturePipelineCommandOutput> {
    return de_CreateMediaCapturePipelineCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
