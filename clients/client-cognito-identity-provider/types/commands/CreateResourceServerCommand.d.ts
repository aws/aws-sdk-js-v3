import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { CreateResourceServerRequest, CreateResourceServerResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateResourceServerCommandInput = CreateResourceServerRequest;
export declare type CreateResourceServerCommandOutput = CreateResourceServerResponse & __MetadataBearer;
export declare class CreateResourceServerCommand extends $Command<CreateResourceServerCommandInput, CreateResourceServerCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: CreateResourceServerCommandInput;
    constructor(input: CreateResourceServerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateResourceServerCommandInput, CreateResourceServerCommandOutput>;
    private serialize;
    private deserialize;
}
