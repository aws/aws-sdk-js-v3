import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { ListUserPoolClientsRequest, ListUserPoolClientsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListUserPoolClientsCommandInput = ListUserPoolClientsRequest;
export declare type ListUserPoolClientsCommandOutput = ListUserPoolClientsResponse & __MetadataBearer;
export declare class ListUserPoolClientsCommand extends $Command<ListUserPoolClientsCommandInput, ListUserPoolClientsCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: ListUserPoolClientsCommandInput;
    constructor(input: ListUserPoolClientsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListUserPoolClientsCommandInput, ListUserPoolClientsCommandOutput>;
    private serialize;
    private deserialize;
}
