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

import { ChimeSDKMeetingsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKMeetingsClient";
import { CreateMeetingWithAttendeesRequest, CreateMeetingWithAttendeesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateMeetingWithAttendeesCommand,
  serializeAws_restJson1CreateMeetingWithAttendeesCommand,
} from "../protocols/Aws_restJson1";

export interface CreateMeetingWithAttendeesCommandInput extends CreateMeetingWithAttendeesRequest {}
export interface CreateMeetingWithAttendeesCommandOutput extends CreateMeetingWithAttendeesResponse, __MetadataBearer {}

/**
 * <p>
 *            Creates a new Amazon Chime SDK meeting in the specified media Region, with attendees. For more information about specifying media Regions, see
 *            <a href="https://docs.aws.amazon.com/chime/latest/dg/chime-sdk-meetings-regions.html">Amazon Chime SDK Media Regions</a>
 *            in the <i>Amazon Chime Developer Guide</i>. For more information about the Amazon Chime SDK, see
 *            <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a>
 *            in the <i>Amazon Chime Developer Guide</i>.
 *        </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMeetingsClient, CreateMeetingWithAttendeesCommand } from "@aws-sdk/client-chime-sdk-meetings"; // ES Modules import
 * // const { ChimeSDKMeetingsClient, CreateMeetingWithAttendeesCommand } = require("@aws-sdk/client-chime-sdk-meetings"); // CommonJS import
 * const client = new ChimeSDKMeetingsClient(config);
 * const command = new CreateMeetingWithAttendeesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateMeetingWithAttendeesCommandInput} for command's `input` shape.
 * @see {@link CreateMeetingWithAttendeesCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMeetingsClientResolvedConfig | config} for ChimeSDKMeetingsClient's `config` shape.
 *
 */
export class CreateMeetingWithAttendeesCommand extends $Command<
  CreateMeetingWithAttendeesCommandInput,
  CreateMeetingWithAttendeesCommandOutput,
  ChimeSDKMeetingsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateMeetingWithAttendeesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeSDKMeetingsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateMeetingWithAttendeesCommandInput, CreateMeetingWithAttendeesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKMeetingsClient";
    const commandName = "CreateMeetingWithAttendeesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateMeetingWithAttendeesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateMeetingWithAttendeesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateMeetingWithAttendeesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateMeetingWithAttendeesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateMeetingWithAttendeesCommandOutput> {
    return deserializeAws_restJson1CreateMeetingWithAttendeesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
