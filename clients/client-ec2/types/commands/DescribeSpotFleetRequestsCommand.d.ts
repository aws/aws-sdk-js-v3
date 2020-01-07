import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeSpotFleetRequestsRequest, DescribeSpotFleetRequestsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeSpotFleetRequestsCommandInput = DescribeSpotFleetRequestsRequest;
export declare type DescribeSpotFleetRequestsCommandOutput = DescribeSpotFleetRequestsResponse & __MetadataBearer;
export declare class DescribeSpotFleetRequestsCommand extends $Command<DescribeSpotFleetRequestsCommandInput, DescribeSpotFleetRequestsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeSpotFleetRequestsCommandInput;
    constructor(input: DescribeSpotFleetRequestsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeSpotFleetRequestsCommandInput, DescribeSpotFleetRequestsCommandOutput>;
    private serialize;
    private deserialize;
}
