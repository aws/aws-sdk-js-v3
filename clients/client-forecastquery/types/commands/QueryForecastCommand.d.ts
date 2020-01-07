import { ServiceInputTypes, ServiceOutputTypes, forecastqueryClientResolvedConfig } from "../forecastqueryClient";
import { QueryForecastRequest, QueryForecastResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type QueryForecastCommandInput = QueryForecastRequest;
export declare type QueryForecastCommandOutput = QueryForecastResponse & __MetadataBearer;
export declare class QueryForecastCommand extends $Command<QueryForecastCommandInput, QueryForecastCommandOutput, forecastqueryClientResolvedConfig> {
    readonly input: QueryForecastCommandInput;
    constructor(input: QueryForecastCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: forecastqueryClientResolvedConfig, options?: __HttpHandlerOptions): Handler<QueryForecastCommandInput, QueryForecastCommandOutput>;
    private serialize;
    private deserialize;
}
