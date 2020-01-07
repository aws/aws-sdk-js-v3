import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { DeleteDirectConnectGatewayAssociationProposalRequest, DeleteDirectConnectGatewayAssociationProposalResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteDirectConnectGatewayAssociationProposalCommandInput = DeleteDirectConnectGatewayAssociationProposalRequest;
export declare type DeleteDirectConnectGatewayAssociationProposalCommandOutput = DeleteDirectConnectGatewayAssociationProposalResult & __MetadataBearer;
export declare class DeleteDirectConnectGatewayAssociationProposalCommand extends $Command<DeleteDirectConnectGatewayAssociationProposalCommandInput, DeleteDirectConnectGatewayAssociationProposalCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: DeleteDirectConnectGatewayAssociationProposalCommandInput;
    constructor(input: DeleteDirectConnectGatewayAssociationProposalCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDirectConnectGatewayAssociationProposalCommandInput, DeleteDirectConnectGatewayAssociationProposalCommandOutput>;
    private serialize;
    private deserialize;
}
