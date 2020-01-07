import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { ListResourceServersRequest, ListResourceServersResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListResourceServersCommandInput = ListResourceServersRequest;
export declare type ListResourceServersCommandOutput = ListResourceServersResponse & __MetadataBearer;
export declare class ListResourceServersCommand extends $Command<ListResourceServersCommandInput, ListResourceServersCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: ListResourceServersCommandInput;
    constructor(input: ListResourceServersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListResourceServersCommandInput, ListResourceServersCommandOutput>;
    private serialize;
    private deserialize;
}
