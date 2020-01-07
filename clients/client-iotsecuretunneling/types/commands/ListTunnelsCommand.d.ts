import { IoTSecureTunnelingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSecureTunnelingClient";
import { ListTunnelsRequest, ListTunnelsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListTunnelsCommandInput = ListTunnelsRequest;
export declare type ListTunnelsCommandOutput = ListTunnelsResponse & __MetadataBearer;
export declare class ListTunnelsCommand extends $Command<ListTunnelsCommandInput, ListTunnelsCommandOutput, IoTSecureTunnelingClientResolvedConfig> {
    readonly input: ListTunnelsCommandInput;
    constructor(input: ListTunnelsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTSecureTunnelingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTunnelsCommandInput, ListTunnelsCommandOutput>;
    private serialize;
    private deserialize;
}
