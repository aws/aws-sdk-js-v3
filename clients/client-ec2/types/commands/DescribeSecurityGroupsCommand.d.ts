import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeSecurityGroupsRequest, DescribeSecurityGroupsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeSecurityGroupsCommandInput = DescribeSecurityGroupsRequest;
export declare type DescribeSecurityGroupsCommandOutput = DescribeSecurityGroupsResult & __MetadataBearer;
export declare class DescribeSecurityGroupsCommand extends $Command<DescribeSecurityGroupsCommandInput, DescribeSecurityGroupsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeSecurityGroupsCommandInput;
    constructor(input: DescribeSecurityGroupsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeSecurityGroupsCommandInput, DescribeSecurityGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
