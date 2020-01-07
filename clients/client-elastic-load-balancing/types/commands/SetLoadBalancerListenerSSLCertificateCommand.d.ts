import { ElasticLoadBalancingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingClient";
import { SetLoadBalancerListenerSSLCertificateInput, SetLoadBalancerListenerSSLCertificateOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SetLoadBalancerListenerSSLCertificateCommandInput = SetLoadBalancerListenerSSLCertificateInput;
export declare type SetLoadBalancerListenerSSLCertificateCommandOutput = SetLoadBalancerListenerSSLCertificateOutput & __MetadataBearer;
export declare class SetLoadBalancerListenerSSLCertificateCommand extends $Command<SetLoadBalancerListenerSSLCertificateCommandInput, SetLoadBalancerListenerSSLCertificateCommandOutput, ElasticLoadBalancingClientResolvedConfig> {
    readonly input: SetLoadBalancerListenerSSLCertificateCommandInput;
    constructor(input: SetLoadBalancerListenerSSLCertificateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetLoadBalancerListenerSSLCertificateCommandInput, SetLoadBalancerListenerSSLCertificateCommandOutput>;
    private serialize;
    private deserialize;
}
