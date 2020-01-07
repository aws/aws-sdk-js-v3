import { ApplicationDiscoveryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApplicationDiscoveryServiceClient";
import { ExportConfigurationsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ExportConfigurationsCommandInput = {};
export declare type ExportConfigurationsCommandOutput = ExportConfigurationsResponse & __MetadataBearer;
export declare class ExportConfigurationsCommand extends $Command<ExportConfigurationsCommandInput, ExportConfigurationsCommandOutput, ApplicationDiscoveryServiceClientResolvedConfig> {
    readonly input: ExportConfigurationsCommandInput;
    constructor(input: ExportConfigurationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ApplicationDiscoveryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ExportConfigurationsCommandInput, ExportConfigurationsCommandOutput>;
    private serialize;
    private deserialize;
}
