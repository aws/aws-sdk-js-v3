import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetSecurityConfigurationsRequest, GetSecurityConfigurationsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetSecurityConfigurationsCommandInput = GetSecurityConfigurationsRequest;
export declare type GetSecurityConfigurationsCommandOutput = GetSecurityConfigurationsResponse & __MetadataBearer;
export declare class GetSecurityConfigurationsCommand extends $Command<GetSecurityConfigurationsCommandInput, GetSecurityConfigurationsCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetSecurityConfigurationsCommandInput;
    constructor(input: GetSecurityConfigurationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSecurityConfigurationsCommandInput, GetSecurityConfigurationsCommandOutput>;
    private serialize;
    private deserialize;
}
