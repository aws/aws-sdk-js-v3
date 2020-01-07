import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { CreatePullRequestInput, CreatePullRequestOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreatePullRequestCommandInput = CreatePullRequestInput;
export declare type CreatePullRequestCommandOutput = CreatePullRequestOutput & __MetadataBearer;
export declare class CreatePullRequestCommand extends $Command<CreatePullRequestCommandInput, CreatePullRequestCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: CreatePullRequestCommandInput;
    constructor(input: CreatePullRequestCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreatePullRequestCommandInput, CreatePullRequestCommandOutput>;
    private serialize;
    private deserialize;
}
