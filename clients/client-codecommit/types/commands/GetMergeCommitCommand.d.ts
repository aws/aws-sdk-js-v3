import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { GetMergeCommitInput, GetMergeCommitOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetMergeCommitCommandInput = GetMergeCommitInput;
export declare type GetMergeCommitCommandOutput = GetMergeCommitOutput & __MetadataBearer;
export declare class GetMergeCommitCommand extends $Command<GetMergeCommitCommandInput, GetMergeCommitCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: GetMergeCommitCommandInput;
    constructor(input: GetMergeCommitCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetMergeCommitCommandInput, GetMergeCommitCommandOutput>;
    private serialize;
    private deserialize;
}
