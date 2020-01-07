import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateVpnGatewayRequest, CreateVpnGatewayResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateVpnGatewayCommandInput = CreateVpnGatewayRequest;
export declare type CreateVpnGatewayCommandOutput = CreateVpnGatewayResult & __MetadataBearer;
export declare class CreateVpnGatewayCommand extends $Command<CreateVpnGatewayCommandInput, CreateVpnGatewayCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateVpnGatewayCommandInput;
    constructor(input: CreateVpnGatewayCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateVpnGatewayCommandInput, CreateVpnGatewayCommandOutput>;
    private serialize;
    private deserialize;
}
