import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeFleetHistoryRequest, DescribeFleetHistoryResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeFleetHistoryCommandInput = DescribeFleetHistoryRequest;
export declare type DescribeFleetHistoryCommandOutput = DescribeFleetHistoryResult & __MetadataBearer;
export declare class DescribeFleetHistoryCommand extends $Command<DescribeFleetHistoryCommandInput, DescribeFleetHistoryCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeFleetHistoryCommandInput;
    constructor(input: DescribeFleetHistoryCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeFleetHistoryCommandInput, DescribeFleetHistoryCommandOutput>;
    private serialize;
    private deserialize;
}
