import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { GetComplianceSummaryByConfigRuleResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetComplianceSummaryByConfigRuleCommandInput = {};
export declare type GetComplianceSummaryByConfigRuleCommandOutput = GetComplianceSummaryByConfigRuleResponse & __MetadataBearer;
export declare class GetComplianceSummaryByConfigRuleCommand extends $Command<GetComplianceSummaryByConfigRuleCommandInput, GetComplianceSummaryByConfigRuleCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: GetComplianceSummaryByConfigRuleCommandInput;
    constructor(input: GetComplianceSummaryByConfigRuleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetComplianceSummaryByConfigRuleCommandInput, GetComplianceSummaryByConfigRuleCommandOutput>;
    private serialize;
    private deserialize;
}
