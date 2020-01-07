import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListUserTagsRequest, ListUserTagsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListUserTagsCommandInput = ListUserTagsRequest;
export declare type ListUserTagsCommandOutput = ListUserTagsResponse & __MetadataBearer;
export declare class ListUserTagsCommand extends $Command<ListUserTagsCommandInput, ListUserTagsCommandOutput, IAMClientResolvedConfig> {
    readonly input: ListUserTagsCommandInput;
    constructor(input: ListUserTagsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListUserTagsCommandInput, ListUserTagsCommandOutput>;
    private serialize;
    private deserialize;
}
