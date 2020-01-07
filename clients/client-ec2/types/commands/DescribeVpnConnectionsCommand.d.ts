import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeVpnConnectionsRequest, DescribeVpnConnectionsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeVpnConnectionsCommandInput = DescribeVpnConnectionsRequest;
export declare type DescribeVpnConnectionsCommandOutput = DescribeVpnConnectionsResult & __MetadataBearer;
export declare class DescribeVpnConnectionsCommand extends $Command<DescribeVpnConnectionsCommandInput, DescribeVpnConnectionsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeVpnConnectionsCommandInput;
    constructor(input: DescribeVpnConnectionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeVpnConnectionsCommandInput, DescribeVpnConnectionsCommandOutput>;
    private serialize;
    private deserialize;
}
