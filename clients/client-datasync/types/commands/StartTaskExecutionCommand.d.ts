import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { StartTaskExecutionRequest, StartTaskExecutionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartTaskExecutionCommandInput = StartTaskExecutionRequest;
export declare type StartTaskExecutionCommandOutput = StartTaskExecutionResponse & __MetadataBearer;
export declare class StartTaskExecutionCommand extends $Command<StartTaskExecutionCommandInput, StartTaskExecutionCommandOutput, DataSyncClientResolvedConfig> {
    readonly input: StartTaskExecutionCommandInput;
    constructor(input: StartTaskExecutionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataSyncClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartTaskExecutionCommandInput, StartTaskExecutionCommandOutput>;
    private serialize;
    private deserialize;
}
