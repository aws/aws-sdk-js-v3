import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { DeleteSecurityConfigurationRequest, DeleteSecurityConfigurationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteSecurityConfigurationCommandInput = DeleteSecurityConfigurationRequest;
export declare type DeleteSecurityConfigurationCommandOutput = DeleteSecurityConfigurationResponse & __MetadataBearer;
export declare class DeleteSecurityConfigurationCommand extends $Command<DeleteSecurityConfigurationCommandInput, DeleteSecurityConfigurationCommandOutput, GlueClientResolvedConfig> {
    readonly input: DeleteSecurityConfigurationCommandInput;
    constructor(input: DeleteSecurityConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteSecurityConfigurationCommandInput, DeleteSecurityConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
