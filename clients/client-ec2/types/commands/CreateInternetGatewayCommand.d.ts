import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateInternetGatewayRequest, CreateInternetGatewayResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateInternetGatewayCommandInput = CreateInternetGatewayRequest;
export declare type CreateInternetGatewayCommandOutput = CreateInternetGatewayResult & __MetadataBearer;
export declare class CreateInternetGatewayCommand extends $Command<CreateInternetGatewayCommandInput, CreateInternetGatewayCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateInternetGatewayCommandInput;
    constructor(input: CreateInternetGatewayCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateInternetGatewayCommandInput, CreateInternetGatewayCommandOutput>;
    private serialize;
    private deserialize;
}
