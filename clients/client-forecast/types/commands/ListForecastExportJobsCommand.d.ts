import { ServiceInputTypes, ServiceOutputTypes, forecastClientResolvedConfig } from "../forecastClient";
import { ListForecastExportJobsRequest, ListForecastExportJobsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListForecastExportJobsCommandInput = ListForecastExportJobsRequest;
export declare type ListForecastExportJobsCommandOutput = ListForecastExportJobsResponse & __MetadataBearer;
export declare class ListForecastExportJobsCommand extends $Command<ListForecastExportJobsCommandInput, ListForecastExportJobsCommandOutput, forecastClientResolvedConfig> {
    readonly input: ListForecastExportJobsCommandInput;
    constructor(input: ListForecastExportJobsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: forecastClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListForecastExportJobsCommandInput, ListForecastExportJobsCommandOutput>;
    private serialize;
    private deserialize;
}
