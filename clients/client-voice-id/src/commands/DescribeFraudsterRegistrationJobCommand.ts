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
  DescribeFraudsterRegistrationJobRequest,
  DescribeFraudsterRegistrationJobRequestFilterSensitiveLog,
  DescribeFraudsterRegistrationJobResponse,
  DescribeFraudsterRegistrationJobResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0DescribeFraudsterRegistrationJobCommand,
  serializeAws_json1_0DescribeFraudsterRegistrationJobCommand,
} from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, VoiceIDClientResolvedConfig } from "../VoiceIDClient";

export interface DescribeFraudsterRegistrationJobCommandInput extends DescribeFraudsterRegistrationJobRequest {}
export interface DescribeFraudsterRegistrationJobCommandOutput
  extends DescribeFraudsterRegistrationJobResponse,
    __MetadataBearer {}

/**
 * <p>Describes the specified fraudster registration job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VoiceIDClient, DescribeFraudsterRegistrationJobCommand } from "@aws-sdk/client-voice-id"; // ES Modules import
 * // const { VoiceIDClient, DescribeFraudsterRegistrationJobCommand } = require("@aws-sdk/client-voice-id"); // CommonJS import
 * const client = new VoiceIDClient(config);
 * const command = new DescribeFraudsterRegistrationJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFraudsterRegistrationJobCommandInput} for command's `input` shape.
 * @see {@link DescribeFraudsterRegistrationJobCommandOutput} for command's `response` shape.
 * @see {@link VoiceIDClientResolvedConfig | config} for VoiceIDClient's `config` shape.
 *
 */
export class DescribeFraudsterRegistrationJobCommand extends $Command<
  DescribeFraudsterRegistrationJobCommandInput,
  DescribeFraudsterRegistrationJobCommandOutput,
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

  constructor(readonly input: DescribeFraudsterRegistrationJobCommandInput) {
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
  ): Handler<DescribeFraudsterRegistrationJobCommandInput, DescribeFraudsterRegistrationJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeFraudsterRegistrationJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "VoiceIDClient";
    const commandName = "DescribeFraudsterRegistrationJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeFraudsterRegistrationJobRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeFraudsterRegistrationJobResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeFraudsterRegistrationJobCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_0DescribeFraudsterRegistrationJobCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeFraudsterRegistrationJobCommandOutput> {
    return deserializeAws_json1_0DescribeFraudsterRegistrationJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
