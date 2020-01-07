import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateClientVpnEndpointRequest, CreateClientVpnEndpointResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateClientVpnEndpointCommandInput = CreateClientVpnEndpointRequest;
export declare type CreateClientVpnEndpointCommandOutput = CreateClientVpnEndpointResult & __MetadataBearer;
export declare class CreateClientVpnEndpointCommand extends $Command<CreateClientVpnEndpointCommandInput, CreateClientVpnEndpointCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateClientVpnEndpointCommandInput;
    constructor(input: CreateClientVpnEndpointCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateClientVpnEndpointCommandInput, CreateClientVpnEndpointCommandOutput>;
    private serialize;
    private deserialize;
}
