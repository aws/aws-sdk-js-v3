import { IoTSecureTunnelingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSecureTunnelingClient";
import { OpenTunnelRequest, OpenTunnelResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type OpenTunnelCommandInput = OpenTunnelRequest;
export declare type OpenTunnelCommandOutput = OpenTunnelResponse & __MetadataBearer;
export declare class OpenTunnelCommand extends $Command<OpenTunnelCommandInput, OpenTunnelCommandOutput, IoTSecureTunnelingClientResolvedConfig> {
    readonly input: OpenTunnelCommandInput;
    constructor(input: OpenTunnelCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTSecureTunnelingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<OpenTunnelCommandInput, OpenTunnelCommandOutput>;
    private serialize;
    private deserialize;
}
