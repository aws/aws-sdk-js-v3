import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";
import { ListAvailableManagedRuleGroupsRequest, ListAvailableManagedRuleGroupsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListAvailableManagedRuleGroupsCommandInput = ListAvailableManagedRuleGroupsRequest;
export declare type ListAvailableManagedRuleGroupsCommandOutput = ListAvailableManagedRuleGroupsResponse & __MetadataBearer;
export declare class ListAvailableManagedRuleGroupsCommand extends $Command<ListAvailableManagedRuleGroupsCommandInput, ListAvailableManagedRuleGroupsCommandOutput, WAFV2ClientResolvedConfig> {
    readonly input: ListAvailableManagedRuleGroupsCommandInput;
    constructor(input: ListAvailableManagedRuleGroupsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAvailableManagedRuleGroupsCommandInput, ListAvailableManagedRuleGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
