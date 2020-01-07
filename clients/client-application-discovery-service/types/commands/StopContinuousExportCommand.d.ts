import { ApplicationDiscoveryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApplicationDiscoveryServiceClient";
import { StopContinuousExportRequest, StopContinuousExportResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StopContinuousExportCommandInput = StopContinuousExportRequest;
export declare type StopContinuousExportCommandOutput = StopContinuousExportResponse & __MetadataBearer;
export declare class StopContinuousExportCommand extends $Command<StopContinuousExportCommandInput, StopContinuousExportCommandOutput, ApplicationDiscoveryServiceClientResolvedConfig> {
    readonly input: StopContinuousExportCommandInput;
    constructor(input: StopContinuousExportCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ApplicationDiscoveryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopContinuousExportCommandInput, StopContinuousExportCommandOutput>;
    private serialize;
    private deserialize;
}
