import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { UpdateTaskRequest, UpdateTaskResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateTaskCommandInput = UpdateTaskRequest;
export declare type UpdateTaskCommandOutput = UpdateTaskResponse & __MetadataBearer;
export declare class UpdateTaskCommand extends $Command<UpdateTaskCommandInput, UpdateTaskCommandOutput, DataSyncClientResolvedConfig> {
    readonly input: UpdateTaskCommandInput;
    constructor(input: UpdateTaskCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataSyncClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateTaskCommandInput, UpdateTaskCommandOutput>;
    private serialize;
    private deserialize;
}
