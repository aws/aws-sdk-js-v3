import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetLoadBalancerMetricDataRequest, GetLoadBalancerMetricDataResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetLoadBalancerMetricDataCommandInput = GetLoadBalancerMetricDataRequest;
export declare type GetLoadBalancerMetricDataCommandOutput = GetLoadBalancerMetricDataResult & __MetadataBearer;
export declare class GetLoadBalancerMetricDataCommand extends $Command<GetLoadBalancerMetricDataCommandInput, GetLoadBalancerMetricDataCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetLoadBalancerMetricDataCommandInput;
    constructor(input: GetLoadBalancerMetricDataCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetLoadBalancerMetricDataCommandInput, GetLoadBalancerMetricDataCommandOutput>;
    private serialize;
    private deserialize;
}
