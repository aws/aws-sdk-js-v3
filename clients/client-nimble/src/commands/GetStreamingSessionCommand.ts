import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { GetStreamingSessionRequest, GetStreamingSessionResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetStreamingSessionCommand,
  serializeAws_restJson1GetStreamingSessionCommand,
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

export interface GetStreamingSessionCommandInput extends GetStreamingSessionRequest {}
export interface GetStreamingSessionCommandOutput extends GetStreamingSessionResponse, __MetadataBearer {}

/**
 * <p>Gets StreamingSession resource.</p> <p>Invoke this operation to poll for a streaming session state while creating or deleting a session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, GetStreamingSessionCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, GetStreamingSessionCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new GetStreamingSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetStreamingSessionCommandInput} for command's `input` shape.
 * @see {@link GetStreamingSessionCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetStreamingSessionCommand extends $Command<
  GetStreamingSessionCommandInput,
  GetStreamingSessionCommandOutput,
  NimbleClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetStreamingSessionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NimbleClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetStreamingSessionCommandInput, GetStreamingSessionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NimbleClient";
    const commandName = "GetStreamingSessionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetStreamingSessionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetStreamingSessionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetStreamingSessionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetStreamingSessionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetStreamingSessionCommandOutput> {
    return deserializeAws_restJson1GetStreamingSessionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
