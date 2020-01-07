import { ApplicationDiscoveryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApplicationDiscoveryServiceClient";
import { StartExportTaskRequest, StartExportTaskResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartExportTaskCommandInput = StartExportTaskRequest;
export declare type StartExportTaskCommandOutput = StartExportTaskResponse & __MetadataBearer;
export declare class StartExportTaskCommand extends $Command<StartExportTaskCommandInput, StartExportTaskCommandOutput, ApplicationDiscoveryServiceClientResolvedConfig> {
    readonly input: StartExportTaskCommandInput;
    constructor(input: StartExportTaskCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ApplicationDiscoveryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartExportTaskCommandInput, StartExportTaskCommandOutput>;
    private serialize;
    private deserialize;
}
