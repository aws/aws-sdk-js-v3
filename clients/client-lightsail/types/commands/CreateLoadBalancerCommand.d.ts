import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { CreateLoadBalancerRequest, CreateLoadBalancerResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateLoadBalancerCommandInput = CreateLoadBalancerRequest;
export declare type CreateLoadBalancerCommandOutput = CreateLoadBalancerResult & __MetadataBearer;
export declare class CreateLoadBalancerCommand extends $Command<CreateLoadBalancerCommandInput, CreateLoadBalancerCommandOutput, LightsailClientResolvedConfig> {
    readonly input: CreateLoadBalancerCommandInput;
    constructor(input: CreateLoadBalancerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateLoadBalancerCommandInput, CreateLoadBalancerCommandOutput>;
    private serialize;
    private deserialize;
}
