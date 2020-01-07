import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { UpdateDirectConnectGatewayAssociationRequest, UpdateDirectConnectGatewayAssociationResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateDirectConnectGatewayAssociationCommandInput = UpdateDirectConnectGatewayAssociationRequest;
export declare type UpdateDirectConnectGatewayAssociationCommandOutput = UpdateDirectConnectGatewayAssociationResult & __MetadataBearer;
export declare class UpdateDirectConnectGatewayAssociationCommand extends $Command<UpdateDirectConnectGatewayAssociationCommandInput, UpdateDirectConnectGatewayAssociationCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: UpdateDirectConnectGatewayAssociationCommandInput;
    constructor(input: UpdateDirectConnectGatewayAssociationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDirectConnectGatewayAssociationCommandInput, UpdateDirectConnectGatewayAssociationCommandOutput>;
    private serialize;
    private deserialize;
}
