import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeStaleSecurityGroupsRequest, DescribeStaleSecurityGroupsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeStaleSecurityGroupsCommandInput = DescribeStaleSecurityGroupsRequest;
export declare type DescribeStaleSecurityGroupsCommandOutput = DescribeStaleSecurityGroupsResult & __MetadataBearer;
export declare class DescribeStaleSecurityGroupsCommand extends $Command<DescribeStaleSecurityGroupsCommandInput, DescribeStaleSecurityGroupsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeStaleSecurityGroupsCommandInput;
    constructor(input: DescribeStaleSecurityGroupsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeStaleSecurityGroupsCommandInput, DescribeStaleSecurityGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
