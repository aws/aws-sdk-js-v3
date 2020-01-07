import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { DescribeRuleRequest, DescribeRuleResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeRuleCommandInput = DescribeRuleRequest;
export declare type DescribeRuleCommandOutput = DescribeRuleResponse & __MetadataBearer;
export declare class DescribeRuleCommand extends $Command<DescribeRuleCommandInput, DescribeRuleCommandOutput, EventBridgeClientResolvedConfig> {
    readonly input: DescribeRuleCommandInput;
    constructor(input: DescribeRuleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EventBridgeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeRuleCommandInput, DescribeRuleCommandOutput>;
    private serialize;
    private deserialize;
}
