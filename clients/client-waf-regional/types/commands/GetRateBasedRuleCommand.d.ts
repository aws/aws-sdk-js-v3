import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";
import { GetRateBasedRuleRequest, GetRateBasedRuleResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetRateBasedRuleCommandInput = GetRateBasedRuleRequest;
export declare type GetRateBasedRuleCommandOutput = GetRateBasedRuleResponse & __MetadataBearer;
export declare class GetRateBasedRuleCommand extends $Command<GetRateBasedRuleCommandInput, GetRateBasedRuleCommandOutput, WAFRegionalClientResolvedConfig> {
    readonly input: GetRateBasedRuleCommandInput;
    constructor(input: GetRateBasedRuleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFRegionalClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetRateBasedRuleCommandInput, GetRateBasedRuleCommandOutput>;
    private serialize;
    private deserialize;
}
