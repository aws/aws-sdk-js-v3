import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { GetCostForecastRequest, GetCostForecastResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetCostForecastCommandInput = GetCostForecastRequest;
export declare type GetCostForecastCommandOutput = GetCostForecastResponse & __MetadataBearer;
export declare class GetCostForecastCommand extends $Command<GetCostForecastCommandInput, GetCostForecastCommandOutput, CostExplorerClientResolvedConfig> {
    readonly input: GetCostForecastCommandInput;
    constructor(input: GetCostForecastCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CostExplorerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCostForecastCommandInput, GetCostForecastCommandOutput>;
    private serialize;
    private deserialize;
}
