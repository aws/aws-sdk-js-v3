import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { CreateSecurityConfigurationRequest, CreateSecurityConfigurationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateSecurityConfigurationCommandInput = CreateSecurityConfigurationRequest;
export declare type CreateSecurityConfigurationCommandOutput = CreateSecurityConfigurationResponse & __MetadataBearer;
export declare class CreateSecurityConfigurationCommand extends $Command<CreateSecurityConfigurationCommandInput, CreateSecurityConfigurationCommandOutput, GlueClientResolvedConfig> {
    readonly input: CreateSecurityConfigurationCommandInput;
    constructor(input: CreateSecurityConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateSecurityConfigurationCommandInput, CreateSecurityConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
