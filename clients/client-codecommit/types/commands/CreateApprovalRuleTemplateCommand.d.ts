import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { CreateApprovalRuleTemplateInput, CreateApprovalRuleTemplateOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateApprovalRuleTemplateCommandInput = CreateApprovalRuleTemplateInput;
export declare type CreateApprovalRuleTemplateCommandOutput = CreateApprovalRuleTemplateOutput & __MetadataBearer;
export declare class CreateApprovalRuleTemplateCommand extends $Command<CreateApprovalRuleTemplateCommandInput, CreateApprovalRuleTemplateCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: CreateApprovalRuleTemplateCommandInput;
    constructor(input: CreateApprovalRuleTemplateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateApprovalRuleTemplateCommandInput, CreateApprovalRuleTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
