import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeClientVpnEndpointsRequest, DescribeClientVpnEndpointsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeClientVpnEndpointsCommandInput = DescribeClientVpnEndpointsRequest;
export declare type DescribeClientVpnEndpointsCommandOutput = DescribeClientVpnEndpointsResult & __MetadataBearer;
export declare class DescribeClientVpnEndpointsCommand extends $Command<DescribeClientVpnEndpointsCommandInput, DescribeClientVpnEndpointsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeClientVpnEndpointsCommandInput;
    constructor(input: DescribeClientVpnEndpointsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeClientVpnEndpointsCommandInput, DescribeClientVpnEndpointsCommandOutput>;
    private serialize;
    private deserialize;
}
