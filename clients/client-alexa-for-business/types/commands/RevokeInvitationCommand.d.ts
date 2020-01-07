import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { RevokeInvitationRequest, RevokeInvitationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RevokeInvitationCommandInput = RevokeInvitationRequest;
export declare type RevokeInvitationCommandOutput = RevokeInvitationResponse & __MetadataBearer;
export declare class RevokeInvitationCommand extends $Command<RevokeInvitationCommandInput, RevokeInvitationCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: RevokeInvitationCommandInput;
    constructor(input: RevokeInvitationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RevokeInvitationCommandInput, RevokeInvitationCommandOutput>;
    private serialize;
    private deserialize;
}
