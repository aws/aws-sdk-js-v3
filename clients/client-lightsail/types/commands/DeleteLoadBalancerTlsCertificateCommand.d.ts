import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { DeleteLoadBalancerTlsCertificateRequest, DeleteLoadBalancerTlsCertificateResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteLoadBalancerTlsCertificateCommandInput = DeleteLoadBalancerTlsCertificateRequest;
export declare type DeleteLoadBalancerTlsCertificateCommandOutput = DeleteLoadBalancerTlsCertificateResult & __MetadataBearer;
export declare class DeleteLoadBalancerTlsCertificateCommand extends $Command<DeleteLoadBalancerTlsCertificateCommandInput, DeleteLoadBalancerTlsCertificateCommandOutput, LightsailClientResolvedConfig> {
    readonly input: DeleteLoadBalancerTlsCertificateCommandInput;
    constructor(input: DeleteLoadBalancerTlsCertificateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteLoadBalancerTlsCertificateCommandInput, DeleteLoadBalancerTlsCertificateCommandOutput>;
    private serialize;
    private deserialize;
}
