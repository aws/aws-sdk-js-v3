import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateVpnConnectionRouteRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateVpnConnectionRouteCommandInput = CreateVpnConnectionRouteRequest;
export declare type CreateVpnConnectionRouteCommandOutput = __MetadataBearer;
export declare class CreateVpnConnectionRouteCommand extends $Command<CreateVpnConnectionRouteCommandInput, CreateVpnConnectionRouteCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateVpnConnectionRouteCommandInput;
    constructor(input: CreateVpnConnectionRouteCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateVpnConnectionRouteCommandInput, CreateVpnConnectionRouteCommandOutput>;
    private serialize;
    private deserialize;
}
