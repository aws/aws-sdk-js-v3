import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DescribeAggregateComplianceByConfigRulesRequest, DescribeAggregateComplianceByConfigRulesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeAggregateComplianceByConfigRulesCommandInput = DescribeAggregateComplianceByConfigRulesRequest;
export declare type DescribeAggregateComplianceByConfigRulesCommandOutput = DescribeAggregateComplianceByConfigRulesResponse & __MetadataBearer;
export declare class DescribeAggregateComplianceByConfigRulesCommand extends $Command<DescribeAggregateComplianceByConfigRulesCommandInput, DescribeAggregateComplianceByConfigRulesCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: DescribeAggregateComplianceByConfigRulesCommandInput;
    constructor(input: DescribeAggregateComplianceByConfigRulesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAggregateComplianceByConfigRulesCommandInput, DescribeAggregateComplianceByConfigRulesCommandOutput>;
    private serialize;
    private deserialize;
}
