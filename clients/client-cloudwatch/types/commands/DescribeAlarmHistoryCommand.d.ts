import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { DescribeAlarmHistoryInput, DescribeAlarmHistoryOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeAlarmHistoryCommandInput = DescribeAlarmHistoryInput;
export declare type DescribeAlarmHistoryCommandOutput = DescribeAlarmHistoryOutput & __MetadataBearer;
export declare class DescribeAlarmHistoryCommand extends $Command<DescribeAlarmHistoryCommandInput, DescribeAlarmHistoryCommandOutput, CloudWatchClientResolvedConfig> {
    readonly input: DescribeAlarmHistoryCommandInput;
    constructor(input: DescribeAlarmHistoryCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAlarmHistoryCommandInput, DescribeAlarmHistoryCommandOutput>;
    private serialize;
    private deserialize;
}
