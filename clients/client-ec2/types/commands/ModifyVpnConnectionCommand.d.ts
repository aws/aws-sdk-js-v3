import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyVpnConnectionRequest, ModifyVpnConnectionResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyVpnConnectionCommandInput = ModifyVpnConnectionRequest;
export declare type ModifyVpnConnectionCommandOutput = ModifyVpnConnectionResult & __MetadataBearer;
export declare class ModifyVpnConnectionCommand extends $Command<ModifyVpnConnectionCommandInput, ModifyVpnConnectionCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ModifyVpnConnectionCommandInput;
    constructor(input: ModifyVpnConnectionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyVpnConnectionCommandInput, ModifyVpnConnectionCommandOutput>;
    private serialize;
    private deserialize;
}
