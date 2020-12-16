import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { CreateMeetingDialOutRequest, CreateMeetingDialOutResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateMeetingDialOutCommand,
  serializeAws_restJson1CreateMeetingDialOutCommand,
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

export type CreateMeetingDialOutCommandInput = CreateMeetingDialOutRequest;
export type CreateMeetingDialOutCommandOutput = CreateMeetingDialOutResponse & __MetadataBearer;

/**
 * <p>Uses the join token and call metadata in a meeting request (From number, To number, and so forth) to initiate an outbound call to a
 *          public switched telephone network (PSTN) and joins them into Chime meeting. Also ensures that the From number belongs to the
 *          customer.</p>
 *
 *          <p>To play welcome audio or implement an interactive voice response (IVR), use the <code>CreateSipMediaApplicationCall</code> API with
 *          the corresponding SIP media application ID.</p>
 */
export class CreateMeetingDialOutCommand extends $Command<
  CreateMeetingDialOutCommandInput,
  CreateMeetingDialOutCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateMeetingDialOutCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateMeetingDialOutCommandInput, CreateMeetingDialOutCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "CreateMeetingDialOutCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateMeetingDialOutRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateMeetingDialOutResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateMeetingDialOutCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateMeetingDialOutCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateMeetingDialOutCommandOutput> {
    return deserializeAws_restJson1CreateMeetingDialOutCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
