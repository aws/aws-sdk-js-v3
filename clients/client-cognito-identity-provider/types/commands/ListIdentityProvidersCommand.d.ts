import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { ListIdentityProvidersRequest, ListIdentityProvidersResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListIdentityProvidersCommandInput = ListIdentityProvidersRequest;
export declare type ListIdentityProvidersCommandOutput = ListIdentityProvidersResponse & __MetadataBearer;
export declare class ListIdentityProvidersCommand extends $Command<ListIdentityProvidersCommandInput, ListIdentityProvidersCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: ListIdentityProvidersCommandInput;
    constructor(input: ListIdentityProvidersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListIdentityProvidersCommandInput, ListIdentityProvidersCommandOutput>;
    private serialize;
    private deserialize;
}
