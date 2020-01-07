import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";
import { ListSubscribedRuleGroupsRequest, ListSubscribedRuleGroupsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListSubscribedRuleGroupsCommandInput = ListSubscribedRuleGroupsRequest;
export declare type ListSubscribedRuleGroupsCommandOutput = ListSubscribedRuleGroupsResponse & __MetadataBearer;
export declare class ListSubscribedRuleGroupsCommand extends $Command<ListSubscribedRuleGroupsCommandInput, ListSubscribedRuleGroupsCommandOutput, WAFRegionalClientResolvedConfig> {
    readonly input: ListSubscribedRuleGroupsCommandInput;
    constructor(input: ListSubscribedRuleGroupsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFRegionalClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListSubscribedRuleGroupsCommandInput, ListSubscribedRuleGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
