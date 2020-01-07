import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateMonitoringScheduleRequest, CreateMonitoringScheduleResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateMonitoringScheduleCommandInput = CreateMonitoringScheduleRequest;
export declare type CreateMonitoringScheduleCommandOutput = CreateMonitoringScheduleResponse & __MetadataBearer;
export declare class CreateMonitoringScheduleCommand extends $Command<CreateMonitoringScheduleCommandInput, CreateMonitoringScheduleCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: CreateMonitoringScheduleCommandInput;
    constructor(input: CreateMonitoringScheduleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateMonitoringScheduleCommandInput, CreateMonitoringScheduleCommandOutput>;
    private serialize;
    private deserialize;
}
