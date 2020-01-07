import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { UpdateApprovalRuleTemplateDescriptionInput, UpdateApprovalRuleTemplateDescriptionOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateApprovalRuleTemplateDescriptionCommandInput = UpdateApprovalRuleTemplateDescriptionInput;
export declare type UpdateApprovalRuleTemplateDescriptionCommandOutput = UpdateApprovalRuleTemplateDescriptionOutput & __MetadataBearer;
export declare class UpdateApprovalRuleTemplateDescriptionCommand extends $Command<UpdateApprovalRuleTemplateDescriptionCommandInput, UpdateApprovalRuleTemplateDescriptionCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: UpdateApprovalRuleTemplateDescriptionCommandInput;
    constructor(input: UpdateApprovalRuleTemplateDescriptionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateApprovalRuleTemplateDescriptionCommandInput, UpdateApprovalRuleTemplateDescriptionCommandOutput>;
    private serialize;
    private deserialize;
}
