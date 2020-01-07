import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { AttachLoadBalancerTlsCertificateRequest, AttachLoadBalancerTlsCertificateResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AttachLoadBalancerTlsCertificateCommandInput = AttachLoadBalancerTlsCertificateRequest;
export declare type AttachLoadBalancerTlsCertificateCommandOutput = AttachLoadBalancerTlsCertificateResult & __MetadataBearer;
export declare class AttachLoadBalancerTlsCertificateCommand extends $Command<AttachLoadBalancerTlsCertificateCommandInput, AttachLoadBalancerTlsCertificateCommandOutput, LightsailClientResolvedConfig> {
    readonly input: AttachLoadBalancerTlsCertificateCommandInput;
    constructor(input: AttachLoadBalancerTlsCertificateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AttachLoadBalancerTlsCertificateCommandInput, AttachLoadBalancerTlsCertificateCommandOutput>;
    private serialize;
    private deserialize;
}
