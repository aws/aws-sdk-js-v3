import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { DescribeMergeConflictsInput, DescribeMergeConflictsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeMergeConflictsCommandInput = DescribeMergeConflictsInput;
export declare type DescribeMergeConflictsCommandOutput = DescribeMergeConflictsOutput & __MetadataBearer;
export declare class DescribeMergeConflictsCommand extends $Command<DescribeMergeConflictsCommandInput, DescribeMergeConflictsCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: DescribeMergeConflictsCommandInput;
    constructor(input: DescribeMergeConflictsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeMergeConflictsCommandInput, DescribeMergeConflictsCommandOutput>;
    private serialize;
    private deserialize;
}
