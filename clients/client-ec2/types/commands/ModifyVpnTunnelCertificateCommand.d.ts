import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyVpnTunnelCertificateRequest, ModifyVpnTunnelCertificateResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyVpnTunnelCertificateCommandInput = ModifyVpnTunnelCertificateRequest;
export declare type ModifyVpnTunnelCertificateCommandOutput = ModifyVpnTunnelCertificateResult & __MetadataBearer;
export declare class ModifyVpnTunnelCertificateCommand extends $Command<ModifyVpnTunnelCertificateCommandInput, ModifyVpnTunnelCertificateCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ModifyVpnTunnelCertificateCommandInput;
    constructor(input: ModifyVpnTunnelCertificateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyVpnTunnelCertificateCommandInput, ModifyVpnTunnelCertificateCommandOutput>;
    private serialize;
    private deserialize;
}
