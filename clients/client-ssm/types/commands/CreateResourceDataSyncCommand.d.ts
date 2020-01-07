import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { CreateResourceDataSyncRequest, CreateResourceDataSyncResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateResourceDataSyncCommandInput = CreateResourceDataSyncRequest;
export declare type CreateResourceDataSyncCommandOutput = CreateResourceDataSyncResult & __MetadataBearer;
export declare class CreateResourceDataSyncCommand extends $Command<CreateResourceDataSyncCommandInput, CreateResourceDataSyncCommandOutput, SSMClientResolvedConfig> {
    readonly input: CreateResourceDataSyncCommandInput;
    constructor(input: CreateResourceDataSyncCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateResourceDataSyncCommandInput, CreateResourceDataSyncCommandOutput>;
    private serialize;
    private deserialize;
}
