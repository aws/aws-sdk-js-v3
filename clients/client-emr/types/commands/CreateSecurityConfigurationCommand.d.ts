import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { CreateSecurityConfigurationInput, CreateSecurityConfigurationOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateSecurityConfigurationCommandInput = CreateSecurityConfigurationInput;
export declare type CreateSecurityConfigurationCommandOutput = CreateSecurityConfigurationOutput & __MetadataBearer;
export declare class CreateSecurityConfigurationCommand extends $Command<CreateSecurityConfigurationCommandInput, CreateSecurityConfigurationCommandOutput, EMRClientResolvedConfig> {
    readonly input: CreateSecurityConfigurationCommandInput;
    constructor(input: CreateSecurityConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EMRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateSecurityConfigurationCommandInput, CreateSecurityConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
