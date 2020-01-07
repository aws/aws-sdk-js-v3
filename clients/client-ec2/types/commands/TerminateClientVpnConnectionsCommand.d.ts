import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { TerminateClientVpnConnectionsRequest, TerminateClientVpnConnectionsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type TerminateClientVpnConnectionsCommandInput = TerminateClientVpnConnectionsRequest;
export declare type TerminateClientVpnConnectionsCommandOutput = TerminateClientVpnConnectionsResult & __MetadataBearer;
export declare class TerminateClientVpnConnectionsCommand extends $Command<TerminateClientVpnConnectionsCommandInput, TerminateClientVpnConnectionsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: TerminateClientVpnConnectionsCommandInput;
    constructor(input: TerminateClientVpnConnectionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<TerminateClientVpnConnectionsCommandInput, TerminateClientVpnConnectionsCommandOutput>;
    private serialize;
    private deserialize;
}
