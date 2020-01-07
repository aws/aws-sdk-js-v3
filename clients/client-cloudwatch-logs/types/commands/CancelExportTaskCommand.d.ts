import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { CancelExportTaskRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CancelExportTaskCommandInput = CancelExportTaskRequest;
export declare type CancelExportTaskCommandOutput = __MetadataBearer;
export declare class CancelExportTaskCommand extends $Command<CancelExportTaskCommandInput, CancelExportTaskCommandOutput, CloudWatchLogsClientResolvedConfig> {
    readonly input: CancelExportTaskCommandInput;
    constructor(input: CancelExportTaskCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchLogsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CancelExportTaskCommandInput, CancelExportTaskCommandOutput>;
    private serialize;
    private deserialize;
}
