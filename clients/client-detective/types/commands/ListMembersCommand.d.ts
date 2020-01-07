import { DetectiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DetectiveClient";
import { ListMembersRequest, ListMembersResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListMembersCommandInput = ListMembersRequest;
export declare type ListMembersCommandOutput = ListMembersResponse & __MetadataBearer;
export declare class ListMembersCommand extends $Command<ListMembersCommandInput, ListMembersCommandOutput, DetectiveClientResolvedConfig> {
    readonly input: ListMembersCommandInput;
    constructor(input: ListMembersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DetectiveClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListMembersCommandInput, ListMembersCommandOutput>;
    private serialize;
    private deserialize;
}
