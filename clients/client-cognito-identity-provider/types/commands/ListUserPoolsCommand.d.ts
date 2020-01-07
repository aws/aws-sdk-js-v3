import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { ListUserPoolsRequest, ListUserPoolsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListUserPoolsCommandInput = ListUserPoolsRequest;
export declare type ListUserPoolsCommandOutput = ListUserPoolsResponse & __MetadataBearer;
export declare class ListUserPoolsCommand extends $Command<ListUserPoolsCommandInput, ListUserPoolsCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: ListUserPoolsCommandInput;
    constructor(input: ListUserPoolsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListUserPoolsCommandInput, ListUserPoolsCommandOutput>;
    private serialize;
    private deserialize;
}
