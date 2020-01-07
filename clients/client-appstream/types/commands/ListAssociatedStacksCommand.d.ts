import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { ListAssociatedStacksRequest, ListAssociatedStacksResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListAssociatedStacksCommandInput = ListAssociatedStacksRequest;
export declare type ListAssociatedStacksCommandOutput = ListAssociatedStacksResult & __MetadataBearer;
export declare class ListAssociatedStacksCommand extends $Command<ListAssociatedStacksCommandInput, ListAssociatedStacksCommandOutput, AppStreamClientResolvedConfig> {
    readonly input: ListAssociatedStacksCommandInput;
    constructor(input: ListAssociatedStacksCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AppStreamClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAssociatedStacksCommandInput, ListAssociatedStacksCommandOutput>;
    private serialize;
    private deserialize;
}
