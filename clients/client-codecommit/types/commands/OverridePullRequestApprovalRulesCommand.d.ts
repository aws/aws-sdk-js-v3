import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { OverridePullRequestApprovalRulesInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type OverridePullRequestApprovalRulesCommandInput = OverridePullRequestApprovalRulesInput;
export declare type OverridePullRequestApprovalRulesCommandOutput = __MetadataBearer;
export declare class OverridePullRequestApprovalRulesCommand extends $Command<OverridePullRequestApprovalRulesCommandInput, OverridePullRequestApprovalRulesCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: OverridePullRequestApprovalRulesCommandInput;
    constructor(input: OverridePullRequestApprovalRulesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<OverridePullRequestApprovalRulesCommandInput, OverridePullRequestApprovalRulesCommandOutput>;
    private serialize;
    private deserialize;
}
