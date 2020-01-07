import { ApplicationDiscoveryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApplicationDiscoveryServiceClient";
import { StartImportTaskRequest, StartImportTaskResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartImportTaskCommandInput = StartImportTaskRequest;
export declare type StartImportTaskCommandOutput = StartImportTaskResponse & __MetadataBearer;
export declare class StartImportTaskCommand extends $Command<StartImportTaskCommandInput, StartImportTaskCommandOutput, ApplicationDiscoveryServiceClientResolvedConfig> {
    readonly input: StartImportTaskCommandInput;
    constructor(input: StartImportTaskCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ApplicationDiscoveryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartImportTaskCommandInput, StartImportTaskCommandOutput>;
    private serialize;
    private deserialize;
}
