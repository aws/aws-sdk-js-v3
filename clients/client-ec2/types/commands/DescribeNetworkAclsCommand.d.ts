import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeNetworkAclsRequest, DescribeNetworkAclsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeNetworkAclsCommandInput = DescribeNetworkAclsRequest;
export declare type DescribeNetworkAclsCommandOutput = DescribeNetworkAclsResult & __MetadataBearer;
export declare class DescribeNetworkAclsCommand extends $Command<DescribeNetworkAclsCommandInput, DescribeNetworkAclsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeNetworkAclsCommandInput;
    constructor(input: DescribeNetworkAclsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeNetworkAclsCommandInput, DescribeNetworkAclsCommandOutput>;
    private serialize;
    private deserialize;
}
