import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetLoadBalancerTlsCertificatesRequest, GetLoadBalancerTlsCertificatesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetLoadBalancerTlsCertificatesCommandInput = GetLoadBalancerTlsCertificatesRequest;
export declare type GetLoadBalancerTlsCertificatesCommandOutput = GetLoadBalancerTlsCertificatesResult & __MetadataBearer;
export declare class GetLoadBalancerTlsCertificatesCommand extends $Command<GetLoadBalancerTlsCertificatesCommandInput, GetLoadBalancerTlsCertificatesCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetLoadBalancerTlsCertificatesCommandInput;
    constructor(input: GetLoadBalancerTlsCertificatesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetLoadBalancerTlsCertificatesCommandInput, GetLoadBalancerTlsCertificatesCommandOutput>;
    private serialize;
    private deserialize;
}
