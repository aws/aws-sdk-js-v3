import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { AssociateConnectionWithLagRequest, Connection } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AssociateConnectionWithLagCommandInput = AssociateConnectionWithLagRequest;
export declare type AssociateConnectionWithLagCommandOutput = Connection & __MetadataBearer;
export declare class AssociateConnectionWithLagCommand extends $Command<AssociateConnectionWithLagCommandInput, AssociateConnectionWithLagCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: AssociateConnectionWithLagCommandInput;
    constructor(input: AssociateConnectionWithLagCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateConnectionWithLagCommandInput, AssociateConnectionWithLagCommandOutput>;
    private serialize;
    private deserialize;
}
