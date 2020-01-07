import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { BatchDisassociateApprovalRuleTemplateFromRepositoriesInput, BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandInput = BatchDisassociateApprovalRuleTemplateFromRepositoriesInput;
export declare type BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandOutput = BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput & __MetadataBearer;
export declare class BatchDisassociateApprovalRuleTemplateFromRepositoriesCommand extends $Command<BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandInput, BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandInput;
    constructor(input: BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandInput, BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandOutput>;
    private serialize;
    private deserialize;
}
