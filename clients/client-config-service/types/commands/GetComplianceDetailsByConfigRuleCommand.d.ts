import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { GetComplianceDetailsByConfigRuleRequest, GetComplianceDetailsByConfigRuleResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetComplianceDetailsByConfigRuleCommandInput = GetComplianceDetailsByConfigRuleRequest;
export declare type GetComplianceDetailsByConfigRuleCommandOutput = GetComplianceDetailsByConfigRuleResponse & __MetadataBearer;
export declare class GetComplianceDetailsByConfigRuleCommand extends $Command<GetComplianceDetailsByConfigRuleCommandInput, GetComplianceDetailsByConfigRuleCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: GetComplianceDetailsByConfigRuleCommandInput;
    constructor(input: GetComplianceDetailsByConfigRuleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetComplianceDetailsByConfigRuleCommandInput, GetComplianceDetailsByConfigRuleCommandOutput>;
    private serialize;
    private deserialize;
}
