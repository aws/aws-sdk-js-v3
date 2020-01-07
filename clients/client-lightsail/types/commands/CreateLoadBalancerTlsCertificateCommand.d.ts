import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { CreateLoadBalancerTlsCertificateRequest, CreateLoadBalancerTlsCertificateResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateLoadBalancerTlsCertificateCommandInput = CreateLoadBalancerTlsCertificateRequest;
export declare type CreateLoadBalancerTlsCertificateCommandOutput = CreateLoadBalancerTlsCertificateResult & __MetadataBearer;
export declare class CreateLoadBalancerTlsCertificateCommand extends $Command<CreateLoadBalancerTlsCertificateCommandInput, CreateLoadBalancerTlsCertificateCommandOutput, LightsailClientResolvedConfig> {
    readonly input: CreateLoadBalancerTlsCertificateCommandInput;
    constructor(input: CreateLoadBalancerTlsCertificateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateLoadBalancerTlsCertificateCommandInput, CreateLoadBalancerTlsCertificateCommandOutput>;
    private serialize;
    private deserialize;
}
