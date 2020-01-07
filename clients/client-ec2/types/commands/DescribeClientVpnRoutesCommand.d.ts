import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeClientVpnRoutesRequest, DescribeClientVpnRoutesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeClientVpnRoutesCommandInput = DescribeClientVpnRoutesRequest;
export declare type DescribeClientVpnRoutesCommandOutput = DescribeClientVpnRoutesResult & __MetadataBearer;
export declare class DescribeClientVpnRoutesCommand extends $Command<DescribeClientVpnRoutesCommandInput, DescribeClientVpnRoutesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeClientVpnRoutesCommandInput;
    constructor(input: DescribeClientVpnRoutesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeClientVpnRoutesCommandInput, DescribeClientVpnRoutesCommandOutput>;
    private serialize;
    private deserialize;
}
