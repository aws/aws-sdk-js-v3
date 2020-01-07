import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { BatchGetReportsInput, BatchGetReportsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type BatchGetReportsCommandInput = BatchGetReportsInput;
export declare type BatchGetReportsCommandOutput = BatchGetReportsOutput & __MetadataBearer;
export declare class BatchGetReportsCommand extends $Command<BatchGetReportsCommandInput, BatchGetReportsCommandOutput, CodeBuildClientResolvedConfig> {
    readonly input: BatchGetReportsCommandInput;
    constructor(input: BatchGetReportsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeBuildClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchGetReportsCommandInput, BatchGetReportsCommandOutput>;
    private serialize;
    private deserialize;
}
