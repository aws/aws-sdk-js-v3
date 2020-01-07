import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { DetachLoadBalancerTargetGroupsResultType, DetachLoadBalancerTargetGroupsType } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DetachLoadBalancerTargetGroupsCommandInput = DetachLoadBalancerTargetGroupsType;
export declare type DetachLoadBalancerTargetGroupsCommandOutput = DetachLoadBalancerTargetGroupsResultType & __MetadataBearer;
export declare class DetachLoadBalancerTargetGroupsCommand extends $Command<DetachLoadBalancerTargetGroupsCommandInput, DetachLoadBalancerTargetGroupsCommandOutput, AutoScalingClientResolvedConfig> {
    readonly input: DetachLoadBalancerTargetGroupsCommandInput;
    constructor(input: DetachLoadBalancerTargetGroupsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AutoScalingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DetachLoadBalancerTargetGroupsCommandInput, DetachLoadBalancerTargetGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
