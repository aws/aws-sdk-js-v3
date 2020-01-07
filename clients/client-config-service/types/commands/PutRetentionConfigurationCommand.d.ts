import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { PutRetentionConfigurationRequest, PutRetentionConfigurationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutRetentionConfigurationCommandInput = PutRetentionConfigurationRequest;
export declare type PutRetentionConfigurationCommandOutput = PutRetentionConfigurationResponse & __MetadataBearer;
export declare class PutRetentionConfigurationCommand extends $Command<PutRetentionConfigurationCommandInput, PutRetentionConfigurationCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: PutRetentionConfigurationCommandInput;
    constructor(input: PutRetentionConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutRetentionConfigurationCommandInput, PutRetentionConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
