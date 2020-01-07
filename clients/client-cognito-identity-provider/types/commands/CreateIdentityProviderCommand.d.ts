import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { CreateIdentityProviderRequest, CreateIdentityProviderResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateIdentityProviderCommandInput = CreateIdentityProviderRequest;
export declare type CreateIdentityProviderCommandOutput = CreateIdentityProviderResponse & __MetadataBearer;
export declare class CreateIdentityProviderCommand extends $Command<CreateIdentityProviderCommandInput, CreateIdentityProviderCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: CreateIdentityProviderCommandInput;
    constructor(input: CreateIdentityProviderCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateIdentityProviderCommandInput, CreateIdentityProviderCommandOutput>;
    private serialize;
    private deserialize;
}
