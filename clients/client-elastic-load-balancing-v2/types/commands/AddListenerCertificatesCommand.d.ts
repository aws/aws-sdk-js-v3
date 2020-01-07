import { ElasticLoadBalancingv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingv2Client";
import { AddListenerCertificatesInput, AddListenerCertificatesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AddListenerCertificatesCommandInput = AddListenerCertificatesInput;
export declare type AddListenerCertificatesCommandOutput = AddListenerCertificatesOutput & __MetadataBearer;
export declare class AddListenerCertificatesCommand extends $Command<AddListenerCertificatesCommandInput, AddListenerCertificatesCommandOutput, ElasticLoadBalancingv2ClientResolvedConfig> {
    readonly input: AddListenerCertificatesCommandInput;
    constructor(input: AddListenerCertificatesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingv2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AddListenerCertificatesCommandInput, AddListenerCertificatesCommandOutput>;
    private serialize;
    private deserialize;
}
