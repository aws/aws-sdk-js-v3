import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { ListApprovalRuleTemplatesInput, ListApprovalRuleTemplatesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListApprovalRuleTemplatesCommandInput = ListApprovalRuleTemplatesInput;
export declare type ListApprovalRuleTemplatesCommandOutput = ListApprovalRuleTemplatesOutput & __MetadataBearer;
export declare class ListApprovalRuleTemplatesCommand extends $Command<ListApprovalRuleTemplatesCommandInput, ListApprovalRuleTemplatesCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: ListApprovalRuleTemplatesCommandInput;
    constructor(input: ListApprovalRuleTemplatesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListApprovalRuleTemplatesCommandInput, ListApprovalRuleTemplatesCommandOutput>;
    private serialize;
    private deserialize;
}
