import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { DescribeInsightRulesInput, DescribeInsightRulesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeInsightRulesCommandInput = DescribeInsightRulesInput;
export declare type DescribeInsightRulesCommandOutput = DescribeInsightRulesOutput & __MetadataBearer;
export declare class DescribeInsightRulesCommand extends $Command<DescribeInsightRulesCommandInput, DescribeInsightRulesCommandOutput, CloudWatchClientResolvedConfig> {
    readonly input: DescribeInsightRulesCommandInput;
    constructor(input: DescribeInsightRulesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeInsightRulesCommandInput, DescribeInsightRulesCommandOutput>;
    private serialize;
    private deserialize;
}
