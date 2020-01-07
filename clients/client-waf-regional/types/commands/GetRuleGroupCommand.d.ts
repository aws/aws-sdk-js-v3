import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";
import { GetRuleGroupRequest, GetRuleGroupResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetRuleGroupCommandInput = GetRuleGroupRequest;
export declare type GetRuleGroupCommandOutput = GetRuleGroupResponse & __MetadataBearer;
export declare class GetRuleGroupCommand extends $Command<GetRuleGroupCommandInput, GetRuleGroupCommandOutput, WAFRegionalClientResolvedConfig> {
    readonly input: GetRuleGroupCommandInput;
    constructor(input: GetRuleGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFRegionalClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetRuleGroupCommandInput, GetRuleGroupCommandOutput>;
    private serialize;
    private deserialize;
}
