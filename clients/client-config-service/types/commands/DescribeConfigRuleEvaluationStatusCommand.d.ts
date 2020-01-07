import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DescribeConfigRuleEvaluationStatusRequest, DescribeConfigRuleEvaluationStatusResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeConfigRuleEvaluationStatusCommandInput = DescribeConfigRuleEvaluationStatusRequest;
export declare type DescribeConfigRuleEvaluationStatusCommandOutput = DescribeConfigRuleEvaluationStatusResponse & __MetadataBearer;
export declare class DescribeConfigRuleEvaluationStatusCommand extends $Command<DescribeConfigRuleEvaluationStatusCommandInput, DescribeConfigRuleEvaluationStatusCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: DescribeConfigRuleEvaluationStatusCommandInput;
    constructor(input: DescribeConfigRuleEvaluationStatusCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeConfigRuleEvaluationStatusCommandInput, DescribeConfigRuleEvaluationStatusCommandOutput>;
    private serialize;
    private deserialize;
}
