import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateTransitGatewayRequest, CreateTransitGatewayResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateTransitGatewayCommandInput = CreateTransitGatewayRequest;
export declare type CreateTransitGatewayCommandOutput = CreateTransitGatewayResult & __MetadataBearer;
export declare class CreateTransitGatewayCommand extends $Command<CreateTransitGatewayCommandInput, CreateTransitGatewayCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateTransitGatewayCommandInput;
    constructor(input: CreateTransitGatewayCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateTransitGatewayCommandInput, CreateTransitGatewayCommandOutput>;
    private serialize;
    private deserialize;
}
