import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { DeleteDirectConnectGatewayRequest, DeleteDirectConnectGatewayResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteDirectConnectGatewayCommandInput = DeleteDirectConnectGatewayRequest;
export declare type DeleteDirectConnectGatewayCommandOutput = DeleteDirectConnectGatewayResult & __MetadataBearer;
export declare class DeleteDirectConnectGatewayCommand extends $Command<DeleteDirectConnectGatewayCommandInput, DeleteDirectConnectGatewayCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: DeleteDirectConnectGatewayCommandInput;
    constructor(input: DeleteDirectConnectGatewayCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDirectConnectGatewayCommandInput, DeleteDirectConnectGatewayCommandOutput>;
    private serialize;
    private deserialize;
}
