import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { SendInvitationRequest, SendInvitationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SendInvitationCommandInput = SendInvitationRequest;
export declare type SendInvitationCommandOutput = SendInvitationResponse & __MetadataBearer;
export declare class SendInvitationCommand extends $Command<SendInvitationCommandInput, SendInvitationCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: SendInvitationCommandInput;
    constructor(input: SendInvitationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SendInvitationCommandInput, SendInvitationCommandOutput>;
    private serialize;
    private deserialize;
}
