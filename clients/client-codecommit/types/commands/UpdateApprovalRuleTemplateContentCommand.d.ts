import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { UpdateApprovalRuleTemplateContentInput, UpdateApprovalRuleTemplateContentOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateApprovalRuleTemplateContentCommandInput = UpdateApprovalRuleTemplateContentInput;
export declare type UpdateApprovalRuleTemplateContentCommandOutput = UpdateApprovalRuleTemplateContentOutput & __MetadataBearer;
export declare class UpdateApprovalRuleTemplateContentCommand extends $Command<UpdateApprovalRuleTemplateContentCommandInput, UpdateApprovalRuleTemplateContentCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: UpdateApprovalRuleTemplateContentCommandInput;
    constructor(input: UpdateApprovalRuleTemplateContentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateApprovalRuleTemplateContentCommandInput, UpdateApprovalRuleTemplateContentCommandOutput>;
    private serialize;
    private deserialize;
}
