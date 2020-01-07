import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { GetMetricDataInput, GetMetricDataOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetMetricDataCommandInput = GetMetricDataInput;
export declare type GetMetricDataCommandOutput = GetMetricDataOutput & __MetadataBearer;
export declare class GetMetricDataCommand extends $Command<GetMetricDataCommandInput, GetMetricDataCommandOutput, CloudWatchClientResolvedConfig> {
    readonly input: GetMetricDataCommandInput;
    constructor(input: GetMetricDataCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetMetricDataCommandInput, GetMetricDataCommandOutput>;
    private serialize;
    private deserialize;
}
