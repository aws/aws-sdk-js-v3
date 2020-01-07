import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { CreatePullRequestApprovalRuleInput, CreatePullRequestApprovalRuleOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreatePullRequestApprovalRuleCommandInput = CreatePullRequestApprovalRuleInput;
export declare type CreatePullRequestApprovalRuleCommandOutput = CreatePullRequestApprovalRuleOutput & __MetadataBearer;
export declare class CreatePullRequestApprovalRuleCommand extends $Command<CreatePullRequestApprovalRuleCommandInput, CreatePullRequestApprovalRuleCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: CreatePullRequestApprovalRuleCommandInput;
    constructor(input: CreatePullRequestApprovalRuleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreatePullRequestApprovalRuleCommandInput, CreatePullRequestApprovalRuleCommandOutput>;
    private serialize;
    private deserialize;
}
