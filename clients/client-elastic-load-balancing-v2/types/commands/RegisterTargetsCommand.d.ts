import { ElasticLoadBalancingv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingv2Client";
import { RegisterTargetsInput, RegisterTargetsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RegisterTargetsCommandInput = RegisterTargetsInput;
export declare type RegisterTargetsCommandOutput = RegisterTargetsOutput & __MetadataBearer;
export declare class RegisterTargetsCommand extends $Command<RegisterTargetsCommandInput, RegisterTargetsCommandOutput, ElasticLoadBalancingv2ClientResolvedConfig> {
    readonly input: RegisterTargetsCommandInput;
    constructor(input: RegisterTargetsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingv2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RegisterTargetsCommandInput, RegisterTargetsCommandOutput>;
    private serialize;
    private deserialize;
}
