import { ServiceInputTypes, ServiceOutputTypes, forecastClientResolvedConfig } from "../forecastClient";
import { DescribeForecastRequest, DescribeForecastResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeForecastCommandInput = DescribeForecastRequest;
export declare type DescribeForecastCommandOutput = DescribeForecastResponse & __MetadataBearer;
export declare class DescribeForecastCommand extends $Command<DescribeForecastCommandInput, DescribeForecastCommandOutput, forecastClientResolvedConfig> {
    readonly input: DescribeForecastCommandInput;
    constructor(input: DescribeForecastCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: forecastClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeForecastCommandInput, DescribeForecastCommandOutput>;
    private serialize;
    private deserialize;
}
