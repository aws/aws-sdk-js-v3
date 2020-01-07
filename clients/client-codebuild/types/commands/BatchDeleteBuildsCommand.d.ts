import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { BatchDeleteBuildsInput, BatchDeleteBuildsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type BatchDeleteBuildsCommandInput = BatchDeleteBuildsInput;
export declare type BatchDeleteBuildsCommandOutput = BatchDeleteBuildsOutput & __MetadataBearer;
export declare class BatchDeleteBuildsCommand extends $Command<BatchDeleteBuildsCommandInput, BatchDeleteBuildsCommandOutput, CodeBuildClientResolvedConfig> {
    readonly input: BatchDeleteBuildsCommandInput;
    constructor(input: BatchDeleteBuildsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeBuildClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchDeleteBuildsCommandInput, BatchDeleteBuildsCommandOutput>;
    private serialize;
    private deserialize;
}
