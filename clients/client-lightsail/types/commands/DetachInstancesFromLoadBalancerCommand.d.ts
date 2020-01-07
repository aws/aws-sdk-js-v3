import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { DetachInstancesFromLoadBalancerRequest, DetachInstancesFromLoadBalancerResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DetachInstancesFromLoadBalancerCommandInput = DetachInstancesFromLoadBalancerRequest;
export declare type DetachInstancesFromLoadBalancerCommandOutput = DetachInstancesFromLoadBalancerResult & __MetadataBearer;
export declare class DetachInstancesFromLoadBalancerCommand extends $Command<DetachInstancesFromLoadBalancerCommandInput, DetachInstancesFromLoadBalancerCommandOutput, LightsailClientResolvedConfig> {
    readonly input: DetachInstancesFromLoadBalancerCommandInput;
    constructor(input: DetachInstancesFromLoadBalancerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DetachInstancesFromLoadBalancerCommandInput, DetachInstancesFromLoadBalancerCommandOutput>;
    private serialize;
    private deserialize;
}
