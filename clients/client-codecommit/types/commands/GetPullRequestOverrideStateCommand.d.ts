import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { GetPullRequestOverrideStateInput, GetPullRequestOverrideStateOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetPullRequestOverrideStateCommandInput = GetPullRequestOverrideStateInput;
export declare type GetPullRequestOverrideStateCommandOutput = GetPullRequestOverrideStateOutput & __MetadataBearer;
export declare class GetPullRequestOverrideStateCommand extends $Command<GetPullRequestOverrideStateCommandInput, GetPullRequestOverrideStateCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: GetPullRequestOverrideStateCommandInput;
    constructor(input: GetPullRequestOverrideStateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetPullRequestOverrideStateCommandInput, GetPullRequestOverrideStateCommandOutput>;
    private serialize;
    private deserialize;
}
