import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { UpdateUserPoolDomainRequest, UpdateUserPoolDomainResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateUserPoolDomainCommandInput = UpdateUserPoolDomainRequest;
export declare type UpdateUserPoolDomainCommandOutput = UpdateUserPoolDomainResponse & __MetadataBearer;
export declare class UpdateUserPoolDomainCommand extends $Command<UpdateUserPoolDomainCommandInput, UpdateUserPoolDomainCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: UpdateUserPoolDomainCommandInput;
    constructor(input: UpdateUserPoolDomainCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateUserPoolDomainCommandInput, UpdateUserPoolDomainCommandOutput>;
    private serialize;
    private deserialize;
}
