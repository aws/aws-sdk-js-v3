import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeClassicLinkInstancesRequest, DescribeClassicLinkInstancesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeClassicLinkInstancesCommandInput = DescribeClassicLinkInstancesRequest;
export declare type DescribeClassicLinkInstancesCommandOutput = DescribeClassicLinkInstancesResult & __MetadataBearer;
export declare class DescribeClassicLinkInstancesCommand extends $Command<DescribeClassicLinkInstancesCommandInput, DescribeClassicLinkInstancesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeClassicLinkInstancesCommandInput;
    constructor(input: DescribeClassicLinkInstancesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeClassicLinkInstancesCommandInput, DescribeClassicLinkInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
