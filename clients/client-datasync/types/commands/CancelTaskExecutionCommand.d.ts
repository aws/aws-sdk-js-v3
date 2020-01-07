import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { CancelTaskExecutionRequest, CancelTaskExecutionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CancelTaskExecutionCommandInput = CancelTaskExecutionRequest;
export declare type CancelTaskExecutionCommandOutput = CancelTaskExecutionResponse & __MetadataBearer;
export declare class CancelTaskExecutionCommand extends $Command<CancelTaskExecutionCommandInput, CancelTaskExecutionCommandOutput, DataSyncClientResolvedConfig> {
    readonly input: CancelTaskExecutionCommandInput;
    constructor(input: CancelTaskExecutionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataSyncClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CancelTaskExecutionCommandInput, CancelTaskExecutionCommandOutput>;
    private serialize;
    private deserialize;
}
