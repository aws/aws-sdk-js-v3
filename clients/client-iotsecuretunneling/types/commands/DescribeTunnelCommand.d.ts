import { IoTSecureTunnelingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSecureTunnelingClient";
import { DescribeTunnelRequest, DescribeTunnelResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeTunnelCommandInput = DescribeTunnelRequest;
export declare type DescribeTunnelCommandOutput = DescribeTunnelResponse & __MetadataBearer;
export declare class DescribeTunnelCommand extends $Command<DescribeTunnelCommandInput, DescribeTunnelCommandOutput, IoTSecureTunnelingClientResolvedConfig> {
    readonly input: DescribeTunnelCommandInput;
    constructor(input: DescribeTunnelCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTSecureTunnelingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTunnelCommandInput, DescribeTunnelCommandOutput>;
    private serialize;
    private deserialize;
}
