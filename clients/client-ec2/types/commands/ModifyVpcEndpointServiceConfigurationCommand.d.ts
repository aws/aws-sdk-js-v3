import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyVpcEndpointServiceConfigurationRequest, ModifyVpcEndpointServiceConfigurationResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyVpcEndpointServiceConfigurationCommandInput = ModifyVpcEndpointServiceConfigurationRequest;
export declare type ModifyVpcEndpointServiceConfigurationCommandOutput = ModifyVpcEndpointServiceConfigurationResult & __MetadataBearer;
export declare class ModifyVpcEndpointServiceConfigurationCommand extends $Command<ModifyVpcEndpointServiceConfigurationCommandInput, ModifyVpcEndpointServiceConfigurationCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ModifyVpcEndpointServiceConfigurationCommandInput;
    constructor(input: ModifyVpcEndpointServiceConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyVpcEndpointServiceConfigurationCommandInput, ModifyVpcEndpointServiceConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
