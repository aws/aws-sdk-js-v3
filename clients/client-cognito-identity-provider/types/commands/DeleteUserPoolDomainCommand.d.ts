import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { DeleteUserPoolDomainRequest, DeleteUserPoolDomainResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteUserPoolDomainCommandInput = DeleteUserPoolDomainRequest;
export declare type DeleteUserPoolDomainCommandOutput = DeleteUserPoolDomainResponse & __MetadataBearer;
export declare class DeleteUserPoolDomainCommand extends $Command<DeleteUserPoolDomainCommandInput, DeleteUserPoolDomainCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: DeleteUserPoolDomainCommandInput;
    constructor(input: DeleteUserPoolDomainCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteUserPoolDomainCommandInput, DeleteUserPoolDomainCommandOutput>;
    private serialize;
    private deserialize;
}
