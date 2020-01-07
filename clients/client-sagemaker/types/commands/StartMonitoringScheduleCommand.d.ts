import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { StartMonitoringScheduleRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartMonitoringScheduleCommandInput = StartMonitoringScheduleRequest;
export declare type StartMonitoringScheduleCommandOutput = __MetadataBearer;
export declare class StartMonitoringScheduleCommand extends $Command<StartMonitoringScheduleCommandInput, StartMonitoringScheduleCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: StartMonitoringScheduleCommandInput;
    constructor(input: StartMonitoringScheduleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartMonitoringScheduleCommandInput, StartMonitoringScheduleCommandOutput>;
    private serialize;
    private deserialize;
}
