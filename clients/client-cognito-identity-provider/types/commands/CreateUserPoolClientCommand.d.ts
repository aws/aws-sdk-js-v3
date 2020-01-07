import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { CreateUserPoolClientRequest, CreateUserPoolClientResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateUserPoolClientCommandInput = CreateUserPoolClientRequest;
export declare type CreateUserPoolClientCommandOutput = CreateUserPoolClientResponse & __MetadataBearer;
export declare class CreateUserPoolClientCommand extends $Command<CreateUserPoolClientCommandInput, CreateUserPoolClientCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: CreateUserPoolClientCommandInput;
    constructor(input: CreateUserPoolClientCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateUserPoolClientCommandInput, CreateUserPoolClientCommandOutput>;
    private serialize;
    private deserialize;
}
