import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { BatchDescribeMergeConflictsInput, BatchDescribeMergeConflictsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type BatchDescribeMergeConflictsCommandInput = BatchDescribeMergeConflictsInput;
export declare type BatchDescribeMergeConflictsCommandOutput = BatchDescribeMergeConflictsOutput & __MetadataBearer;
export declare class BatchDescribeMergeConflictsCommand extends $Command<BatchDescribeMergeConflictsCommandInput, BatchDescribeMergeConflictsCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: BatchDescribeMergeConflictsCommandInput;
    constructor(input: BatchDescribeMergeConflictsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchDescribeMergeConflictsCommandInput, BatchDescribeMergeConflictsCommandOutput>;
    private serialize;
    private deserialize;
}
