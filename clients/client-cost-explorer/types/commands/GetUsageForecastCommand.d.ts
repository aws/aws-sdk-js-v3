import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { GetUsageForecastRequest, GetUsageForecastResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetUsageForecastCommandInput = GetUsageForecastRequest;
export declare type GetUsageForecastCommandOutput = GetUsageForecastResponse & __MetadataBearer;
export declare class GetUsageForecastCommand extends $Command<GetUsageForecastCommandInput, GetUsageForecastCommandOutput, CostExplorerClientResolvedConfig> {
    readonly input: GetUsageForecastCommandInput;
    constructor(input: GetUsageForecastCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CostExplorerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetUsageForecastCommandInput, GetUsageForecastCommandOutput>;
    private serialize;
    private deserialize;
}
