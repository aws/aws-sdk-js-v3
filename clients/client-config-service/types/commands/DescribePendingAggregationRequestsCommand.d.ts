import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DescribePendingAggregationRequestsRequest, DescribePendingAggregationRequestsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribePendingAggregationRequestsCommandInput = DescribePendingAggregationRequestsRequest;
export declare type DescribePendingAggregationRequestsCommandOutput = DescribePendingAggregationRequestsResponse & __MetadataBearer;
export declare class DescribePendingAggregationRequestsCommand extends $Command<DescribePendingAggregationRequestsCommandInput, DescribePendingAggregationRequestsCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: DescribePendingAggregationRequestsCommandInput;
    constructor(input: DescribePendingAggregationRequestsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribePendingAggregationRequestsCommandInput, DescribePendingAggregationRequestsCommandOutput>;
    private serialize;
    private deserialize;
}
