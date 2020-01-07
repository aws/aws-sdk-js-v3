import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeClientVpnTargetNetworksRequest, DescribeClientVpnTargetNetworksResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeClientVpnTargetNetworksCommandInput = DescribeClientVpnTargetNetworksRequest;
export declare type DescribeClientVpnTargetNetworksCommandOutput = DescribeClientVpnTargetNetworksResult & __MetadataBearer;
export declare class DescribeClientVpnTargetNetworksCommand extends $Command<DescribeClientVpnTargetNetworksCommandInput, DescribeClientVpnTargetNetworksCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeClientVpnTargetNetworksCommandInput;
    constructor(input: DescribeClientVpnTargetNetworksCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeClientVpnTargetNetworksCommandInput, DescribeClientVpnTargetNetworksCommandOutput>;
    private serialize;
    private deserialize;
}
