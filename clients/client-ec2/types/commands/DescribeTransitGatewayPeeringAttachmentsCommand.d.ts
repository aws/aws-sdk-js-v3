import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeTransitGatewayPeeringAttachmentsRequest, DescribeTransitGatewayPeeringAttachmentsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeTransitGatewayPeeringAttachmentsCommandInput = DescribeTransitGatewayPeeringAttachmentsRequest;
export declare type DescribeTransitGatewayPeeringAttachmentsCommandOutput = DescribeTransitGatewayPeeringAttachmentsResult & __MetadataBearer;
export declare class DescribeTransitGatewayPeeringAttachmentsCommand extends $Command<DescribeTransitGatewayPeeringAttachmentsCommandInput, DescribeTransitGatewayPeeringAttachmentsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeTransitGatewayPeeringAttachmentsCommandInput;
    constructor(input: DescribeTransitGatewayPeeringAttachmentsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTransitGatewayPeeringAttachmentsCommandInput, DescribeTransitGatewayPeeringAttachmentsCommandOutput>;
    private serialize;
    private deserialize;
}
