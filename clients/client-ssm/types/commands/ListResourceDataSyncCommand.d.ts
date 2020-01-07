import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { ListResourceDataSyncRequest, ListResourceDataSyncResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListResourceDataSyncCommandInput = ListResourceDataSyncRequest;
export declare type ListResourceDataSyncCommandOutput = ListResourceDataSyncResult & __MetadataBearer;
export declare class ListResourceDataSyncCommand extends $Command<ListResourceDataSyncCommandInput, ListResourceDataSyncCommandOutput, SSMClientResolvedConfig> {
    readonly input: ListResourceDataSyncCommandInput;
    constructor(input: ListResourceDataSyncCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListResourceDataSyncCommandInput, ListResourceDataSyncCommandOutput>;
    private serialize;
    private deserialize;
}
