import { ElasticLoadBalancingv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingv2Client";
import { CreateListenerInput, CreateListenerOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateListenerCommandInput = CreateListenerInput;
export declare type CreateListenerCommandOutput = CreateListenerOutput & __MetadataBearer;
export declare class CreateListenerCommand extends $Command<CreateListenerCommandInput, CreateListenerCommandOutput, ElasticLoadBalancingv2ClientResolvedConfig> {
    readonly input: CreateListenerCommandInput;
    constructor(input: CreateListenerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingv2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateListenerCommandInput, CreateListenerCommandOutput>;
    private serialize;
    private deserialize;
}
