import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { GetMergeConflictsInput, GetMergeConflictsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetMergeConflictsCommandInput = GetMergeConflictsInput;
export declare type GetMergeConflictsCommandOutput = GetMergeConflictsOutput & __MetadataBearer;
export declare class GetMergeConflictsCommand extends $Command<GetMergeConflictsCommandInput, GetMergeConflictsCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: GetMergeConflictsCommandInput;
    constructor(input: GetMergeConflictsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetMergeConflictsCommandInput, GetMergeConflictsCommandOutput>;
    private serialize;
    private deserialize;
}
