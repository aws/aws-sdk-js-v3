import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateVpcEndpointServiceConfigurationRequest, CreateVpcEndpointServiceConfigurationResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateVpcEndpointServiceConfigurationCommandInput = CreateVpcEndpointServiceConfigurationRequest;
export declare type CreateVpcEndpointServiceConfigurationCommandOutput = CreateVpcEndpointServiceConfigurationResult & __MetadataBearer;
export declare class CreateVpcEndpointServiceConfigurationCommand extends $Command<CreateVpcEndpointServiceConfigurationCommandInput, CreateVpcEndpointServiceConfigurationCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateVpcEndpointServiceConfigurationCommandInput;
    constructor(input: CreateVpcEndpointServiceConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateVpcEndpointServiceConfigurationCommandInput, CreateVpcEndpointServiceConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
