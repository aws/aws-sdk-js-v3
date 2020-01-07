import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { DeleteApprovalRuleTemplateInput, DeleteApprovalRuleTemplateOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteApprovalRuleTemplateCommandInput = DeleteApprovalRuleTemplateInput;
export declare type DeleteApprovalRuleTemplateCommandOutput = DeleteApprovalRuleTemplateOutput & __MetadataBearer;
export declare class DeleteApprovalRuleTemplateCommand extends $Command<DeleteApprovalRuleTemplateCommandInput, DeleteApprovalRuleTemplateCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: DeleteApprovalRuleTemplateCommandInput;
    constructor(input: DeleteApprovalRuleTemplateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteApprovalRuleTemplateCommandInput, DeleteApprovalRuleTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
