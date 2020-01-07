import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeVpcEndpointsRequest, DescribeVpcEndpointsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeVpcEndpointsCommandInput = DescribeVpcEndpointsRequest;
export declare type DescribeVpcEndpointsCommandOutput = DescribeVpcEndpointsResult & __MetadataBearer;
export declare class DescribeVpcEndpointsCommand extends $Command<DescribeVpcEndpointsCommandInput, DescribeVpcEndpointsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeVpcEndpointsCommandInput;
    constructor(input: DescribeVpcEndpointsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeVpcEndpointsCommandInput, DescribeVpcEndpointsCommandOutput>;
    private serialize;
    private deserialize;
}
