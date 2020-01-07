import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { ListMetricsInput, ListMetricsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListMetricsCommandInput = ListMetricsInput;
export declare type ListMetricsCommandOutput = ListMetricsOutput & __MetadataBearer;
export declare class ListMetricsCommand extends $Command<ListMetricsCommandInput, ListMetricsCommandOutput, CloudWatchClientResolvedConfig> {
    readonly input: ListMetricsCommandInput;
    constructor(input: ListMetricsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListMetricsCommandInput, ListMetricsCommandOutput>;
    private serialize;
    private deserialize;
}
