import { IvsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvsClient";
import { StopStreamRequest, StopStreamResponse } from "../models/models_0";
import {
  deserializeAws_restJson1StopStreamCommand,
  serializeAws_restJson1StopStreamCommand,
} from "../protocols/Aws_restJson1";
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

export type StopStreamCommandInput = StopStreamRequest;
export type StopStreamCommandOutput = StopStreamResponse & __MetadataBearer;

/**
 * <p>Disconnects the incoming RTMPS stream for the specified channel. Can be used in conjunction with <a>DeleteStreamKey</a> to
 *       prevent further streaming to a channel.</p>
 *          <note>
 *             <p>Many streaming client-software libraries automatically reconnect a dropped RTMPS
 *         session, so to stop the stream permanently, you may want to first revoke the
 *           <code>streamKey</code> attached to the channel.</p>
 *          </note>
 */
export class StopStreamCommand extends $Command<
  StopStreamCommandInput,
  StopStreamCommandOutput,
  IvsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StopStreamCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IvsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopStreamCommandInput, StopStreamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IvsClient";
    const commandName = "StopStreamCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopStreamRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StopStreamResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopStreamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StopStreamCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopStreamCommandOutput> {
    return deserializeAws_restJson1StopStreamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
