import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DescribeComplianceByConfigRuleRequest, DescribeComplianceByConfigRuleResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeComplianceByConfigRuleCommandInput = DescribeComplianceByConfigRuleRequest;
export declare type DescribeComplianceByConfigRuleCommandOutput = DescribeComplianceByConfigRuleResponse & __MetadataBearer;
export declare class DescribeComplianceByConfigRuleCommand extends $Command<DescribeComplianceByConfigRuleCommandInput, DescribeComplianceByConfigRuleCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: DescribeComplianceByConfigRuleCommandInput;
    constructor(input: DescribeComplianceByConfigRuleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeComplianceByConfigRuleCommandInput, DescribeComplianceByConfigRuleCommandOutput>;
    private serialize;
    private deserialize;
}
