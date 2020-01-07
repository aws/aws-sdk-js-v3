import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { CreateUserPoolDomainRequest, CreateUserPoolDomainResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateUserPoolDomainCommandInput = CreateUserPoolDomainRequest;
export declare type CreateUserPoolDomainCommandOutput = CreateUserPoolDomainResponse & __MetadataBearer;
export declare class CreateUserPoolDomainCommand extends $Command<CreateUserPoolDomainCommandInput, CreateUserPoolDomainCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: CreateUserPoolDomainCommandInput;
    constructor(input: CreateUserPoolDomainCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateUserPoolDomainCommandInput, CreateUserPoolDomainCommandOutput>;
    private serialize;
    private deserialize;
}
