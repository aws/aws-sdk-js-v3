import { ElasticLoadBalancingv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingv2Client";
import { DeregisterTargetsInput, DeregisterTargetsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeregisterTargetsCommandInput = DeregisterTargetsInput;
export declare type DeregisterTargetsCommandOutput = DeregisterTargetsOutput & __MetadataBearer;
export declare class DeregisterTargetsCommand extends $Command<DeregisterTargetsCommandInput, DeregisterTargetsCommandOutput, ElasticLoadBalancingv2ClientResolvedConfig> {
    readonly input: DeregisterTargetsCommandInput;
    constructor(input: DeregisterTargetsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingv2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeregisterTargetsCommandInput, DeregisterTargetsCommandOutput>;
    private serialize;
    private deserialize;
}
