import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { ResumeSessionRequest, ResumeSessionResponse } from "../models/models_1";
import {
  deserializeAws_json1_1ResumeSessionCommand,
  serializeAws_json1_1ResumeSessionCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type ResumeSessionCommandInput = ResumeSessionRequest;
export type ResumeSessionCommandOutput = ResumeSessionResponse & __MetadataBearer;

/**
 * <p>Reconnects a session to an instance after it has been disconnected. Connections can be
 *    resumed for disconnected sessions, but not terminated sessions.</p>
 *          <note>
 *             <p>This command is primarily for use by client machines to automatically reconnect during
 *     intermittent network issues. It is not intended for any other use.</p>
 *          </note>
 */
export class ResumeSessionCommand extends $Command<
  ResumeSessionCommandInput,
  ResumeSessionCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ResumeSessionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ResumeSessionCommandInput, ResumeSessionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "ResumeSessionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ResumeSessionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ResumeSessionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ResumeSessionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ResumeSessionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ResumeSessionCommandOutput> {
    return deserializeAws_json1_1ResumeSessionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
