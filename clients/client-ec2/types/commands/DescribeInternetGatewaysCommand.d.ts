import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeInternetGatewaysRequest, DescribeInternetGatewaysResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeInternetGatewaysCommandInput = DescribeInternetGatewaysRequest;
export declare type DescribeInternetGatewaysCommandOutput = DescribeInternetGatewaysResult & __MetadataBearer;
export declare class DescribeInternetGatewaysCommand extends $Command<DescribeInternetGatewaysCommandInput, DescribeInternetGatewaysCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeInternetGatewaysCommandInput;
    constructor(input: DescribeInternetGatewaysCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeInternetGatewaysCommandInput, DescribeInternetGatewaysCommandOutput>;
    private serialize;
    private deserialize;
}
