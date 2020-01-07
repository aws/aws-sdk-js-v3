import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeMonitoringScheduleRequest, DescribeMonitoringScheduleResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeMonitoringScheduleCommandInput = DescribeMonitoringScheduleRequest;
export declare type DescribeMonitoringScheduleCommandOutput = DescribeMonitoringScheduleResponse & __MetadataBearer;
export declare class DescribeMonitoringScheduleCommand extends $Command<DescribeMonitoringScheduleCommandInput, DescribeMonitoringScheduleCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DescribeMonitoringScheduleCommandInput;
    constructor(input: DescribeMonitoringScheduleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeMonitoringScheduleCommandInput, DescribeMonitoringScheduleCommandOutput>;
    private serialize;
    private deserialize;
}
