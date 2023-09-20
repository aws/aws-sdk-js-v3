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

import { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import {
  UpdateVoiceProfileRequest,
  UpdateVoiceProfileResponse,
  UpdateVoiceProfileResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_UpdateVoiceProfileCommand, se_UpdateVoiceProfileCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateVoiceProfileCommand}.
 */
export interface UpdateVoiceProfileCommandInput extends UpdateVoiceProfileRequest {}
/**
 * @public
 *
 * The output of {@link UpdateVoiceProfileCommand}.
 */
export interface UpdateVoiceProfileCommandOutput extends UpdateVoiceProfileResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates the specified voice profile’s voice print and refreshes its expiration timestamp.</p>
 *          <important>
 *             <p>As a condition of using this feature, you acknowledge that the collection, use, storage, and retention of
 *             your caller’s biometric identifiers and biometric information (“biometric data”) in the form of a digital voiceprint
 *             requires the caller’s informed consent via a written release. Such consent is required under various state laws,
 *             including biometrics laws in Illinois, Texas, Washington and other state privacy laws.</p>
 *             <p>You must provide a written release to each caller through a process that clearly reflects each caller’s informed
 *             consent before using Amazon Chime SDK Voice Insights service, as required under the terms of your agreement
 *             with AWS governing your use of the service.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, UpdateVoiceProfileCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, UpdateVoiceProfileCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // UpdateVoiceProfileRequest
 *   VoiceProfileId: "STRING_VALUE", // required
 *   SpeakerSearchTaskId: "STRING_VALUE", // required
 * };
 * const command = new UpdateVoiceProfileCommand(input);
 * const response = await client.send(command);
 * // { // UpdateVoiceProfileResponse
 * //   VoiceProfile: { // VoiceProfile
 * //     VoiceProfileId: "STRING_VALUE",
 * //     VoiceProfileArn: "STRING_VALUE",
 * //     VoiceProfileDomainId: "STRING_VALUE",
 * //     CreatedTimestamp: new Date("TIMESTAMP"),
 * //     UpdatedTimestamp: new Date("TIMESTAMP"),
 * //     ExpirationTimestamp: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateVoiceProfileCommandInput - {@link UpdateVoiceProfileCommandInput}
 * @returns {@link UpdateVoiceProfileCommandOutput}
 * @see {@link UpdateVoiceProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateVoiceProfileCommandOutput} for command's `response` shape.
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
 * @throws {@link GoneException} (client fault)
 *  <p>Access to the target resource is no longer available at the origin server. This condition is likely to be permanent.</p>
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
export class UpdateVoiceProfileCommand extends $Command<
  UpdateVoiceProfileCommandInput,
  UpdateVoiceProfileCommandOutput,
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
  constructor(readonly input: UpdateVoiceProfileCommandInput) {
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
  ): Handler<UpdateVoiceProfileCommandInput, UpdateVoiceProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateVoiceProfileCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKVoiceClient";
    const commandName = "UpdateVoiceProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: UpdateVoiceProfileResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "ChimeSDKTelephonyService",
        operation: "UpdateVoiceProfile",
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
  private serialize(input: UpdateVoiceProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateVoiceProfileCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateVoiceProfileCommandOutput> {
    return de_UpdateVoiceProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
