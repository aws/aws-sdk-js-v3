import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeSpotFleetInstancesRequest, DescribeSpotFleetInstancesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeSpotFleetInstancesCommandInput = DescribeSpotFleetInstancesRequest;
export declare type DescribeSpotFleetInstancesCommandOutput = DescribeSpotFleetInstancesResponse & __MetadataBearer;
export declare class DescribeSpotFleetInstancesCommand extends $Command<DescribeSpotFleetInstancesCommandInput, DescribeSpotFleetInstancesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeSpotFleetInstancesCommandInput;
    constructor(input: DescribeSpotFleetInstancesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeSpotFleetInstancesCommandInput, DescribeSpotFleetInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
