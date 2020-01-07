import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { ListResourceTagsRequest, ListResourceTagsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListResourceTagsCommandInput = ListResourceTagsRequest;
export declare type ListResourceTagsCommandOutput = ListResourceTagsResponse & __MetadataBearer;
export declare class ListResourceTagsCommand extends $Command<ListResourceTagsCommandInput, ListResourceTagsCommandOutput, KMSClientResolvedConfig> {
    readonly input: ListResourceTagsCommandInput;
    constructor(input: ListResourceTagsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListResourceTagsCommandInput, ListResourceTagsCommandOutput>;
    private serialize;
    private deserialize;
}
