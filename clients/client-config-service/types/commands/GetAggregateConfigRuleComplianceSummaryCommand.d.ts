import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { GetAggregateConfigRuleComplianceSummaryRequest, GetAggregateConfigRuleComplianceSummaryResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetAggregateConfigRuleComplianceSummaryCommandInput = GetAggregateConfigRuleComplianceSummaryRequest;
export declare type GetAggregateConfigRuleComplianceSummaryCommandOutput = GetAggregateConfigRuleComplianceSummaryResponse & __MetadataBearer;
export declare class GetAggregateConfigRuleComplianceSummaryCommand extends $Command<GetAggregateConfigRuleComplianceSummaryCommandInput, GetAggregateConfigRuleComplianceSummaryCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: GetAggregateConfigRuleComplianceSummaryCommandInput;
    constructor(input: GetAggregateConfigRuleComplianceSummaryCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAggregateConfigRuleComplianceSummaryCommandInput, GetAggregateConfigRuleComplianceSummaryCommandOutput>;
    private serialize;
    private deserialize;
}
