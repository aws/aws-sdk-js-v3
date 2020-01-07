import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateNatGatewayRequest, CreateNatGatewayResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateNatGatewayCommandInput = CreateNatGatewayRequest;
export declare type CreateNatGatewayCommandOutput = CreateNatGatewayResult & __MetadataBearer;
export declare class CreateNatGatewayCommand extends $Command<CreateNatGatewayCommandInput, CreateNatGatewayCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateNatGatewayCommandInput;
    constructor(input: CreateNatGatewayCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateNatGatewayCommandInput, CreateNatGatewayCommandOutput>;
    private serialize;
    private deserialize;
}
