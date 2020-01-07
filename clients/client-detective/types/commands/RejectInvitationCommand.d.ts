import { DetectiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DetectiveClient";
import { RejectInvitationRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RejectInvitationCommandInput = RejectInvitationRequest;
export declare type RejectInvitationCommandOutput = __MetadataBearer;
export declare class RejectInvitationCommand extends $Command<RejectInvitationCommandInput, RejectInvitationCommandOutput, DetectiveClientResolvedConfig> {
    readonly input: RejectInvitationCommandInput;
    constructor(input: RejectInvitationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DetectiveClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RejectInvitationCommandInput, RejectInvitationCommandOutput>;
    private serialize;
    private deserialize;
}
