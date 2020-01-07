import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateCustomerGatewayRequest, CreateCustomerGatewayResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateCustomerGatewayCommandInput = CreateCustomerGatewayRequest;
export declare type CreateCustomerGatewayCommandOutput = CreateCustomerGatewayResult & __MetadataBearer;
export declare class CreateCustomerGatewayCommand extends $Command<CreateCustomerGatewayCommandInput, CreateCustomerGatewayCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateCustomerGatewayCommandInput;
    constructor(input: CreateCustomerGatewayCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateCustomerGatewayCommandInput, CreateCustomerGatewayCommandOutput>;
    private serialize;
    private deserialize;
}
