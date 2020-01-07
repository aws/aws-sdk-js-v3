import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { DeleteDirectConnectGatewayAssociationRequest, DeleteDirectConnectGatewayAssociationResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteDirectConnectGatewayAssociationCommandInput = DeleteDirectConnectGatewayAssociationRequest;
export declare type DeleteDirectConnectGatewayAssociationCommandOutput = DeleteDirectConnectGatewayAssociationResult & __MetadataBearer;
export declare class DeleteDirectConnectGatewayAssociationCommand extends $Command<DeleteDirectConnectGatewayAssociationCommandInput, DeleteDirectConnectGatewayAssociationCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: DeleteDirectConnectGatewayAssociationCommandInput;
    constructor(input: DeleteDirectConnectGatewayAssociationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDirectConnectGatewayAssociationCommandInput, DeleteDirectConnectGatewayAssociationCommandOutput>;
    private serialize;
    private deserialize;
}
