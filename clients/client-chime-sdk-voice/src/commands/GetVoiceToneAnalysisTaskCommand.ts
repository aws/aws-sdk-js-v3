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

import { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import { GetVoiceToneAnalysisTaskRequest, GetVoiceToneAnalysisTaskResponse } from "../models/models_0";
import { de_GetVoiceToneAnalysisTaskCommand, se_GetVoiceToneAnalysisTaskCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetVoiceToneAnalysisTaskCommand}.
 */
export interface GetVoiceToneAnalysisTaskCommandInput extends GetVoiceToneAnalysisTaskRequest {}
/**
 * @public
 *
 * The output of {@link GetVoiceToneAnalysisTaskCommand}.
 */
export interface GetVoiceToneAnalysisTaskCommandOutput extends GetVoiceToneAnalysisTaskResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the details of a voice tone analysis task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, GetVoiceToneAnalysisTaskCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, GetVoiceToneAnalysisTaskCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // GetVoiceToneAnalysisTaskRequest
 *   VoiceConnectorId: "STRING_VALUE", // required
 *   VoiceToneAnalysisTaskId: "STRING_VALUE", // required
 *   IsCaller: true || false, // required
 * };
 * const command = new GetVoiceToneAnalysisTaskCommand(input);
 * const response = await client.send(command);
 * // { // GetVoiceToneAnalysisTaskResponse
 * //   VoiceToneAnalysisTask: { // VoiceToneAnalysisTask
 * //     VoiceToneAnalysisTaskId: "STRING_VALUE",
 * //     VoiceToneAnalysisTaskStatus: "STRING_VALUE",
 * //     CallDetails: { // CallDetails
 * //       VoiceConnectorId: "STRING_VALUE",
 * //       TransactionId: "STRING_VALUE",
 * //       IsCaller: true || false,
 * //     },
 * //     CreatedTimestamp: new Date("TIMESTAMP"),
 * //     UpdatedTimestamp: new Date("TIMESTAMP"),
 * //     StartedTimestamp: new Date("TIMESTAMP"),
 * //     StatusMessage: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetVoiceToneAnalysisTaskCommandInput - {@link GetVoiceToneAnalysisTaskCommandInput}
 * @returns {@link GetVoiceToneAnalysisTaskCommandOutput}
 * @see {@link GetVoiceToneAnalysisTaskCommandInput} for command's `input` shape.
 * @see {@link GetVoiceToneAnalysisTaskCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKVoiceClientResolvedConfig | config} for ChimeSDKVoiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have the permissions needed to run this action.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Multiple instances of the same request were made simultaneously.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The requested resource couldn't be found.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The number of customer requests exceeds the request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client isn't authorized to request a resource.</p>
 *
 * @throws {@link ChimeSDKVoiceServiceException}
 * <p>Base exception class for all service exceptions from ChimeSDKVoice service.</p>
 *
 */
export class GetVoiceToneAnalysisTaskCommand extends $Command<
  GetVoiceToneAnalysisTaskCommandInput,
  GetVoiceToneAnalysisTaskCommandOutput,
  ChimeSDKVoiceClientResolvedConfig
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
  constructor(readonly input: GetVoiceToneAnalysisTaskCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeSDKVoiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetVoiceToneAnalysisTaskCommandInput, GetVoiceToneAnalysisTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetVoiceToneAnalysisTaskCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKVoiceClient";
    const commandName = "GetVoiceToneAnalysisTaskCommand";
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
  private serialize(input: GetVoiceToneAnalysisTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetVoiceToneAnalysisTaskCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetVoiceToneAnalysisTaskCommandOutput> {
    return de_GetVoiceToneAnalysisTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
