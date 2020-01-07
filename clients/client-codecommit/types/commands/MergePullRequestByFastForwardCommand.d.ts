import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { MergePullRequestByFastForwardInput, MergePullRequestByFastForwardOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type MergePullRequestByFastForwardCommandInput = MergePullRequestByFastForwardInput;
export declare type MergePullRequestByFastForwardCommandOutput = MergePullRequestByFastForwardOutput & __MetadataBearer;
export declare class MergePullRequestByFastForwardCommand extends $Command<MergePullRequestByFastForwardCommandInput, MergePullRequestByFastForwardCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: MergePullRequestByFastForwardCommandInput;
    constructor(input: MergePullRequestByFastForwardCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<MergePullRequestByFastForwardCommandInput, MergePullRequestByFastForwardCommandOutput>;
    private serialize;
    private deserialize;
}
