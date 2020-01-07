import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { ListTaskExecutionsRequest, ListTaskExecutionsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListTaskExecutionsCommandInput = ListTaskExecutionsRequest;
export declare type ListTaskExecutionsCommandOutput = ListTaskExecutionsResponse & __MetadataBearer;
export declare class ListTaskExecutionsCommand extends $Command<ListTaskExecutionsCommandInput, ListTaskExecutionsCommandOutput, DataSyncClientResolvedConfig> {
    readonly input: ListTaskExecutionsCommandInput;
    constructor(input: ListTaskExecutionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataSyncClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTaskExecutionsCommandInput, ListTaskExecutionsCommandOutput>;
    private serialize;
    private deserialize;
}
