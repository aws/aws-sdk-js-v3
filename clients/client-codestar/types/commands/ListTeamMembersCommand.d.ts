import { CodeStarClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeStarClient";
import { ListTeamMembersRequest, ListTeamMembersResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListTeamMembersCommandInput = ListTeamMembersRequest;
export declare type ListTeamMembersCommandOutput = ListTeamMembersResult & __MetadataBearer;
export declare class ListTeamMembersCommand extends $Command<ListTeamMembersCommandInput, ListTeamMembersCommandOutput, CodeStarClientResolvedConfig> {
    readonly input: ListTeamMembersCommandInput;
    constructor(input: ListTeamMembersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeStarClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTeamMembersCommandInput, ListTeamMembersCommandOutput>;
    private serialize;
    private deserialize;
}
