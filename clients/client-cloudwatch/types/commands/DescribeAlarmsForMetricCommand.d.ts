import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { DescribeAlarmsForMetricInput, DescribeAlarmsForMetricOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeAlarmsForMetricCommandInput = DescribeAlarmsForMetricInput;
export declare type DescribeAlarmsForMetricCommandOutput = DescribeAlarmsForMetricOutput & __MetadataBearer;
export declare class DescribeAlarmsForMetricCommand extends $Command<DescribeAlarmsForMetricCommandInput, DescribeAlarmsForMetricCommandOutput, CloudWatchClientResolvedConfig> {
    readonly input: DescribeAlarmsForMetricCommandInput;
    constructor(input: DescribeAlarmsForMetricCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAlarmsForMetricCommandInput, DescribeAlarmsForMetricCommandOutput>;
    private serialize;
    private deserialize;
}
