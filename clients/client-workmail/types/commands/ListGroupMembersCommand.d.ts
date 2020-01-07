import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";
import { ListGroupMembersRequest, ListGroupMembersResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListGroupMembersCommandInput = ListGroupMembersRequest;
export declare type ListGroupMembersCommandOutput = ListGroupMembersResponse & __MetadataBearer;
export declare class ListGroupMembersCommand extends $Command<ListGroupMembersCommandInput, ListGroupMembersCommandOutput, WorkMailClientResolvedConfig> {
    readonly input: ListGroupMembersCommandInput;
    constructor(input: ListGroupMembersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkMailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListGroupMembersCommandInput, ListGroupMembersCommandOutput>;
    private serialize;
    private deserialize;
}
