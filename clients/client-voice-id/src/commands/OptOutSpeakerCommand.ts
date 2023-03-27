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

import {
  OptOutSpeakerRequest,
  OptOutSpeakerRequestFilterSensitiveLog,
  OptOutSpeakerResponse,
  OptOutSpeakerResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0OptOutSpeakerCommand,
  serializeAws_json1_0OptOutSpeakerCommand,
} from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, VoiceIDClientResolvedConfig } from "../VoiceIDClient";

/**
 * @public
 *
 * The input for {@link OptOutSpeakerCommand}.
 */
export interface OptOutSpeakerCommandInput extends OptOutSpeakerRequest {}
/**
 * @public
 *
 * The output of {@link OptOutSpeakerCommand}.
 */
export interface OptOutSpeakerCommandOutput extends OptOutSpeakerResponse, __MetadataBearer {}

/**
 * @public
 * <p>Opts out a speaker from Voice ID. A speaker can be opted out regardless of whether or
 *             not they already exist in Voice ID. If they don't yet exist, a new speaker is created
 *             in an opted out state. If they already exist, their existing status is overridden and
 *             they are opted out. Enrollment and evaluation authentication requests are rejected for
 *             opted out speakers, and opted out speakers have no voice embeddings stored in
 *             Voice ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VoiceIDClient, OptOutSpeakerCommand } from "@aws-sdk/client-voice-id"; // ES Modules import
 * // const { VoiceIDClient, OptOutSpeakerCommand } = require("@aws-sdk/client-voice-id"); // CommonJS import
 * const client = new VoiceIDClient(config);
 * const input = { // OptOutSpeakerRequest
 *   DomainId: "STRING_VALUE", // required
 *   SpeakerId: "STRING_VALUE", // required
 * };
 * const command = new OptOutSpeakerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param OptOutSpeakerCommandInput - {@link OptOutSpeakerCommandInput}
 * @returns {@link OptOutSpeakerCommandOutput}
 * @see {@link OptOutSpeakerCommandInput} for command's `input` shape.
 * @see {@link OptOutSpeakerCommandOutput} for command's `response` shape.
 * @see {@link VoiceIDClientResolvedConfig | config} for VoiceIDClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action. Check the error message
 *             and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request failed due to a conflict. Check the <code>ConflictType</code> and error
 *             message for more details.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed due to an unknown error on the server side.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found. Check the <code>ResourceType</code> and error
 *             message for more details.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeded the service quota. Refer to <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html#voiceid-quotas">Voice ID Service Quotas</a> and try your request again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. Please slow down your request rate.
 *             Refer to <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html##voiceid-api-quotas">
 *                 Amazon Connect Voice ID Service API throttling quotas </a> and try your
 *             request again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed one or more validations; check the error message for more
 *             details.</p>
 *
 *
 */
export class OptOutSpeakerCommand extends $Command<
  OptOutSpeakerCommandInput,
  OptOutSpeakerCommandOutput,
  VoiceIDClientResolvedConfig
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
  constructor(readonly input: OptOutSpeakerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: VoiceIDClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<OptOutSpeakerCommandInput, OptOutSpeakerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, OptOutSpeakerCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "VoiceIDClient";
    const commandName = "OptOutSpeakerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: OptOutSpeakerRequestFilterSensitiveLog,
      outputFilterSensitiveLog: OptOutSpeakerResponseFilterSensitiveLog,
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
  private serialize(input: OptOutSpeakerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0OptOutSpeakerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<OptOutSpeakerCommandOutput> {
    return deserializeAws_json1_0OptOutSpeakerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
