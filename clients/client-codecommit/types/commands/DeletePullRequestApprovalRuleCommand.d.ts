import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { DeletePullRequestApprovalRuleInput, DeletePullRequestApprovalRuleOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeletePullRequestApprovalRuleCommandInput = DeletePullRequestApprovalRuleInput;
export declare type DeletePullRequestApprovalRuleCommandOutput = DeletePullRequestApprovalRuleOutput & __MetadataBearer;
export declare class DeletePullRequestApprovalRuleCommand extends $Command<DeletePullRequestApprovalRuleCommandInput, DeletePullRequestApprovalRuleCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: DeletePullRequestApprovalRuleCommandInput;
    constructor(input: DeletePullRequestApprovalRuleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeletePullRequestApprovalRuleCommandInput, DeletePullRequestApprovalRuleCommandOutput>;
    private serialize;
    private deserialize;
}
