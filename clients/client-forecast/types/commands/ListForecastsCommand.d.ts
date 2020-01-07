import { ServiceInputTypes, ServiceOutputTypes, forecastClientResolvedConfig } from "../forecastClient";
import { ListForecastsRequest, ListForecastsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListForecastsCommandInput = ListForecastsRequest;
export declare type ListForecastsCommandOutput = ListForecastsResponse & __MetadataBearer;
export declare class ListForecastsCommand extends $Command<ListForecastsCommandInput, ListForecastsCommandOutput, forecastClientResolvedConfig> {
    readonly input: ListForecastsCommandInput;
    constructor(input: ListForecastsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: forecastClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListForecastsCommandInput, ListForecastsCommandOutput>;
    private serialize;
    private deserialize;
}
