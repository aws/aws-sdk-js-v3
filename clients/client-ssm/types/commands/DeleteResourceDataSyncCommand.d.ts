import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { DeleteResourceDataSyncRequest, DeleteResourceDataSyncResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteResourceDataSyncCommandInput = DeleteResourceDataSyncRequest;
export declare type DeleteResourceDataSyncCommandOutput = DeleteResourceDataSyncResult & __MetadataBearer;
export declare class DeleteResourceDataSyncCommand extends $Command<DeleteResourceDataSyncCommandInput, DeleteResourceDataSyncCommandOutput, SSMClientResolvedConfig> {
    readonly input: DeleteResourceDataSyncCommandInput;
    constructor(input: DeleteResourceDataSyncCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteResourceDataSyncCommandInput, DeleteResourceDataSyncCommandOutput>;
    private serialize;
    private deserialize;
}
