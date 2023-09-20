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
  StartSpeakerSearchTaskRequest,
  StartSpeakerSearchTaskRequestFilterSensitiveLog,
  StartSpeakerSearchTaskResponse,
} from "../models/models_0";
import { de_StartSpeakerSearchTaskCommand, se_StartSpeakerSearchTaskCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartSpeakerSearchTaskCommand}.
 */
export interface StartSpeakerSearchTaskCommandInput extends StartSpeakerSearchTaskRequest {}
/**
 * @public
 *
 * The output of {@link StartSpeakerSearchTaskCommand}.
 */
export interface StartSpeakerSearchTaskCommandOutput extends StartSpeakerSearchTaskResponse, __MetadataBearer {}

/**
 * @public
 * <p>Starts a speaker search task.</p>
 *          <important>
 *             <p>Before starting any speaker search tasks, you must provide all notices and obtain all consents from the speaker as required under applicable privacy and biometrics laws, and as required under the
 *          <a href="https://aws.amazon.com/service-terms/">AWS service terms</a> for the Amazon Chime SDK.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMediaPipelinesClient, StartSpeakerSearchTaskCommand } from "@aws-sdk/client-chime-sdk-media-pipelines"; // ES Modules import
 * // const { ChimeSDKMediaPipelinesClient, StartSpeakerSearchTaskCommand } = require("@aws-sdk/client-chime-sdk-media-pipelines"); // CommonJS import
 * const client = new ChimeSDKMediaPipelinesClient(config);
 * const input = { // StartSpeakerSearchTaskRequest
 *   Identifier: "STRING_VALUE", // required
 *   VoiceProfileDomainArn: "STRING_VALUE", // required
 *   KinesisVideoStreamSourceTaskConfiguration: { // KinesisVideoStreamSourceTaskConfiguration
 *     StreamArn: "STRING_VALUE", // required
 *     ChannelId: Number("int"), // required
 *     FragmentNumber: "STRING_VALUE",
 *   },
 *   ClientRequestToken: "STRING_VALUE",
 * };
 * const command = new StartSpeakerSearchTaskCommand(input);
 * const response = await client.send(command);
 * // { // StartSpeakerSearchTaskResponse
 * //   SpeakerSearchTask: { // SpeakerSearchTask
 * //     SpeakerSearchTaskId: "STRING_VALUE",
 * //     SpeakerSearchTaskStatus: "NotStarted" || "Initializing" || "InProgress" || "Failed" || "Stopping" || "Stopped",
 * //     CreatedTimestamp: new Date("TIMESTAMP"),
 * //     UpdatedTimestamp: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param StartSpeakerSearchTaskCommandInput - {@link StartSpeakerSearchTaskCommandInput}
 * @returns {@link StartSpeakerSearchTaskCommandOutput}
 * @see {@link StartSpeakerSearchTaskCommandInput} for command's `input` shape.
 * @see {@link StartSpeakerSearchTaskCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMediaPipelinesClientResolvedConfig | config} for ChimeSDKMediaPipelinesClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the
 *          resource.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system.</p>
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
export class StartSpeakerSearchTaskCommand extends $Command<
  StartSpeakerSearchTaskCommandInput,
  StartSpeakerSearchTaskCommandOutput,
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
  constructor(readonly input: StartSpeakerSearchTaskCommandInput) {
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
  ): Handler<StartSpeakerSearchTaskCommandInput, StartSpeakerSearchTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartSpeakerSearchTaskCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKMediaPipelinesClient";
    const commandName = "StartSpeakerSearchTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartSpeakerSearchTaskRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ChimeSDKMediaPipelinesService",
        operation: "StartSpeakerSearchTask",
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
  private serialize(input: StartSpeakerSearchTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartSpeakerSearchTaskCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartSpeakerSearchTaskCommandOutput> {
    return de_StartSpeakerSearchTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
