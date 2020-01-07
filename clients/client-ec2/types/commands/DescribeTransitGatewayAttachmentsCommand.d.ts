import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeTransitGatewayAttachmentsRequest, DescribeTransitGatewayAttachmentsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeTransitGatewayAttachmentsCommandInput = DescribeTransitGatewayAttachmentsRequest;
export declare type DescribeTransitGatewayAttachmentsCommandOutput = DescribeTransitGatewayAttachmentsResult & __MetadataBearer;
export declare class DescribeTransitGatewayAttachmentsCommand extends $Command<DescribeTransitGatewayAttachmentsCommandInput, DescribeTransitGatewayAttachmentsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeTransitGatewayAttachmentsCommandInput;
    constructor(input: DescribeTransitGatewayAttachmentsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTransitGatewayAttachmentsCommandInput, DescribeTransitGatewayAttachmentsCommandOutput>;
    private serialize;
    private deserialize;
}
