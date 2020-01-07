import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeSpotFleetRequestHistoryRequest, DescribeSpotFleetRequestHistoryResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeSpotFleetRequestHistoryCommandInput = DescribeSpotFleetRequestHistoryRequest;
export declare type DescribeSpotFleetRequestHistoryCommandOutput = DescribeSpotFleetRequestHistoryResponse & __MetadataBearer;
export declare class DescribeSpotFleetRequestHistoryCommand extends $Command<DescribeSpotFleetRequestHistoryCommandInput, DescribeSpotFleetRequestHistoryCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeSpotFleetRequestHistoryCommandInput;
    constructor(input: DescribeSpotFleetRequestHistoryCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeSpotFleetRequestHistoryCommandInput, DescribeSpotFleetRequestHistoryCommandOutput>;
    private serialize;
    private deserialize;
}
