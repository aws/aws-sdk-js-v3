import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetInstanceMetricDataRequest, GetInstanceMetricDataResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetInstanceMetricDataCommandInput = GetInstanceMetricDataRequest;
export declare type GetInstanceMetricDataCommandOutput = GetInstanceMetricDataResult & __MetadataBearer;
export declare class GetInstanceMetricDataCommand extends $Command<GetInstanceMetricDataCommandInput, GetInstanceMetricDataCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetInstanceMetricDataCommandInput;
    constructor(input: GetInstanceMetricDataCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetInstanceMetricDataCommandInput, GetInstanceMetricDataCommandOutput>;
    private serialize;
    private deserialize;
}
