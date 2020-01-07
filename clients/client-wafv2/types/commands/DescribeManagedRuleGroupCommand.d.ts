import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";
import { DescribeManagedRuleGroupRequest, DescribeManagedRuleGroupResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeManagedRuleGroupCommandInput = DescribeManagedRuleGroupRequest;
export declare type DescribeManagedRuleGroupCommandOutput = DescribeManagedRuleGroupResponse & __MetadataBearer;
export declare class DescribeManagedRuleGroupCommand extends $Command<DescribeManagedRuleGroupCommandInput, DescribeManagedRuleGroupCommandOutput, WAFV2ClientResolvedConfig> {
    readonly input: DescribeManagedRuleGroupCommandInput;
    constructor(input: DescribeManagedRuleGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeManagedRuleGroupCommandInput, DescribeManagedRuleGroupCommandOutput>;
    private serialize;
    private deserialize;
}
