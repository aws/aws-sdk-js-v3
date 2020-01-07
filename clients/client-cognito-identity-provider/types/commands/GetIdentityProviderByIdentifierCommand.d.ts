import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { GetIdentityProviderByIdentifierRequest, GetIdentityProviderByIdentifierResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetIdentityProviderByIdentifierCommandInput = GetIdentityProviderByIdentifierRequest;
export declare type GetIdentityProviderByIdentifierCommandOutput = GetIdentityProviderByIdentifierResponse & __MetadataBearer;
export declare class GetIdentityProviderByIdentifierCommand extends $Command<GetIdentityProviderByIdentifierCommandInput, GetIdentityProviderByIdentifierCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: GetIdentityProviderByIdentifierCommandInput;
    constructor(input: GetIdentityProviderByIdentifierCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetIdentityProviderByIdentifierCommandInput, GetIdentityProviderByIdentifierCommandOutput>;
    private serialize;
    private deserialize;
}
