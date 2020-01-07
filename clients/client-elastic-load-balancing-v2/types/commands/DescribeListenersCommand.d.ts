import { ElasticLoadBalancingv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingv2Client";
import { DescribeListenersInput, DescribeListenersOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeListenersCommandInput = DescribeListenersInput;
export declare type DescribeListenersCommandOutput = DescribeListenersOutput & __MetadataBearer;
export declare class DescribeListenersCommand extends $Command<DescribeListenersCommandInput, DescribeListenersCommandOutput, ElasticLoadBalancingv2ClientResolvedConfig> {
    readonly input: DescribeListenersCommandInput;
    constructor(input: DescribeListenersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingv2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeListenersCommandInput, DescribeListenersCommandOutput>;
    private serialize;
    private deserialize;
}
