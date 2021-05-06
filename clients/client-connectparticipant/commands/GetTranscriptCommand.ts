import {
  ConnectParticipantClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ConnectParticipantClient";
import { GetTranscriptRequest, GetTranscriptResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetTranscriptCommand,
  serializeAws_restJson1GetTranscriptCommand,
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

export interface GetTranscriptCommandInput extends GetTranscriptRequest {}
export interface GetTranscriptCommandOutput extends GetTranscriptResponse, __MetadataBearer {}

/**
 * <p>Retrieves a transcript of the session, including details about any attachments. Note
 *             that ConnectionToken is used for invoking this API instead of ParticipantToken.</p>
 *         <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4
 *                 authentication</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectParticipantClient, GetTranscriptCommand } from "@aws-sdk/client-connectparticipant"; // ES Modules import
 * // const { ConnectParticipantClient, GetTranscriptCommand } = require("@aws-sdk/client-connectparticipant"); // CommonJS import
 * const client = new ConnectParticipantClient(config);
 * const command = new GetTranscriptCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTranscriptCommandInput} for command's `input` shape.
 * @see {@link GetTranscriptCommandOutput} for command's `response` shape.
 * @see {@link ConnectParticipantClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetTranscriptCommand extends $Command<
  GetTranscriptCommandInput,
  GetTranscriptCommandOutput,
  ConnectParticipantClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetTranscriptCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectParticipantClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetTranscriptCommandInput, GetTranscriptCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectParticipantClient";
    const commandName = "GetTranscriptCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetTranscriptRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetTranscriptResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetTranscriptCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetTranscriptCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetTranscriptCommandOutput> {
    return deserializeAws_restJson1GetTranscriptCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
