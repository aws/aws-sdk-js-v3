import { ServiceInputTypes, ServiceOutputTypes, forecastClientResolvedConfig } from "../forecastClient";
import { GetAccuracyMetricsRequest, GetAccuracyMetricsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetAccuracyMetricsCommandInput = GetAccuracyMetricsRequest;
export declare type GetAccuracyMetricsCommandOutput = GetAccuracyMetricsResponse & __MetadataBearer;
export declare class GetAccuracyMetricsCommand extends $Command<GetAccuracyMetricsCommandInput, GetAccuracyMetricsCommandOutput, forecastClientResolvedConfig> {
    readonly input: GetAccuracyMetricsCommandInput;
    constructor(input: GetAccuracyMetricsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: forecastClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAccuracyMetricsCommandInput, GetAccuracyMetricsCommandOutput>;
    private serialize;
    private deserialize;
}
