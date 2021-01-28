import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { DisassociateSkillGroupFromRoomRequest, DisassociateSkillGroupFromRoomResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DisassociateSkillGroupFromRoomCommand,
  serializeAws_json1_1DisassociateSkillGroupFromRoomCommand,
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

export type DisassociateSkillGroupFromRoomCommandInput = DisassociateSkillGroupFromRoomRequest;
export type DisassociateSkillGroupFromRoomCommandOutput = DisassociateSkillGroupFromRoomResponse & __MetadataBearer;

/**
 * <p>Disassociates a skill group from a specified room. This disables all skills in the
 *          skill group on all devices in the room.</p>
 */
export class DisassociateSkillGroupFromRoomCommand extends $Command<
  DisassociateSkillGroupFromRoomCommandInput,
  DisassociateSkillGroupFromRoomCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateSkillGroupFromRoomCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateSkillGroupFromRoomCommandInput, DisassociateSkillGroupFromRoomCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "DisassociateSkillGroupFromRoomCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateSkillGroupFromRoomRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateSkillGroupFromRoomResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisassociateSkillGroupFromRoomCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DisassociateSkillGroupFromRoomCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateSkillGroupFromRoomCommandOutput> {
    return deserializeAws_json1_1DisassociateSkillGroupFromRoomCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
