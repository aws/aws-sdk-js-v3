import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { AssociateApprovalRuleTemplateWithRepositoryInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AssociateApprovalRuleTemplateWithRepositoryCommandInput = AssociateApprovalRuleTemplateWithRepositoryInput;
export declare type AssociateApprovalRuleTemplateWithRepositoryCommandOutput = __MetadataBearer;
export declare class AssociateApprovalRuleTemplateWithRepositoryCommand extends $Command<AssociateApprovalRuleTemplateWithRepositoryCommandInput, AssociateApprovalRuleTemplateWithRepositoryCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: AssociateApprovalRuleTemplateWithRepositoryCommandInput;
    constructor(input: AssociateApprovalRuleTemplateWithRepositoryCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateApprovalRuleTemplateWithRepositoryCommandInput, AssociateApprovalRuleTemplateWithRepositoryCommandOutput>;
    private serialize;
    private deserialize;
}
