import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";
import { ListRuleGroupsRequest, ListRuleGroupsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListRuleGroupsCommandInput = ListRuleGroupsRequest;
export declare type ListRuleGroupsCommandOutput = ListRuleGroupsResponse & __MetadataBearer;
export declare class ListRuleGroupsCommand extends $Command<ListRuleGroupsCommandInput, ListRuleGroupsCommandOutput, WAFV2ClientResolvedConfig> {
    readonly input: ListRuleGroupsCommandInput;
    constructor(input: ListRuleGroupsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListRuleGroupsCommandInput, ListRuleGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
