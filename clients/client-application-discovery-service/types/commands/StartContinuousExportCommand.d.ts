import { ApplicationDiscoveryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApplicationDiscoveryServiceClient";
import { StartContinuousExportRequest, StartContinuousExportResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartContinuousExportCommandInput = StartContinuousExportRequest;
export declare type StartContinuousExportCommandOutput = StartContinuousExportResponse & __MetadataBearer;
export declare class StartContinuousExportCommand extends $Command<StartContinuousExportCommandInput, StartContinuousExportCommandOutput, ApplicationDiscoveryServiceClientResolvedConfig> {
    readonly input: StartContinuousExportCommandInput;
    constructor(input: StartContinuousExportCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ApplicationDiscoveryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartContinuousExportCommandInput, StartContinuousExportCommandOutput>;
    private serialize;
    private deserialize;
}
