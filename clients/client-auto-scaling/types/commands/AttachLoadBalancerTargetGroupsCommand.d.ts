import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { AttachLoadBalancerTargetGroupsResultType, AttachLoadBalancerTargetGroupsType } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AttachLoadBalancerTargetGroupsCommandInput = AttachLoadBalancerTargetGroupsType;
export declare type AttachLoadBalancerTargetGroupsCommandOutput = AttachLoadBalancerTargetGroupsResultType & __MetadataBearer;
export declare class AttachLoadBalancerTargetGroupsCommand extends $Command<AttachLoadBalancerTargetGroupsCommandInput, AttachLoadBalancerTargetGroupsCommandOutput, AutoScalingClientResolvedConfig> {
    readonly input: AttachLoadBalancerTargetGroupsCommandInput;
    constructor(input: AttachLoadBalancerTargetGroupsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AutoScalingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AttachLoadBalancerTargetGroupsCommandInput, AttachLoadBalancerTargetGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
