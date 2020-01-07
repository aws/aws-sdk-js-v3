import { ElasticLoadBalancingv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingv2Client";
import { ModifyTargetGroupAttributesInput, ModifyTargetGroupAttributesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyTargetGroupAttributesCommandInput = ModifyTargetGroupAttributesInput;
export declare type ModifyTargetGroupAttributesCommandOutput = ModifyTargetGroupAttributesOutput & __MetadataBearer;
export declare class ModifyTargetGroupAttributesCommand extends $Command<ModifyTargetGroupAttributesCommandInput, ModifyTargetGroupAttributesCommandOutput, ElasticLoadBalancingv2ClientResolvedConfig> {
    readonly input: ModifyTargetGroupAttributesCommandInput;
    constructor(input: ModifyTargetGroupAttributesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingv2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyTargetGroupAttributesCommandInput, ModifyTargetGroupAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
