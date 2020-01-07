import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ExportClientVpnClientConfigurationRequest, ExportClientVpnClientConfigurationResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ExportClientVpnClientConfigurationCommandInput = ExportClientVpnClientConfigurationRequest;
export declare type ExportClientVpnClientConfigurationCommandOutput = ExportClientVpnClientConfigurationResult & __MetadataBearer;
export declare class ExportClientVpnClientConfigurationCommand extends $Command<ExportClientVpnClientConfigurationCommandInput, ExportClientVpnClientConfigurationCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ExportClientVpnClientConfigurationCommandInput;
    constructor(input: ExportClientVpnClientConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ExportClientVpnClientConfigurationCommandInput, ExportClientVpnClientConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
