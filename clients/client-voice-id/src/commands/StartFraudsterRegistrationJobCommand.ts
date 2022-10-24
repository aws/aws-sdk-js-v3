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
  StartFraudsterRegistrationJobRequest,
  StartFraudsterRegistrationJobRequestFilterSensitiveLog,
  StartFraudsterRegistrationJobResponse,
  StartFraudsterRegistrationJobResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0StartFraudsterRegistrationJobCommand,
  serializeAws_json1_0StartFraudsterRegistrationJobCommand,
} from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, VoiceIDClientResolvedConfig } from "../VoiceIDClient";

export interface StartFraudsterRegistrationJobCommandInput extends StartFraudsterRegistrationJobRequest {}
export interface StartFraudsterRegistrationJobCommandOutput
  extends StartFraudsterRegistrationJobResponse,
    __MetadataBearer {}

/**
 * <p>Starts a new batch fraudster registration job using provided details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VoiceIDClient, StartFraudsterRegistrationJobCommand } from "@aws-sdk/client-voice-id"; // ES Modules import
 * // const { VoiceIDClient, StartFraudsterRegistrationJobCommand } = require("@aws-sdk/client-voice-id"); // CommonJS import
 * const client = new VoiceIDClient(config);
 * const command = new StartFraudsterRegistrationJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartFraudsterRegistrationJobCommandInput} for command's `input` shape.
 * @see {@link StartFraudsterRegistrationJobCommandOutput} for command's `response` shape.
 * @see {@link VoiceIDClientResolvedConfig | config} for VoiceIDClient's `config` shape.
 *
 */
export class StartFraudsterRegistrationJobCommand extends $Command<
  StartFraudsterRegistrationJobCommandInput,
  StartFraudsterRegistrationJobCommandOutput,
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

  constructor(readonly input: StartFraudsterRegistrationJobCommandInput) {
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
  ): Handler<StartFraudsterRegistrationJobCommandInput, StartFraudsterRegistrationJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartFraudsterRegistrationJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "VoiceIDClient";
    const commandName = "StartFraudsterRegistrationJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartFraudsterRegistrationJobRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartFraudsterRegistrationJobResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartFraudsterRegistrationJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0StartFraudsterRegistrationJobCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartFraudsterRegistrationJobCommandOutput> {
    return deserializeAws_json1_0StartFraudsterRegistrationJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
