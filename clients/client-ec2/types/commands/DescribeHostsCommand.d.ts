import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeHostsRequest, DescribeHostsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeHostsCommandInput = DescribeHostsRequest;
export declare type DescribeHostsCommandOutput = DescribeHostsResult & __MetadataBearer;
export declare class DescribeHostsCommand extends $Command<DescribeHostsCommandInput, DescribeHostsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeHostsCommandInput;
    constructor(input: DescribeHostsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeHostsCommandInput, DescribeHostsCommandOutput>;
    private serialize;
    private deserialize;
}
