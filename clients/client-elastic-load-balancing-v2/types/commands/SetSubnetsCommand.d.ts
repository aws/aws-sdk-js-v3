import { ElasticLoadBalancingv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingv2Client";
import { SetSubnetsInput, SetSubnetsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SetSubnetsCommandInput = SetSubnetsInput;
export declare type SetSubnetsCommandOutput = SetSubnetsOutput & __MetadataBearer;
export declare class SetSubnetsCommand extends $Command<SetSubnetsCommandInput, SetSubnetsCommandOutput, ElasticLoadBalancingv2ClientResolvedConfig> {
    readonly input: SetSubnetsCommandInput;
    constructor(input: SetSubnetsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingv2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetSubnetsCommandInput, SetSubnetsCommandOutput>;
    private serialize;
    private deserialize;
}
