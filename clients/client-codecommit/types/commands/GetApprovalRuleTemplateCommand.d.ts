import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { GetApprovalRuleTemplateInput, GetApprovalRuleTemplateOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetApprovalRuleTemplateCommandInput = GetApprovalRuleTemplateInput;
export declare type GetApprovalRuleTemplateCommandOutput = GetApprovalRuleTemplateOutput & __MetadataBearer;
export declare class GetApprovalRuleTemplateCommand extends $Command<GetApprovalRuleTemplateCommandInput, GetApprovalRuleTemplateCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: GetApprovalRuleTemplateCommandInput;
    constructor(input: GetApprovalRuleTemplateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetApprovalRuleTemplateCommandInput, GetApprovalRuleTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
