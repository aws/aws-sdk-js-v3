import { ServiceInputTypes, ServiceOutputTypes, forecastClientResolvedConfig } from "../forecastClient";
import { CreateForecastRequest, CreateForecastResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateForecastCommandInput = CreateForecastRequest;
export declare type CreateForecastCommandOutput = CreateForecastResponse & __MetadataBearer;
export declare class CreateForecastCommand extends $Command<CreateForecastCommandInput, CreateForecastCommandOutput, forecastClientResolvedConfig> {
    readonly input: CreateForecastCommandInput;
    constructor(input: CreateForecastCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: forecastClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateForecastCommandInput, CreateForecastCommandOutput>;
    private serialize;
    private deserialize;
}
