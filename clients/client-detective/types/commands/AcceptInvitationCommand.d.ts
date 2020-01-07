import { DetectiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DetectiveClient";
import { AcceptInvitationRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AcceptInvitationCommandInput = AcceptInvitationRequest;
export declare type AcceptInvitationCommandOutput = __MetadataBearer;
export declare class AcceptInvitationCommand extends $Command<AcceptInvitationCommandInput, AcceptInvitationCommandOutput, DetectiveClientResolvedConfig> {
    readonly input: AcceptInvitationCommandInput;
    constructor(input: AcceptInvitationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DetectiveClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AcceptInvitationCommandInput, AcceptInvitationCommandOutput>;
    private serialize;
    private deserialize;
}
