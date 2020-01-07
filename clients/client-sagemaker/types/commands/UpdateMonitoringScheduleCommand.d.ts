import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { UpdateMonitoringScheduleRequest, UpdateMonitoringScheduleResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateMonitoringScheduleCommandInput = UpdateMonitoringScheduleRequest;
export declare type UpdateMonitoringScheduleCommandOutput = UpdateMonitoringScheduleResponse & __MetadataBearer;
export declare class UpdateMonitoringScheduleCommand extends $Command<UpdateMonitoringScheduleCommandInput, UpdateMonitoringScheduleCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: UpdateMonitoringScheduleCommandInput;
    constructor(input: UpdateMonitoringScheduleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateMonitoringScheduleCommandInput, UpdateMonitoringScheduleCommandOutput>;
    private serialize;
    private deserialize;
}
