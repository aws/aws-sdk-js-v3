import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeLocalGatewaysRequest, DescribeLocalGatewaysResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeLocalGatewaysCommandInput = DescribeLocalGatewaysRequest;
export declare type DescribeLocalGatewaysCommandOutput = DescribeLocalGatewaysResult & __MetadataBearer;
export declare class DescribeLocalGatewaysCommand extends $Command<DescribeLocalGatewaysCommandInput, DescribeLocalGatewaysCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeLocalGatewaysCommandInput;
    constructor(input: DescribeLocalGatewaysCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeLocalGatewaysCommandInput, DescribeLocalGatewaysCommandOutput>;
    private serialize;
    private deserialize;
}
