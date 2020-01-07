import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { BatchGetReportGroupsInput, BatchGetReportGroupsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type BatchGetReportGroupsCommandInput = BatchGetReportGroupsInput;
export declare type BatchGetReportGroupsCommandOutput = BatchGetReportGroupsOutput & __MetadataBearer;
export declare class BatchGetReportGroupsCommand extends $Command<BatchGetReportGroupsCommandInput, BatchGetReportGroupsCommandOutput, CodeBuildClientResolvedConfig> {
    readonly input: BatchGetReportGroupsCommandInput;
    constructor(input: BatchGetReportGroupsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeBuildClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchGetReportGroupsCommandInput, BatchGetReportGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
