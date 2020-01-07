import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeIpv6PoolsRequest, DescribeIpv6PoolsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeIpv6PoolsCommandInput = DescribeIpv6PoolsRequest;
export declare type DescribeIpv6PoolsCommandOutput = DescribeIpv6PoolsResult & __MetadataBearer;
export declare class DescribeIpv6PoolsCommand extends $Command<DescribeIpv6PoolsCommandInput, DescribeIpv6PoolsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeIpv6PoolsCommandInput;
    constructor(input: DescribeIpv6PoolsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeIpv6PoolsCommandInput, DescribeIpv6PoolsCommandOutput>;
    private serialize;
    private deserialize;
}
