import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListMonitoringSchedulesRequest, ListMonitoringSchedulesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListMonitoringSchedulesCommandInput = ListMonitoringSchedulesRequest;
export declare type ListMonitoringSchedulesCommandOutput = ListMonitoringSchedulesResponse & __MetadataBearer;
export declare class ListMonitoringSchedulesCommand extends $Command<ListMonitoringSchedulesCommandInput, ListMonitoringSchedulesCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: ListMonitoringSchedulesCommandInput;
    constructor(input: ListMonitoringSchedulesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListMonitoringSchedulesCommandInput, ListMonitoringSchedulesCommandOutput>;
    private serialize;
    private deserialize;
}
