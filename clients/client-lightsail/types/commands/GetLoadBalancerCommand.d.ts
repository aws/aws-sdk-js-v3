import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetLoadBalancerRequest, GetLoadBalancerResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetLoadBalancerCommandInput = GetLoadBalancerRequest;
export declare type GetLoadBalancerCommandOutput = GetLoadBalancerResult & __MetadataBearer;
export declare class GetLoadBalancerCommand extends $Command<GetLoadBalancerCommandInput, GetLoadBalancerCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetLoadBalancerCommandInput;
    constructor(input: GetLoadBalancerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetLoadBalancerCommandInput, GetLoadBalancerCommandOutput>;
    private serialize;
    private deserialize;
}
