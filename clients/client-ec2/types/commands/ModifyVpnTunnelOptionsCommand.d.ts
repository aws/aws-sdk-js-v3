import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyVpnTunnelOptionsRequest, ModifyVpnTunnelOptionsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyVpnTunnelOptionsCommandInput = ModifyVpnTunnelOptionsRequest;
export declare type ModifyVpnTunnelOptionsCommandOutput = ModifyVpnTunnelOptionsResult & __MetadataBearer;
export declare class ModifyVpnTunnelOptionsCommand extends $Command<ModifyVpnTunnelOptionsCommandInput, ModifyVpnTunnelOptionsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ModifyVpnTunnelOptionsCommandInput;
    constructor(input: ModifyVpnTunnelOptionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyVpnTunnelOptionsCommandInput, ModifyVpnTunnelOptionsCommandOutput>;
    private serialize;
    private deserialize;
}
