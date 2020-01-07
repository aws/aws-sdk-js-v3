import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribePublicIpv4PoolsRequest, DescribePublicIpv4PoolsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribePublicIpv4PoolsCommandInput = DescribePublicIpv4PoolsRequest;
export declare type DescribePublicIpv4PoolsCommandOutput = DescribePublicIpv4PoolsResult & __MetadataBearer;
export declare class DescribePublicIpv4PoolsCommand extends $Command<DescribePublicIpv4PoolsCommandInput, DescribePublicIpv4PoolsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribePublicIpv4PoolsCommandInput;
    constructor(input: DescribePublicIpv4PoolsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribePublicIpv4PoolsCommandInput, DescribePublicIpv4PoolsCommandOutput>;
    private serialize;
    private deserialize;
}
