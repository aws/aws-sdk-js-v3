import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { DescribeAlarmsInput, DescribeAlarmsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeAlarmsCommandInput = DescribeAlarmsInput;
export declare type DescribeAlarmsCommandOutput = DescribeAlarmsOutput & __MetadataBearer;
export declare class DescribeAlarmsCommand extends $Command<DescribeAlarmsCommandInput, DescribeAlarmsCommandOutput, CloudWatchClientResolvedConfig> {
    readonly input: DescribeAlarmsCommandInput;
    constructor(input: DescribeAlarmsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAlarmsCommandInput, DescribeAlarmsCommandOutput>;
    private serialize;
    private deserialize;
}
