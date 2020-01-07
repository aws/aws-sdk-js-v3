import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { CreateTaskRequest, CreateTaskResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateTaskCommandInput = CreateTaskRequest;
export declare type CreateTaskCommandOutput = CreateTaskResponse & __MetadataBearer;
export declare class CreateTaskCommand extends $Command<CreateTaskCommandInput, CreateTaskCommandOutput, DataSyncClientResolvedConfig> {
    readonly input: CreateTaskCommandInput;
    constructor(input: CreateTaskCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataSyncClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateTaskCommandInput, CreateTaskCommandOutput>;
    private serialize;
    private deserialize;
}
