import { DataPipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataPipelineClient";
import { ReportTaskRunnerHeartbeatInput, ReportTaskRunnerHeartbeatOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ReportTaskRunnerHeartbeatCommandInput = ReportTaskRunnerHeartbeatInput;
export declare type ReportTaskRunnerHeartbeatCommandOutput = ReportTaskRunnerHeartbeatOutput & __MetadataBearer;
export declare class ReportTaskRunnerHeartbeatCommand extends $Command<ReportTaskRunnerHeartbeatCommandInput, ReportTaskRunnerHeartbeatCommandOutput, DataPipelineClientResolvedConfig> {
    readonly input: ReportTaskRunnerHeartbeatCommandInput;
    constructor(input: ReportTaskRunnerHeartbeatCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataPipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ReportTaskRunnerHeartbeatCommandInput, ReportTaskRunnerHeartbeatCommandOutput>;
    private serialize;
    private deserialize;
}
