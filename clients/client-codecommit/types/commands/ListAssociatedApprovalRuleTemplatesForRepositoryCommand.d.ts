import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { ListAssociatedApprovalRuleTemplatesForRepositoryInput, ListAssociatedApprovalRuleTemplatesForRepositoryOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListAssociatedApprovalRuleTemplatesForRepositoryCommandInput = ListAssociatedApprovalRuleTemplatesForRepositoryInput;
export declare type ListAssociatedApprovalRuleTemplatesForRepositoryCommandOutput = ListAssociatedApprovalRuleTemplatesForRepositoryOutput & __MetadataBearer;
export declare class ListAssociatedApprovalRuleTemplatesForRepositoryCommand extends $Command<ListAssociatedApprovalRuleTemplatesForRepositoryCommandInput, ListAssociatedApprovalRuleTemplatesForRepositoryCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: ListAssociatedApprovalRuleTemplatesForRepositoryCommandInput;
    constructor(input: ListAssociatedApprovalRuleTemplatesForRepositoryCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAssociatedApprovalRuleTemplatesForRepositoryCommandInput, ListAssociatedApprovalRuleTemplatesForRepositoryCommandOutput>;
    private serialize;
    private deserialize;
}
