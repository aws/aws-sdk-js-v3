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
  StartSpeechSynthesisTaskInput,
  StartSpeechSynthesisTaskInputFilterSensitiveLog,
  StartSpeechSynthesisTaskOutput,
  StartSpeechSynthesisTaskOutputFilterSensitiveLog,
} from "../models/models_0";
import { PollyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PollyClient";
import {
  deserializeAws_restJson1StartSpeechSynthesisTaskCommand,
  serializeAws_restJson1StartSpeechSynthesisTaskCommand,
} from "../protocols/Aws_restJson1";

export interface StartSpeechSynthesisTaskCommandInput extends StartSpeechSynthesisTaskInput {}
export interface StartSpeechSynthesisTaskCommandOutput extends StartSpeechSynthesisTaskOutput, __MetadataBearer {}

/**
 * <p>Allows the creation of an asynchronous synthesis task, by starting a
 *       new <code>SpeechSynthesisTask</code>. This operation requires all the
 *       standard information needed for speech synthesis, plus the name of an
 *       Amazon S3 bucket for the service to store the output of the synthesis task
 *       and two optional parameters (<code>OutputS3KeyPrefix</code> and
 *         <code>SnsTopicArn</code>). Once the synthesis task is created, this
 *       operation will return a <code>SpeechSynthesisTask</code> object, which
 *       will include an identifier of this task as well as the current status. The
 *         <code>SpeechSynthesisTask</code> object is available for 72 hours after
 *       starting the asynchronous synthesis task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PollyClient, StartSpeechSynthesisTaskCommand } from "@aws-sdk/client-polly"; // ES Modules import
 * // const { PollyClient, StartSpeechSynthesisTaskCommand } = require("@aws-sdk/client-polly"); // CommonJS import
 * const client = new PollyClient(config);
 * const command = new StartSpeechSynthesisTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartSpeechSynthesisTaskCommandInput} for command's `input` shape.
 * @see {@link StartSpeechSynthesisTaskCommandOutput} for command's `response` shape.
 * @see {@link PollyClientResolvedConfig | config} for PollyClient's `config` shape.
 *
 */
export class StartSpeechSynthesisTaskCommand extends $Command<
  StartSpeechSynthesisTaskCommandInput,
  StartSpeechSynthesisTaskCommandOutput,
  PollyClientResolvedConfig
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

  constructor(readonly input: StartSpeechSynthesisTaskCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PollyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartSpeechSynthesisTaskCommandInput, StartSpeechSynthesisTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartSpeechSynthesisTaskCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PollyClient";
    const commandName = "StartSpeechSynthesisTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartSpeechSynthesisTaskInputFilterSensitiveLog,
      outputFilterSensitiveLog: StartSpeechSynthesisTaskOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartSpeechSynthesisTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartSpeechSynthesisTaskCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartSpeechSynthesisTaskCommandOutput> {
    return deserializeAws_restJson1StartSpeechSynthesisTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
