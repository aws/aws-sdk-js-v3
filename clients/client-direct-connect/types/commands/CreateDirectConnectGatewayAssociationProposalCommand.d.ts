import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { CreateDirectConnectGatewayAssociationProposalRequest, CreateDirectConnectGatewayAssociationProposalResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateDirectConnectGatewayAssociationProposalCommandInput = CreateDirectConnectGatewayAssociationProposalRequest;
export declare type CreateDirectConnectGatewayAssociationProposalCommandOutput = CreateDirectConnectGatewayAssociationProposalResult & __MetadataBearer;
export declare class CreateDirectConnectGatewayAssociationProposalCommand extends $Command<CreateDirectConnectGatewayAssociationProposalCommandInput, CreateDirectConnectGatewayAssociationProposalCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: CreateDirectConnectGatewayAssociationProposalCommandInput;
    constructor(input: CreateDirectConnectGatewayAssociationProposalCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDirectConnectGatewayAssociationProposalCommandInput, CreateDirectConnectGatewayAssociationProposalCommandOutput>;
    private serialize;
    private deserialize;
}
