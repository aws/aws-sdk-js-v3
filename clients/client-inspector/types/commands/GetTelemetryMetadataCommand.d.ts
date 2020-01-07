import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { GetTelemetryMetadataRequest, GetTelemetryMetadataResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetTelemetryMetadataCommandInput = GetTelemetryMetadataRequest;
export declare type GetTelemetryMetadataCommandOutput = GetTelemetryMetadataResponse & __MetadataBearer;
export declare class GetTelemetryMetadataCommand extends $Command<GetTelemetryMetadataCommandInput, GetTelemetryMetadataCommandOutput, InspectorClientResolvedConfig> {
    readonly input: GetTelemetryMetadataCommandInput;
    constructor(input: GetTelemetryMetadataCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: InspectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetTelemetryMetadataCommandInput, GetTelemetryMetadataCommandOutput>;
    private serialize;
    private deserialize;
}
