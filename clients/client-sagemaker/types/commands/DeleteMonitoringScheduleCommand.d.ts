import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DeleteMonitoringScheduleRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteMonitoringScheduleCommandInput = DeleteMonitoringScheduleRequest;
export declare type DeleteMonitoringScheduleCommandOutput = __MetadataBearer;
export declare class DeleteMonitoringScheduleCommand extends $Command<DeleteMonitoringScheduleCommandInput, DeleteMonitoringScheduleCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DeleteMonitoringScheduleCommandInput;
    constructor(input: DeleteMonitoringScheduleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteMonitoringScheduleCommandInput, DeleteMonitoringScheduleCommandOutput>;
    private serialize;
    private deserialize;
}
