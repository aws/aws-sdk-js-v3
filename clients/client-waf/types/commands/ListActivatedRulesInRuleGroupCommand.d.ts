import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";
import { ListActivatedRulesInRuleGroupRequest, ListActivatedRulesInRuleGroupResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListActivatedRulesInRuleGroupCommandInput = ListActivatedRulesInRuleGroupRequest;
export declare type ListActivatedRulesInRuleGroupCommandOutput = ListActivatedRulesInRuleGroupResponse & __MetadataBearer;
export declare class ListActivatedRulesInRuleGroupCommand extends $Command<ListActivatedRulesInRuleGroupCommandInput, ListActivatedRulesInRuleGroupCommandOutput, WAFClientResolvedConfig> {
    readonly input: ListActivatedRulesInRuleGroupCommandInput;
    constructor(input: ListActivatedRulesInRuleGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListActivatedRulesInRuleGroupCommandInput, ListActivatedRulesInRuleGroupCommandOutput>;
    private serialize;
    private deserialize;
}
