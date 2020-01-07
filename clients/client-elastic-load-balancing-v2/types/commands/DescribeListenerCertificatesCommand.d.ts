import { ElasticLoadBalancingv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingv2Client";
import { DescribeListenerCertificatesInput, DescribeListenerCertificatesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeListenerCertificatesCommandInput = DescribeListenerCertificatesInput;
export declare type DescribeListenerCertificatesCommandOutput = DescribeListenerCertificatesOutput & __MetadataBearer;
export declare class DescribeListenerCertificatesCommand extends $Command<DescribeListenerCertificatesCommandInput, DescribeListenerCertificatesCommandOutput, ElasticLoadBalancingv2ClientResolvedConfig> {
    readonly input: DescribeListenerCertificatesCommandInput;
    constructor(input: DescribeListenerCertificatesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingv2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeListenerCertificatesCommandInput, DescribeListenerCertificatesCommandOutput>;
    private serialize;
    private deserialize;
}
