import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { ListRepositoriesForApprovalRuleTemplateInput, ListRepositoriesForApprovalRuleTemplateOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListRepositoriesForApprovalRuleTemplateCommandInput = ListRepositoriesForApprovalRuleTemplateInput;
export declare type ListRepositoriesForApprovalRuleTemplateCommandOutput = ListRepositoriesForApprovalRuleTemplateOutput & __MetadataBearer;
export declare class ListRepositoriesForApprovalRuleTemplateCommand extends $Command<ListRepositoriesForApprovalRuleTemplateCommandInput, ListRepositoriesForApprovalRuleTemplateCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: ListRepositoriesForApprovalRuleTemplateCommandInput;
    constructor(input: ListRepositoriesForApprovalRuleTemplateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListRepositoriesForApprovalRuleTemplateCommandInput, ListRepositoriesForApprovalRuleTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
