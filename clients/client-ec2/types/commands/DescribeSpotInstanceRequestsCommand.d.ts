import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeSpotInstanceRequestsRequest, DescribeSpotInstanceRequestsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeSpotInstanceRequestsCommandInput = DescribeSpotInstanceRequestsRequest;
export declare type DescribeSpotInstanceRequestsCommandOutput = DescribeSpotInstanceRequestsResult & __MetadataBearer;
export declare class DescribeSpotInstanceRequestsCommand extends $Command<DescribeSpotInstanceRequestsCommandInput, DescribeSpotInstanceRequestsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeSpotInstanceRequestsCommandInput;
    constructor(input: DescribeSpotInstanceRequestsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeSpotInstanceRequestsCommandInput, DescribeSpotInstanceRequestsCommandOutput>;
    private serialize;
    private deserialize;
}
