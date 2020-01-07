import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { CreateDirectConnectGatewayAssociationRequest, CreateDirectConnectGatewayAssociationResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateDirectConnectGatewayAssociationCommandInput = CreateDirectConnectGatewayAssociationRequest;
export declare type CreateDirectConnectGatewayAssociationCommandOutput = CreateDirectConnectGatewayAssociationResult & __MetadataBearer;
export declare class CreateDirectConnectGatewayAssociationCommand extends $Command<CreateDirectConnectGatewayAssociationCommandInput, CreateDirectConnectGatewayAssociationCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: CreateDirectConnectGatewayAssociationCommandInput;
    constructor(input: CreateDirectConnectGatewayAssociationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDirectConnectGatewayAssociationCommandInput, CreateDirectConnectGatewayAssociationCommandOutput>;
    private serialize;
    private deserialize;
}
