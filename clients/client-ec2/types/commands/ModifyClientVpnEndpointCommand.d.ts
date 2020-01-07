import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyClientVpnEndpointRequest, ModifyClientVpnEndpointResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyClientVpnEndpointCommandInput = ModifyClientVpnEndpointRequest;
export declare type ModifyClientVpnEndpointCommandOutput = ModifyClientVpnEndpointResult & __MetadataBearer;
export declare class ModifyClientVpnEndpointCommand extends $Command<ModifyClientVpnEndpointCommandInput, ModifyClientVpnEndpointCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ModifyClientVpnEndpointCommandInput;
    constructor(input: ModifyClientVpnEndpointCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyClientVpnEndpointCommandInput, ModifyClientVpnEndpointCommandOutput>;
    private serialize;
    private deserialize;
}
