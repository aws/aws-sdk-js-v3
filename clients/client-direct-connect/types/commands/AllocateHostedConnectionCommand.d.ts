import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { AllocateHostedConnectionRequest, Connection } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AllocateHostedConnectionCommandInput = AllocateHostedConnectionRequest;
export declare type AllocateHostedConnectionCommandOutput = Connection & __MetadataBearer;
export declare class AllocateHostedConnectionCommand extends $Command<AllocateHostedConnectionCommandInput, AllocateHostedConnectionCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: AllocateHostedConnectionCommandInput;
    constructor(input: AllocateHostedConnectionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AllocateHostedConnectionCommandInput, AllocateHostedConnectionCommandOutput>;
    private serialize;
    private deserialize;
}
