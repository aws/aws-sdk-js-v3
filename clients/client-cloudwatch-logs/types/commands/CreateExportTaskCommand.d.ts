import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { CreateExportTaskRequest, CreateExportTaskResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateExportTaskCommandInput = CreateExportTaskRequest;
export declare type CreateExportTaskCommandOutput = CreateExportTaskResponse & __MetadataBearer;
export declare class CreateExportTaskCommand extends $Command<CreateExportTaskCommandInput, CreateExportTaskCommandOutput, CloudWatchLogsClientResolvedConfig> {
    readonly input: CreateExportTaskCommandInput;
    constructor(input: CreateExportTaskCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchLogsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateExportTaskCommandInput, CreateExportTaskCommandOutput>;
    private serialize;
    private deserialize;
}
