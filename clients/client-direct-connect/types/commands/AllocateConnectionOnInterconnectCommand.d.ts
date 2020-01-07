import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { AllocateConnectionOnInterconnectRequest, Connection } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AllocateConnectionOnInterconnectCommandInput = AllocateConnectionOnInterconnectRequest;
export declare type AllocateConnectionOnInterconnectCommandOutput = Connection & __MetadataBearer;
export declare class AllocateConnectionOnInterconnectCommand extends $Command<AllocateConnectionOnInterconnectCommandInput, AllocateConnectionOnInterconnectCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: AllocateConnectionOnInterconnectCommandInput;
    constructor(input: AllocateConnectionOnInterconnectCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AllocateConnectionOnInterconnectCommandInput, AllocateConnectionOnInterconnectCommandOutput>;
    private serialize;
    private deserialize;
}
