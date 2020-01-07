import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { UpdateApprovalRuleTemplateNameInput, UpdateApprovalRuleTemplateNameOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateApprovalRuleTemplateNameCommandInput = UpdateApprovalRuleTemplateNameInput;
export declare type UpdateApprovalRuleTemplateNameCommandOutput = UpdateApprovalRuleTemplateNameOutput & __MetadataBearer;
export declare class UpdateApprovalRuleTemplateNameCommand extends $Command<UpdateApprovalRuleTemplateNameCommandInput, UpdateApprovalRuleTemplateNameCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: UpdateApprovalRuleTemplateNameCommandInput;
    constructor(input: UpdateApprovalRuleTemplateNameCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateApprovalRuleTemplateNameCommandInput, UpdateApprovalRuleTemplateNameCommandOutput>;
    private serialize;
    private deserialize;
}
