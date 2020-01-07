import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeTransitGatewaysRequest, DescribeTransitGatewaysResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeTransitGatewaysCommandInput = DescribeTransitGatewaysRequest;
export declare type DescribeTransitGatewaysCommandOutput = DescribeTransitGatewaysResult & __MetadataBearer;
export declare class DescribeTransitGatewaysCommand extends $Command<DescribeTransitGatewaysCommandInput, DescribeTransitGatewaysCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeTransitGatewaysCommandInput;
    constructor(input: DescribeTransitGatewaysCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTransitGatewaysCommandInput, DescribeTransitGatewaysCommandOutput>;
    private serialize;
    private deserialize;
}
