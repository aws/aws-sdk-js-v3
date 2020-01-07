import { ElasticLoadBalancingv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingv2Client";
import { ModifyTargetGroupInput, ModifyTargetGroupOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyTargetGroupCommandInput = ModifyTargetGroupInput;
export declare type ModifyTargetGroupCommandOutput = ModifyTargetGroupOutput & __MetadataBearer;
export declare class ModifyTargetGroupCommand extends $Command<ModifyTargetGroupCommandInput, ModifyTargetGroupCommandOutput, ElasticLoadBalancingv2ClientResolvedConfig> {
    readonly input: ModifyTargetGroupCommandInput;
    constructor(input: ModifyTargetGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingv2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyTargetGroupCommandInput, ModifyTargetGroupCommandOutput>;
    private serialize;
    private deserialize;
}
