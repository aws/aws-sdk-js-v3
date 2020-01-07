import { DataPipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataPipelineClient";
import { ReportTaskProgressInput, ReportTaskProgressOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ReportTaskProgressCommandInput = ReportTaskProgressInput;
export declare type ReportTaskProgressCommandOutput = ReportTaskProgressOutput & __MetadataBearer;
export declare class ReportTaskProgressCommand extends $Command<ReportTaskProgressCommandInput, ReportTaskProgressCommandOutput, DataPipelineClientResolvedConfig> {
    readonly input: ReportTaskProgressCommandInput;
    constructor(input: ReportTaskProgressCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataPipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ReportTaskProgressCommandInput, ReportTaskProgressCommandOutput>;
    private serialize;
    private deserialize;
}
