import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { BatchGetProjectsInput, BatchGetProjectsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type BatchGetProjectsCommandInput = BatchGetProjectsInput;
export declare type BatchGetProjectsCommandOutput = BatchGetProjectsOutput & __MetadataBearer;
export declare class BatchGetProjectsCommand extends $Command<BatchGetProjectsCommandInput, BatchGetProjectsCommandOutput, CodeBuildClientResolvedConfig> {
    readonly input: BatchGetProjectsCommandInput;
    constructor(input: BatchGetProjectsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeBuildClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchGetProjectsCommandInput, BatchGetProjectsCommandOutput>;
    private serialize;
    private deserialize;
}
