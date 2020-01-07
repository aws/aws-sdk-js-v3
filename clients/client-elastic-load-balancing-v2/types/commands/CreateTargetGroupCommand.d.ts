import { ElasticLoadBalancingv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingv2Client";
import { CreateTargetGroupInput, CreateTargetGroupOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateTargetGroupCommandInput = CreateTargetGroupInput;
export declare type CreateTargetGroupCommandOutput = CreateTargetGroupOutput & __MetadataBearer;
export declare class CreateTargetGroupCommand extends $Command<CreateTargetGroupCommandInput, CreateTargetGroupCommandOutput, ElasticLoadBalancingv2ClientResolvedConfig> {
    readonly input: CreateTargetGroupCommandInput;
    constructor(input: CreateTargetGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingv2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateTargetGroupCommandInput, CreateTargetGroupCommandOutput>;
    private serialize;
    private deserialize;
}
