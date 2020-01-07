import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { ListGrantsRequest, ListGrantsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListGrantsCommandInput = ListGrantsRequest;
export declare type ListGrantsCommandOutput = ListGrantsResponse & __MetadataBearer;
export declare class ListGrantsCommand extends $Command<ListGrantsCommandInput, ListGrantsCommandOutput, KMSClientResolvedConfig> {
    readonly input: ListGrantsCommandInput;
    constructor(input: ListGrantsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListGrantsCommandInput, ListGrantsCommandOutput>;
    private serialize;
    private deserialize;
}
