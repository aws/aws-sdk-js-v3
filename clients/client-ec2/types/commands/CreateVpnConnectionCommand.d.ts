import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateVpnConnectionRequest, CreateVpnConnectionResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateVpnConnectionCommandInput = CreateVpnConnectionRequest;
export declare type CreateVpnConnectionCommandOutput = CreateVpnConnectionResult & __MetadataBearer;
export declare class CreateVpnConnectionCommand extends $Command<CreateVpnConnectionCommandInput, CreateVpnConnectionCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateVpnConnectionCommandInput;
    constructor(input: CreateVpnConnectionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateVpnConnectionCommandInput, CreateVpnConnectionCommandOutput>;
    private serialize;
    private deserialize;
}
