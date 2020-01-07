import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import { DescribeRuleRequest, DescribeRuleResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeRuleCommandInput = DescribeRuleRequest;
export declare type DescribeRuleCommandOutput = DescribeRuleResponse & __MetadataBearer;
export declare class DescribeRuleCommand extends $Command<DescribeRuleCommandInput, DescribeRuleCommandOutput, CloudWatchEventsClientResolvedConfig> {
    readonly input: DescribeRuleCommandInput;
    constructor(input: DescribeRuleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchEventsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeRuleCommandInput, DescribeRuleCommandOutput>;
    private serialize;
    private deserialize;
}
