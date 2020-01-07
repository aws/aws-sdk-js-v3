import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { UpdatePullRequestTitleInput, UpdatePullRequestTitleOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdatePullRequestTitleCommandInput = UpdatePullRequestTitleInput;
export declare type UpdatePullRequestTitleCommandOutput = UpdatePullRequestTitleOutput & __MetadataBearer;
export declare class UpdatePullRequestTitleCommand extends $Command<UpdatePullRequestTitleCommandInput, UpdatePullRequestTitleCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: UpdatePullRequestTitleCommandInput;
    constructor(input: UpdatePullRequestTitleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdatePullRequestTitleCommandInput, UpdatePullRequestTitleCommandOutput>;
    private serialize;
    private deserialize;
}
