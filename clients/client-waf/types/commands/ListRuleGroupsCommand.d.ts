import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";
import { ListRuleGroupsRequest, ListRuleGroupsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListRuleGroupsCommandInput = ListRuleGroupsRequest;
export declare type ListRuleGroupsCommandOutput = ListRuleGroupsResponse & __MetadataBearer;
export declare class ListRuleGroupsCommand extends $Command<ListRuleGroupsCommandInput, ListRuleGroupsCommandOutput, WAFClientResolvedConfig> {
    readonly input: ListRuleGroupsCommandInput;
    constructor(input: ListRuleGroupsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListRuleGroupsCommandInput, ListRuleGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
