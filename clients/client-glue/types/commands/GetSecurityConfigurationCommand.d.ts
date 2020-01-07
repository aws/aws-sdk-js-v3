import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetSecurityConfigurationRequest, GetSecurityConfigurationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetSecurityConfigurationCommandInput = GetSecurityConfigurationRequest;
export declare type GetSecurityConfigurationCommandOutput = GetSecurityConfigurationResponse & __MetadataBearer;
export declare class GetSecurityConfigurationCommand extends $Command<GetSecurityConfigurationCommandInput, GetSecurityConfigurationCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetSecurityConfigurationCommandInput;
    constructor(input: GetSecurityConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSecurityConfigurationCommandInput, GetSecurityConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
