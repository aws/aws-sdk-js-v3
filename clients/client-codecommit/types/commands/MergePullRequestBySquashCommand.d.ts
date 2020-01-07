import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { MergePullRequestBySquashInput, MergePullRequestBySquashOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type MergePullRequestBySquashCommandInput = MergePullRequestBySquashInput;
export declare type MergePullRequestBySquashCommandOutput = MergePullRequestBySquashOutput & __MetadataBearer;
export declare class MergePullRequestBySquashCommand extends $Command<MergePullRequestBySquashCommandInput, MergePullRequestBySquashCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: MergePullRequestBySquashCommandInput;
    constructor(input: MergePullRequestBySquashCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<MergePullRequestBySquashCommandInput, MergePullRequestBySquashCommandOutput>;
    private serialize;
    private deserialize;
}
