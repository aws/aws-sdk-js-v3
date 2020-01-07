import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeCoipPoolsRequest, DescribeCoipPoolsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeCoipPoolsCommandInput = DescribeCoipPoolsRequest;
export declare type DescribeCoipPoolsCommandOutput = DescribeCoipPoolsResult & __MetadataBearer;
export declare class DescribeCoipPoolsCommand extends $Command<DescribeCoipPoolsCommandInput, DescribeCoipPoolsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeCoipPoolsCommandInput;
    constructor(input: DescribeCoipPoolsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeCoipPoolsCommandInput, DescribeCoipPoolsCommandOutput>;
    private serialize;
    private deserialize;
}
