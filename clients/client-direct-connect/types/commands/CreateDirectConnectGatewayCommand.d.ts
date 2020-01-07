import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { CreateDirectConnectGatewayRequest, CreateDirectConnectGatewayResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateDirectConnectGatewayCommandInput = CreateDirectConnectGatewayRequest;
export declare type CreateDirectConnectGatewayCommandOutput = CreateDirectConnectGatewayResult & __MetadataBearer;
export declare class CreateDirectConnectGatewayCommand extends $Command<CreateDirectConnectGatewayCommandInput, CreateDirectConnectGatewayCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: CreateDirectConnectGatewayCommandInput;
    constructor(input: CreateDirectConnectGatewayCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDirectConnectGatewayCommandInput, CreateDirectConnectGatewayCommandOutput>;
    private serialize;
    private deserialize;
}
