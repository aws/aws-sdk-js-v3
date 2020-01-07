import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { AttachLoadBalancersResultType, AttachLoadBalancersType } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AttachLoadBalancersCommandInput = AttachLoadBalancersType;
export declare type AttachLoadBalancersCommandOutput = AttachLoadBalancersResultType & __MetadataBearer;
export declare class AttachLoadBalancersCommand extends $Command<AttachLoadBalancersCommandInput, AttachLoadBalancersCommandOutput, AutoScalingClientResolvedConfig> {
    readonly input: AttachLoadBalancersCommandInput;
    constructor(input: AttachLoadBalancersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AutoScalingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AttachLoadBalancersCommandInput, AttachLoadBalancersCommandOutput>;
    private serialize;
    private deserialize;
}
