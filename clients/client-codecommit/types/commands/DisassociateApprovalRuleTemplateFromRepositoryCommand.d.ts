import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { DisassociateApprovalRuleTemplateFromRepositoryInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisassociateApprovalRuleTemplateFromRepositoryCommandInput = DisassociateApprovalRuleTemplateFromRepositoryInput;
export declare type DisassociateApprovalRuleTemplateFromRepositoryCommandOutput = __MetadataBearer;
export declare class DisassociateApprovalRuleTemplateFromRepositoryCommand extends $Command<DisassociateApprovalRuleTemplateFromRepositoryCommandInput, DisassociateApprovalRuleTemplateFromRepositoryCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: DisassociateApprovalRuleTemplateFromRepositoryCommandInput;
    constructor(input: DisassociateApprovalRuleTemplateFromRepositoryCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateApprovalRuleTemplateFromRepositoryCommandInput, DisassociateApprovalRuleTemplateFromRepositoryCommandOutput>;
    private serialize;
    private deserialize;
}
