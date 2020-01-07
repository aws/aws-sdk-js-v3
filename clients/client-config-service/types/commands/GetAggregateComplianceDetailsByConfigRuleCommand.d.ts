import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { GetAggregateComplianceDetailsByConfigRuleRequest, GetAggregateComplianceDetailsByConfigRuleResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetAggregateComplianceDetailsByConfigRuleCommandInput = GetAggregateComplianceDetailsByConfigRuleRequest;
export declare type GetAggregateComplianceDetailsByConfigRuleCommandOutput = GetAggregateComplianceDetailsByConfigRuleResponse & __MetadataBearer;
export declare class GetAggregateComplianceDetailsByConfigRuleCommand extends $Command<GetAggregateComplianceDetailsByConfigRuleCommandInput, GetAggregateComplianceDetailsByConfigRuleCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: GetAggregateComplianceDetailsByConfigRuleCommandInput;
    constructor(input: GetAggregateComplianceDetailsByConfigRuleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAggregateComplianceDetailsByConfigRuleCommandInput, GetAggregateComplianceDetailsByConfigRuleCommandOutput>;
    private serialize;
    private deserialize;
}
