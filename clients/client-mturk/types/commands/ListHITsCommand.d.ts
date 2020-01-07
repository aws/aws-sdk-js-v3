import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { ListHITsRequest, ListHITsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListHITsCommandInput = ListHITsRequest;
export declare type ListHITsCommandOutput = ListHITsResponse & __MetadataBearer;
export declare class ListHITsCommand extends $Command<ListHITsCommandInput, ListHITsCommandOutput, MTurkClientResolvedConfig> {
    readonly input: ListHITsCommandInput;
    constructor(input: ListHITsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MTurkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListHITsCommandInput, ListHITsCommandOutput>;
    private serialize;
    private deserialize;
}
