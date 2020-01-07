import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { BatchAssociateApprovalRuleTemplateWithRepositoriesInput, BatchAssociateApprovalRuleTemplateWithRepositoriesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type BatchAssociateApprovalRuleTemplateWithRepositoriesCommandInput = BatchAssociateApprovalRuleTemplateWithRepositoriesInput;
export declare type BatchAssociateApprovalRuleTemplateWithRepositoriesCommandOutput = BatchAssociateApprovalRuleTemplateWithRepositoriesOutput & __MetadataBearer;
export declare class BatchAssociateApprovalRuleTemplateWithRepositoriesCommand extends $Command<BatchAssociateApprovalRuleTemplateWithRepositoriesCommandInput, BatchAssociateApprovalRuleTemplateWithRepositoriesCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: BatchAssociateApprovalRuleTemplateWithRepositoriesCommandInput;
    constructor(input: BatchAssociateApprovalRuleTemplateWithRepositoriesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchAssociateApprovalRuleTemplateWithRepositoriesCommandInput, BatchAssociateApprovalRuleTemplateWithRepositoriesCommandOutput>;
    private serialize;
    private deserialize;
}
