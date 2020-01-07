import { ElasticLoadBalancingv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingv2Client";
import { RemoveListenerCertificatesInput, RemoveListenerCertificatesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RemoveListenerCertificatesCommandInput = RemoveListenerCertificatesInput;
export declare type RemoveListenerCertificatesCommandOutput = RemoveListenerCertificatesOutput & __MetadataBearer;
export declare class RemoveListenerCertificatesCommand extends $Command<RemoveListenerCertificatesCommandInput, RemoveListenerCertificatesCommandOutput, ElasticLoadBalancingv2ClientResolvedConfig> {
    readonly input: RemoveListenerCertificatesCommandInput;
    constructor(input: RemoveListenerCertificatesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingv2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RemoveListenerCertificatesCommandInput, RemoveListenerCertificatesCommandOutput>;
    private serialize;
    private deserialize;
}
