import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { MergePullRequestByThreeWayInput, MergePullRequestByThreeWayOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type MergePullRequestByThreeWayCommandInput = MergePullRequestByThreeWayInput;
export declare type MergePullRequestByThreeWayCommandOutput = MergePullRequestByThreeWayOutput & __MetadataBearer;
export declare class MergePullRequestByThreeWayCommand extends $Command<MergePullRequestByThreeWayCommandInput, MergePullRequestByThreeWayCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: MergePullRequestByThreeWayCommandInput;
    constructor(input: MergePullRequestByThreeWayCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<MergePullRequestByThreeWayCommandInput, MergePullRequestByThreeWayCommandOutput>;
    private serialize;
    private deserialize;
}
