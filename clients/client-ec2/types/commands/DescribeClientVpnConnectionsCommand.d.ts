import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeClientVpnConnectionsRequest, DescribeClientVpnConnectionsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeClientVpnConnectionsCommandInput = DescribeClientVpnConnectionsRequest;
export declare type DescribeClientVpnConnectionsCommandOutput = DescribeClientVpnConnectionsResult & __MetadataBearer;
export declare class DescribeClientVpnConnectionsCommand extends $Command<DescribeClientVpnConnectionsCommandInput, DescribeClientVpnConnectionsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeClientVpnConnectionsCommandInput;
    constructor(input: DescribeClientVpnConnectionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeClientVpnConnectionsCommandInput, DescribeClientVpnConnectionsCommandOutput>;
    private serialize;
    private deserialize;
}
