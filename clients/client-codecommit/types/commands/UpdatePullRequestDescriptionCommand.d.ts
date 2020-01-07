import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { UpdatePullRequestDescriptionInput, UpdatePullRequestDescriptionOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdatePullRequestDescriptionCommandInput = UpdatePullRequestDescriptionInput;
export declare type UpdatePullRequestDescriptionCommandOutput = UpdatePullRequestDescriptionOutput & __MetadataBearer;
export declare class UpdatePullRequestDescriptionCommand extends $Command<UpdatePullRequestDescriptionCommandInput, UpdatePullRequestDescriptionCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: UpdatePullRequestDescriptionCommandInput;
    constructor(input: UpdatePullRequestDescriptionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdatePullRequestDescriptionCommandInput, UpdatePullRequestDescriptionCommandOutput>;
    private serialize;
    private deserialize;
}
