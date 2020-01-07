import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { BatchGetCommitsInput, BatchGetCommitsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type BatchGetCommitsCommandInput = BatchGetCommitsInput;
export declare type BatchGetCommitsCommandOutput = BatchGetCommitsOutput & __MetadataBearer;
export declare class BatchGetCommitsCommand extends $Command<BatchGetCommitsCommandInput, BatchGetCommitsCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: BatchGetCommitsCommandInput;
    constructor(input: BatchGetCommitsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchGetCommitsCommandInput, BatchGetCommitsCommandOutput>;
    private serialize;
    private deserialize;
}
