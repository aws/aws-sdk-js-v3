import { IoTSecureTunnelingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSecureTunnelingClient";
import { CloseTunnelRequest, CloseTunnelResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CloseTunnelCommandInput = CloseTunnelRequest;
export declare type CloseTunnelCommandOutput = CloseTunnelResponse & __MetadataBearer;
export declare class CloseTunnelCommand extends $Command<CloseTunnelCommandInput, CloseTunnelCommandOutput, IoTSecureTunnelingClientResolvedConfig> {
    readonly input: CloseTunnelCommandInput;
    constructor(input: CloseTunnelCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTSecureTunnelingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CloseTunnelCommandInput, CloseTunnelCommandOutput>;
    private serialize;
    private deserialize;
}
