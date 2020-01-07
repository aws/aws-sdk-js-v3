import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { Connection, DisassociateConnectionFromLagRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisassociateConnectionFromLagCommandInput = DisassociateConnectionFromLagRequest;
export declare type DisassociateConnectionFromLagCommandOutput = Connection & __MetadataBearer;
export declare class DisassociateConnectionFromLagCommand extends $Command<DisassociateConnectionFromLagCommandInput, DisassociateConnectionFromLagCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: DisassociateConnectionFromLagCommandInput;
    constructor(input: DisassociateConnectionFromLagCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateConnectionFromLagCommandInput, DisassociateConnectionFromLagCommandOutput>;
    private serialize;
    private deserialize;
}
