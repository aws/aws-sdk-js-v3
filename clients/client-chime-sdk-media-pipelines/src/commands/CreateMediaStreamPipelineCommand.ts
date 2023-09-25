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

import {
  ChimeSDKMediaPipelinesClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChimeSDKMediaPipelinesClient";
import {
  CreateMediaStreamPipelineRequest,
  CreateMediaStreamPipelineRequestFilterSensitiveLog,
  CreateMediaStreamPipelineResponse,
  CreateMediaStreamPipelineResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateMediaStreamPipelineCommand, se_CreateMediaStreamPipelineCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateMediaStreamPipelineCommand}.
 */
export interface CreateMediaStreamPipelineCommandInput extends CreateMediaStreamPipelineRequest {}
/**
 * @public
 *
 * The output of {@link CreateMediaStreamPipelineCommand}.
 */
export interface CreateMediaStreamPipelineCommandOutput extends CreateMediaStreamPipelineResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a streaming media pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMediaPipelinesClient, CreateMediaStreamPipelineCommand } from "@aws-sdk/client-chime-sdk-media-pipelines"; // ES Modules import
 * // const { ChimeSDKMediaPipelinesClient, CreateMediaStreamPipelineCommand } = require("@aws-sdk/client-chime-sdk-media-pipelines"); // CommonJS import
 * const client = new ChimeSDKMediaPipelinesClient(config);
 * const input = { // CreateMediaStreamPipelineRequest
 *   Sources: [ // MediaStreamSourceList // required
 *     { // MediaStreamSource
 *       SourceType: "ChimeSdkMeeting", // required
 *       SourceArn: "STRING_VALUE", // required
 *     },
 *   ],
 *   Sinks: [ // MediaStreamSinkList // required
 *     { // MediaStreamSink
 *       SinkArn: "STRING_VALUE", // required
 *       SinkType: "KinesisVideoStreamPool", // required
 *       ReservedStreamCapacity: Number("int"), // required
 *       MediaStreamType: "MixedAudio" || "IndividualAudio", // required
 *     },
 *   ],
 *   ClientRequestToken: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateMediaStreamPipelineCommand(input);
 * const response = await client.send(command);
 * // { // CreateMediaStreamPipelineResponse
 * //   MediaStreamPipeline: { // MediaStreamPipeline
 * //     MediaPipelineId: "STRING_VALUE",
 * //     MediaPipelineArn: "STRING_VALUE",
 * //     CreatedTimestamp: new Date("TIMESTAMP"),
 * //     UpdatedTimestamp: new Date("TIMESTAMP"),
 * //     Status: "Initializing" || "InProgress" || "Failed" || "Stopping" || "Stopped" || "Paused" || "NotStarted",
 * //     Sources: [ // MediaStreamSourceList
 * //       { // MediaStreamSource
 * //         SourceType: "ChimeSdkMeeting", // required
 * //         SourceArn: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     Sinks: [ // MediaStreamSinkList
 * //       { // MediaStreamSink
 * //         SinkArn: "STRING_VALUE", // required
 * //         SinkType: "KinesisVideoStreamPool", // required
 * //         ReservedStreamCapacity: Number("int"), // required
 * //         MediaStreamType: "MixedAudio" || "IndividualAudio", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateMediaStreamPipelineCommandInput - {@link CreateMediaStreamPipelineCommandInput}
 * @returns {@link CreateMediaStreamPipelineCommandOutput}
 * @see {@link CreateMediaStreamPipelineCommandInput} for command's `input` shape.
 * @see {@link CreateMediaStreamPipelineCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMediaPipelinesClientResolvedConfig | config} for ChimeSDKMediaPipelinesClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system.</p>
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
 * @throws {@link ChimeSDKMediaPipelinesServiceException}
 * <p>Base exception class for all service exceptions from ChimeSDKMediaPipelines service.</p>
 *
 */
export class CreateMediaStreamPipelineCommand extends $Command<
  CreateMediaStreamPipelineCommandInput,
  CreateMediaStreamPipelineCommandOutput,
  ChimeSDKMediaPipelinesClientResolvedConfig
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
  constructor(readonly input: CreateMediaStreamPipelineCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeSDKMediaPipelinesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateMediaStreamPipelineCommandInput, CreateMediaStreamPipelineCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateMediaStreamPipelineCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKMediaPipelinesClient";
    const commandName = "CreateMediaStreamPipelineCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateMediaStreamPipelineRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateMediaStreamPipelineResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "ChimeSDKMediaPipelinesService",
        operation: "CreateMediaStreamPipeline",
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
  private serialize(input: CreateMediaStreamPipelineCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateMediaStreamPipelineCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateMediaStreamPipelineCommandOutput> {
    return de_CreateMediaStreamPipelineCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
