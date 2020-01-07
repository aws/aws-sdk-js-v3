import { DetectiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DetectiveClient";
import { ListInvitationsRequest, ListInvitationsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListInvitationsCommandInput = ListInvitationsRequest;
export declare type ListInvitationsCommandOutput = ListInvitationsResponse & __MetadataBearer;
export declare class ListInvitationsCommand extends $Command<ListInvitationsCommandInput, ListInvitationsCommandOutput, DetectiveClientResolvedConfig> {
    readonly input: ListInvitationsCommandInput;
    constructor(input: ListInvitationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DetectiveClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListInvitationsCommandInput, ListInvitationsCommandOutput>;
    private serialize;
    private deserialize;
}
