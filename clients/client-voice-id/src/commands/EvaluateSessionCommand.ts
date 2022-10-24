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
  EvaluateSessionRequest,
  EvaluateSessionRequestFilterSensitiveLog,
  EvaluateSessionResponse,
  EvaluateSessionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0EvaluateSessionCommand,
  serializeAws_json1_0EvaluateSessionCommand,
} from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, VoiceIDClientResolvedConfig } from "../VoiceIDClient";

export interface EvaluateSessionCommandInput extends EvaluateSessionRequest {}
export interface EvaluateSessionCommandOutput extends EvaluateSessionResponse, __MetadataBearer {}

/**
 * <p>Evaluates a specified session based on audio data accumulated during a streaming
 *             Amazon Connect Voice ID call.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VoiceIDClient, EvaluateSessionCommand } from "@aws-sdk/client-voice-id"; // ES Modules import
 * // const { VoiceIDClient, EvaluateSessionCommand } = require("@aws-sdk/client-voice-id"); // CommonJS import
 * const client = new VoiceIDClient(config);
 * const command = new EvaluateSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EvaluateSessionCommandInput} for command's `input` shape.
 * @see {@link EvaluateSessionCommandOutput} for command's `response` shape.
 * @see {@link VoiceIDClientResolvedConfig | config} for VoiceIDClient's `config` shape.
 *
 */
export class EvaluateSessionCommand extends $Command<
  EvaluateSessionCommandInput,
  EvaluateSessionCommandOutput,
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

  constructor(readonly input: EvaluateSessionCommandInput) {
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
  ): Handler<EvaluateSessionCommandInput, EvaluateSessionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, EvaluateSessionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "VoiceIDClient";
    const commandName = "EvaluateSessionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: EvaluateSessionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: EvaluateSessionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: EvaluateSessionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0EvaluateSessionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<EvaluateSessionCommandOutput> {
    return deserializeAws_json1_0EvaluateSessionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
