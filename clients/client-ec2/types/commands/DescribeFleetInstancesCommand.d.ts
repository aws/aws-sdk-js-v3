import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeFleetInstancesRequest, DescribeFleetInstancesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeFleetInstancesCommandInput = DescribeFleetInstancesRequest;
export declare type DescribeFleetInstancesCommandOutput = DescribeFleetInstancesResult & __MetadataBearer;
export declare class DescribeFleetInstancesCommand extends $Command<DescribeFleetInstancesCommandInput, DescribeFleetInstancesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeFleetInstancesCommandInput;
    constructor(input: DescribeFleetInstancesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeFleetInstancesCommandInput, DescribeFleetInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
