import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { StopMonitoringScheduleRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StopMonitoringScheduleCommandInput = StopMonitoringScheduleRequest;
export declare type StopMonitoringScheduleCommandOutput = __MetadataBearer;
export declare class StopMonitoringScheduleCommand extends $Command<StopMonitoringScheduleCommandInput, StopMonitoringScheduleCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: StopMonitoringScheduleCommandInput;
    constructor(input: StopMonitoringScheduleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopMonitoringScheduleCommandInput, StopMonitoringScheduleCommandOutput>;
    private serialize;
    private deserialize;
}
