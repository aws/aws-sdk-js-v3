import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListRoleTagsRequest, ListRoleTagsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListRoleTagsCommandInput = ListRoleTagsRequest;
export declare type ListRoleTagsCommandOutput = ListRoleTagsResponse & __MetadataBearer;
export declare class ListRoleTagsCommand extends $Command<ListRoleTagsCommandInput, ListRoleTagsCommandOutput, IAMClientResolvedConfig> {
    readonly input: ListRoleTagsCommandInput;
    constructor(input: ListRoleTagsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListRoleTagsCommandInput, ListRoleTagsCommandOutput>;
    private serialize;
    private deserialize;
}
