import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { UpdateResourceDataSyncRequest, UpdateResourceDataSyncResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateResourceDataSyncCommandInput = UpdateResourceDataSyncRequest;
export declare type UpdateResourceDataSyncCommandOutput = UpdateResourceDataSyncResult & __MetadataBearer;
export declare class UpdateResourceDataSyncCommand extends $Command<UpdateResourceDataSyncCommandInput, UpdateResourceDataSyncCommandOutput, SSMClientResolvedConfig> {
    readonly input: UpdateResourceDataSyncCommandInput;
    constructor(input: UpdateResourceDataSyncCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateResourceDataSyncCommandInput, UpdateResourceDataSyncCommandOutput>;
    private serialize;
    private deserialize;
}
