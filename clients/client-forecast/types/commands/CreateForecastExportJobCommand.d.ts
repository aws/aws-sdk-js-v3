import { ServiceInputTypes, ServiceOutputTypes, forecastClientResolvedConfig } from "../forecastClient";
import { CreateForecastExportJobRequest, CreateForecastExportJobResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateForecastExportJobCommandInput = CreateForecastExportJobRequest;
export declare type CreateForecastExportJobCommandOutput = CreateForecastExportJobResponse & __MetadataBearer;
export declare class CreateForecastExportJobCommand extends $Command<CreateForecastExportJobCommandInput, CreateForecastExportJobCommandOutput, forecastClientResolvedConfig> {
    readonly input: CreateForecastExportJobCommandInput;
    constructor(input: CreateForecastExportJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: forecastClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateForecastExportJobCommandInput, CreateForecastExportJobCommandOutput>;
    private serialize;
    private deserialize;
}
