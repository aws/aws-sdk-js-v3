import { ServiceInputTypes, ServiceOutputTypes, forecastClientResolvedConfig } from "../forecastClient";
import { DescribeForecastExportJobRequest, DescribeForecastExportJobResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeForecastExportJobCommandInput = DescribeForecastExportJobRequest;
export declare type DescribeForecastExportJobCommandOutput = DescribeForecastExportJobResponse & __MetadataBearer;
export declare class DescribeForecastExportJobCommand extends $Command<DescribeForecastExportJobCommandInput, DescribeForecastExportJobCommandOutput, forecastClientResolvedConfig> {
    readonly input: DescribeForecastExportJobCommandInput;
    constructor(input: DescribeForecastExportJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: forecastClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeForecastExportJobCommandInput, DescribeForecastExportJobCommandOutput>;
    private serialize;
    private deserialize;
}
