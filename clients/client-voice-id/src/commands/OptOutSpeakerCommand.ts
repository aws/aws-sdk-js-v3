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

import { OptOutSpeakerRequest, OptOutSpeakerResponse } from "../models/models_0";
import {
  deserializeAws_json1_0OptOutSpeakerCommand,
  serializeAws_json1_0OptOutSpeakerCommand,
} from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, VoiceIDClientResolvedConfig } from "../VoiceIDClient";

export interface OptOutSpeakerCommandInput extends OptOutSpeakerRequest {}
export interface OptOutSpeakerCommandOutput extends OptOutSpeakerResponse, __MetadataBearer {}

/**
 * <p>Opts out a speaker from Voice ID system. A speaker can be opted out regardless of whether or not they
 *             already exist in the system. If they don't yet exist, a new speaker is created in an opted out state.
 *             If they already exist, their existing status is overridden and they are opted out. Enrollment and
 *             evaluation authentication requests are rejected for opted out speakers, and opted out speakers have
 *             no voice embeddings stored in the system.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VoiceIDClient, OptOutSpeakerCommand } from "@aws-sdk/client-voice-id"; // ES Modules import
 * // const { VoiceIDClient, OptOutSpeakerCommand } = require("@aws-sdk/client-voice-id"); // CommonJS import
 * const client = new VoiceIDClient(config);
 * const command = new OptOutSpeakerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link OptOutSpeakerCommandInput} for command's `input` shape.
 * @see {@link OptOutSpeakerCommandOutput} for command's `response` shape.
 * @see {@link VoiceIDClientResolvedConfig | config} for VoiceIDClient's `config` shape.
 *
 */
export class OptOutSpeakerCommand extends $Command<
  OptOutSpeakerCommandInput,
  OptOutSpeakerCommandOutput,
  VoiceIDClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "VoiceIDClient";
    const commandName = "OptOutSpeakerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: OptOutSpeakerRequest.filterSensitiveLog,
      outputFilterSensitiveLog: OptOutSpeakerResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: OptOutSpeakerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0OptOutSpeakerCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<OptOutSpeakerCommandOutput> {
    return deserializeAws_json1_0OptOutSpeakerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
