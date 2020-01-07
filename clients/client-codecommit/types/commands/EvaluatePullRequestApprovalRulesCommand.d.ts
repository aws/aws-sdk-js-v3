import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { EvaluatePullRequestApprovalRulesInput, EvaluatePullRequestApprovalRulesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type EvaluatePullRequestApprovalRulesCommandInput = EvaluatePullRequestApprovalRulesInput;
export declare type EvaluatePullRequestApprovalRulesCommandOutput = EvaluatePullRequestApprovalRulesOutput & __MetadataBearer;
export declare class EvaluatePullRequestApprovalRulesCommand extends $Command<EvaluatePullRequestApprovalRulesCommandInput, EvaluatePullRequestApprovalRulesCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: EvaluatePullRequestApprovalRulesCommandInput;
    constructor(input: EvaluatePullRequestApprovalRulesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<EvaluatePullRequestApprovalRulesCommandInput, EvaluatePullRequestApprovalRulesCommandOutput>;
    private serialize;
    private deserialize;
}
