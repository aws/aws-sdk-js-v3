import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { AcceptDirectConnectGatewayAssociationProposalRequest, AcceptDirectConnectGatewayAssociationProposalResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AcceptDirectConnectGatewayAssociationProposalCommandInput = AcceptDirectConnectGatewayAssociationProposalRequest;
export declare type AcceptDirectConnectGatewayAssociationProposalCommandOutput = AcceptDirectConnectGatewayAssociationProposalResult & __MetadataBearer;
export declare class AcceptDirectConnectGatewayAssociationProposalCommand extends $Command<AcceptDirectConnectGatewayAssociationProposalCommandInput, AcceptDirectConnectGatewayAssociationProposalCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: AcceptDirectConnectGatewayAssociationProposalCommandInput;
    constructor(input: AcceptDirectConnectGatewayAssociationProposalCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AcceptDirectConnectGatewayAssociationProposalCommandInput, AcceptDirectConnectGatewayAssociationProposalCommandOutput>;
    private serialize;
    private deserialize;
}
