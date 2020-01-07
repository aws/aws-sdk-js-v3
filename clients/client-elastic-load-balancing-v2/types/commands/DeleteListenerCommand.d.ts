import { ElasticLoadBalancingv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingv2Client";
import { DeleteListenerInput, DeleteListenerOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteListenerCommandInput = DeleteListenerInput;
export declare type DeleteListenerCommandOutput = DeleteListenerOutput & __MetadataBearer;
export declare class DeleteListenerCommand extends $Command<DeleteListenerCommandInput, DeleteListenerCommandOutput, ElasticLoadBalancingv2ClientResolvedConfig> {
    readonly input: DeleteListenerCommandInput;
    constructor(input: DeleteListenerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingv2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteListenerCommandInput, DeleteListenerCommandOutput>;
    private serialize;
    private deserialize;
}
