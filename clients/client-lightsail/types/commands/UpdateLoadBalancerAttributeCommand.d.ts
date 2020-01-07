import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { UpdateLoadBalancerAttributeRequest, UpdateLoadBalancerAttributeResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateLoadBalancerAttributeCommandInput = UpdateLoadBalancerAttributeRequest;
export declare type UpdateLoadBalancerAttributeCommandOutput = UpdateLoadBalancerAttributeResult & __MetadataBearer;
export declare class UpdateLoadBalancerAttributeCommand extends $Command<UpdateLoadBalancerAttributeCommandInput, UpdateLoadBalancerAttributeCommandOutput, LightsailClientResolvedConfig> {
    readonly input: UpdateLoadBalancerAttributeCommandInput;
    constructor(input: UpdateLoadBalancerAttributeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateLoadBalancerAttributeCommandInput, UpdateLoadBalancerAttributeCommandOutput>;
    private serialize;
    private deserialize;
}
