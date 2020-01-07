import { ElasticLoadBalancingv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingv2Client";
import { DescribeTagsInput, DescribeTagsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeTagsCommandInput = DescribeTagsInput;
export declare type DescribeTagsCommandOutput = DescribeTagsOutput & __MetadataBearer;
export declare class DescribeTagsCommand extends $Command<DescribeTagsCommandInput, DescribeTagsCommandOutput, ElasticLoadBalancingv2ClientResolvedConfig> {
    readonly input: DescribeTagsCommandInput;
    constructor(input: DescribeTagsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingv2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTagsCommandInput, DescribeTagsCommandOutput>;
    private serialize;
    private deserialize;
}
