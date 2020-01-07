import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateClientVpnRouteRequest, CreateClientVpnRouteResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateClientVpnRouteCommandInput = CreateClientVpnRouteRequest;
export declare type CreateClientVpnRouteCommandOutput = CreateClientVpnRouteResult & __MetadataBearer;
export declare class CreateClientVpnRouteCommand extends $Command<CreateClientVpnRouteCommandInput, CreateClientVpnRouteCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateClientVpnRouteCommandInput;
    constructor(input: CreateClientVpnRouteCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateClientVpnRouteCommandInput, CreateClientVpnRouteCommandOutput>;
    private serialize;
    private deserialize;
}
