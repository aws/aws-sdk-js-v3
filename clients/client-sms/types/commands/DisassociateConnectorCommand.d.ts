import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { DisassociateConnectorRequest, DisassociateConnectorResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisassociateConnectorCommandInput = DisassociateConnectorRequest;
export declare type DisassociateConnectorCommandOutput = DisassociateConnectorResponse & __MetadataBearer;
export declare class DisassociateConnectorCommand extends $Command<DisassociateConnectorCommandInput, DisassociateConnectorCommandOutput, SMSClientResolvedConfig> {
    readonly input: DisassociateConnectorCommandInput;
    constructor(input: DisassociateConnectorCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateConnectorCommandInput, DisassociateConnectorCommandOutput>;
    private serialize;
    private deserialize;
}
