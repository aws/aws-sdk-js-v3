import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DescribeConfigRulesRequest, DescribeConfigRulesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeConfigRulesCommandInput = DescribeConfigRulesRequest;
export declare type DescribeConfigRulesCommandOutput = DescribeConfigRulesResponse & __MetadataBearer;
export declare class DescribeConfigRulesCommand extends $Command<DescribeConfigRulesCommandInput, DescribeConfigRulesCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: DescribeConfigRulesCommandInput;
    constructor(input: DescribeConfigRulesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeConfigRulesCommandInput, DescribeConfigRulesCommandOutput>;
    private serialize;
    private deserialize;
}
