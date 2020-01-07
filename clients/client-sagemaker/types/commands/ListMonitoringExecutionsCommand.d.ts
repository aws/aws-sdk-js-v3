import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListMonitoringExecutionsRequest, ListMonitoringExecutionsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListMonitoringExecutionsCommandInput = ListMonitoringExecutionsRequest;
export declare type ListMonitoringExecutionsCommandOutput = ListMonitoringExecutionsResponse & __MetadataBearer;
export declare class ListMonitoringExecutionsCommand extends $Command<ListMonitoringExecutionsCommandInput, ListMonitoringExecutionsCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: ListMonitoringExecutionsCommandInput;
    constructor(input: ListMonitoringExecutionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListMonitoringExecutionsCommandInput, ListMonitoringExecutionsCommandOutput>;
    private serialize;
    private deserialize;
}
