import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { BatchGetBuildsInput, BatchGetBuildsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type BatchGetBuildsCommandInput = BatchGetBuildsInput;
export declare type BatchGetBuildsCommandOutput = BatchGetBuildsOutput & __MetadataBearer;
export declare class BatchGetBuildsCommand extends $Command<BatchGetBuildsCommandInput, BatchGetBuildsCommandOutput, CodeBuildClientResolvedConfig> {
    readonly input: BatchGetBuildsCommandInput;
    constructor(input: BatchGetBuildsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeBuildClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchGetBuildsCommandInput, BatchGetBuildsCommandOutput>;
    private serialize;
    private deserialize;
}
