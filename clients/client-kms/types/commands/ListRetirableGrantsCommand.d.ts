import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { ListGrantsResponse, ListRetirableGrantsRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListRetirableGrantsCommandInput = ListRetirableGrantsRequest;
export declare type ListRetirableGrantsCommandOutput = ListGrantsResponse & __MetadataBearer;
export declare class ListRetirableGrantsCommand extends $Command<ListRetirableGrantsCommandInput, ListRetirableGrantsCommandOutput, KMSClientResolvedConfig> {
    readonly input: ListRetirableGrantsCommandInput;
    constructor(input: ListRetirableGrantsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListRetirableGrantsCommandInput, ListRetirableGrantsCommandOutput>;
    private serialize;
    private deserialize;
}
