import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { UpdatePullRequestApprovalRuleContentInput, UpdatePullRequestApprovalRuleContentOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdatePullRequestApprovalRuleContentCommandInput = UpdatePullRequestApprovalRuleContentInput;
export declare type UpdatePullRequestApprovalRuleContentCommandOutput = UpdatePullRequestApprovalRuleContentOutput & __MetadataBearer;
export declare class UpdatePullRequestApprovalRuleContentCommand extends $Command<UpdatePullRequestApprovalRuleContentCommandInput, UpdatePullRequestApprovalRuleContentCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: UpdatePullRequestApprovalRuleContentCommandInput;
    constructor(input: UpdatePullRequestApprovalRuleContentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdatePullRequestApprovalRuleContentCommandInput, UpdatePullRequestApprovalRuleContentCommandOutput>;
    private serialize;
    private deserialize;
}
