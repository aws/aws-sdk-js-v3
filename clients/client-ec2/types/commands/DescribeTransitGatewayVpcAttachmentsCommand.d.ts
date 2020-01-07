import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeTransitGatewayVpcAttachmentsRequest, DescribeTransitGatewayVpcAttachmentsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeTransitGatewayVpcAttachmentsCommandInput = DescribeTransitGatewayVpcAttachmentsRequest;
export declare type DescribeTransitGatewayVpcAttachmentsCommandOutput = DescribeTransitGatewayVpcAttachmentsResult & __MetadataBearer;
export declare class DescribeTransitGatewayVpcAttachmentsCommand extends $Command<DescribeTransitGatewayVpcAttachmentsCommandInput, DescribeTransitGatewayVpcAttachmentsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeTransitGatewayVpcAttachmentsCommandInput;
    constructor(input: DescribeTransitGatewayVpcAttachmentsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTransitGatewayVpcAttachmentsCommandInput, DescribeTransitGatewayVpcAttachmentsCommandOutput>;
    private serialize;
    private deserialize;
}
