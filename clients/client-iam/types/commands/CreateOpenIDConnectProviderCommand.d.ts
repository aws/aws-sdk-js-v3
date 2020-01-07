import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { CreateOpenIDConnectProviderRequest, CreateOpenIDConnectProviderResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateOpenIDConnectProviderCommandInput = CreateOpenIDConnectProviderRequest;
export declare type CreateOpenIDConnectProviderCommandOutput = CreateOpenIDConnectProviderResponse & __MetadataBearer;
export declare class CreateOpenIDConnectProviderCommand extends $Command<CreateOpenIDConnectProviderCommandInput, CreateOpenIDConnectProviderCommandOutput, IAMClientResolvedConfig> {
    readonly input: CreateOpenIDConnectProviderCommandInput;
    constructor(input: CreateOpenIDConnectProviderCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateOpenIDConnectProviderCommandInput, CreateOpenIDConnectProviderCommandOutput>;
    private serialize;
    private deserialize;
}
