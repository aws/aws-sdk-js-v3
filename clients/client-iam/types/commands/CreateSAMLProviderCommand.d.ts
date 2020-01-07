import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { CreateSAMLProviderRequest, CreateSAMLProviderResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateSAMLProviderCommandInput = CreateSAMLProviderRequest;
export declare type CreateSAMLProviderCommandOutput = CreateSAMLProviderResponse & __MetadataBearer;
export declare class CreateSAMLProviderCommand extends $Command<CreateSAMLProviderCommandInput, CreateSAMLProviderCommandOutput, IAMClientResolvedConfig> {
    readonly input: CreateSAMLProviderCommandInput;
    constructor(input: CreateSAMLProviderCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateSAMLProviderCommandInput, CreateSAMLProviderCommandOutput>;
    private serialize;
    private deserialize;
}
