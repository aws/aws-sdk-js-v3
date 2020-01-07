import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { DetachLoadBalancersResultType, DetachLoadBalancersType } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DetachLoadBalancersCommandInput = DetachLoadBalancersType;
export declare type DetachLoadBalancersCommandOutput = DetachLoadBalancersResultType & __MetadataBearer;
export declare class DetachLoadBalancersCommand extends $Command<DetachLoadBalancersCommandInput, DetachLoadBalancersCommandOutput, AutoScalingClientResolvedConfig> {
    readonly input: DetachLoadBalancersCommandInput;
    constructor(input: DetachLoadBalancersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AutoScalingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DetachLoadBalancersCommandInput, DetachLoadBalancersCommandOutput>;
    private serialize;
    private deserialize;
}
