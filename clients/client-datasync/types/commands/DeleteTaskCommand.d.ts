import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { DeleteTaskRequest, DeleteTaskResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteTaskCommandInput = DeleteTaskRequest;
export declare type DeleteTaskCommandOutput = DeleteTaskResponse & __MetadataBearer;
export declare class DeleteTaskCommand extends $Command<DeleteTaskCommandInput, DeleteTaskCommandOutput, DataSyncClientResolvedConfig> {
    readonly input: DeleteTaskCommandInput;
    constructor(input: DeleteTaskCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataSyncClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTaskCommandInput, DeleteTaskCommandOutput>;
    private serialize;
    private deserialize;
}
