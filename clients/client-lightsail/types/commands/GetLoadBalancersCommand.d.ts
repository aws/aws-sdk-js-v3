import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetLoadBalancersRequest, GetLoadBalancersResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetLoadBalancersCommandInput = GetLoadBalancersRequest;
export declare type GetLoadBalancersCommandOutput = GetLoadBalancersResult & __MetadataBearer;
export declare class GetLoadBalancersCommand extends $Command<GetLoadBalancersCommandInput, GetLoadBalancersCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetLoadBalancersCommandInput;
    constructor(input: GetLoadBalancersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetLoadBalancersCommandInput, GetLoadBalancersCommandOutput>;
    private serialize;
    private deserialize;
}
