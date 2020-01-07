import { PIClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PIClient";
import { GetResourceMetricsRequest, GetResourceMetricsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetResourceMetricsCommandInput = GetResourceMetricsRequest;
export declare type GetResourceMetricsCommandOutput = GetResourceMetricsResponse & __MetadataBearer;
export declare class GetResourceMetricsCommand extends $Command<GetResourceMetricsCommandInput, GetResourceMetricsCommandOutput, PIClientResolvedConfig> {
    readonly input: GetResourceMetricsCommandInput;
    constructor(input: GetResourceMetricsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PIClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetResourceMetricsCommandInput, GetResourceMetricsCommandOutput>;
    private serialize;
    private deserialize;
}
