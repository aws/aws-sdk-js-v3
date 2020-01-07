import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { CreateUserPoolRequest, CreateUserPoolResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateUserPoolCommandInput = CreateUserPoolRequest;
export declare type CreateUserPoolCommandOutput = CreateUserPoolResponse & __MetadataBearer;
export declare class CreateUserPoolCommand extends $Command<CreateUserPoolCommandInput, CreateUserPoolCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: CreateUserPoolCommandInput;
    constructor(input: CreateUserPoolCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateUserPoolCommandInput, CreateUserPoolCommandOutput>;
    private serialize;
    private deserialize;
}
