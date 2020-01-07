import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateEgressOnlyInternetGatewayRequest, CreateEgressOnlyInternetGatewayResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateEgressOnlyInternetGatewayCommandInput = CreateEgressOnlyInternetGatewayRequest;
export declare type CreateEgressOnlyInternetGatewayCommandOutput = CreateEgressOnlyInternetGatewayResult & __MetadataBearer;
export declare class CreateEgressOnlyInternetGatewayCommand extends $Command<CreateEgressOnlyInternetGatewayCommandInput, CreateEgressOnlyInternetGatewayCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateEgressOnlyInternetGatewayCommandInput;
    constructor(input: CreateEgressOnlyInternetGatewayCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateEgressOnlyInternetGatewayCommandInput, CreateEgressOnlyInternetGatewayCommandOutput>;
    private serialize;
    private deserialize;
}
