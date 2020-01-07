import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeFlowLogsRequest, DescribeFlowLogsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeFlowLogsCommandInput = DescribeFlowLogsRequest;
export declare type DescribeFlowLogsCommandOutput = DescribeFlowLogsResult & __MetadataBearer;
export declare class DescribeFlowLogsCommand extends $Command<DescribeFlowLogsCommandInput, DescribeFlowLogsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeFlowLogsCommandInput;
    constructor(input: DescribeFlowLogsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeFlowLogsCommandInput, DescribeFlowLogsCommandOutput>;
    private serialize;
    private deserialize;
}
