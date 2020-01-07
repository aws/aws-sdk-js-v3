import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { UpdatePullRequestStatusInput, UpdatePullRequestStatusOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdatePullRequestStatusCommandInput = UpdatePullRequestStatusInput;
export declare type UpdatePullRequestStatusCommandOutput = UpdatePullRequestStatusOutput & __MetadataBearer;
export declare class UpdatePullRequestStatusCommand extends $Command<UpdatePullRequestStatusCommandInput, UpdatePullRequestStatusCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: UpdatePullRequestStatusCommandInput;
    constructor(input: UpdatePullRequestStatusCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdatePullRequestStatusCommandInput, UpdatePullRequestStatusCommandOutput>;
    private serialize;
    private deserialize;
}
