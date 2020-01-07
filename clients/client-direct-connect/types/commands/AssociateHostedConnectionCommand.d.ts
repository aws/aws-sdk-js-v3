import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { AssociateHostedConnectionRequest, Connection } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AssociateHostedConnectionCommandInput = AssociateHostedConnectionRequest;
export declare type AssociateHostedConnectionCommandOutput = Connection & __MetadataBearer;
export declare class AssociateHostedConnectionCommand extends $Command<AssociateHostedConnectionCommandInput, AssociateHostedConnectionCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: AssociateHostedConnectionCommandInput;
    constructor(input: AssociateHostedConnectionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateHostedConnectionCommandInput, AssociateHostedConnectionCommandOutput>;
    private serialize;
    private deserialize;
}
