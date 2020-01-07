import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { UpdateUserPoolClientRequest, UpdateUserPoolClientResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateUserPoolClientCommandInput = UpdateUserPoolClientRequest;
export declare type UpdateUserPoolClientCommandOutput = UpdateUserPoolClientResponse & __MetadataBearer;
export declare class UpdateUserPoolClientCommand extends $Command<UpdateUserPoolClientCommandInput, UpdateUserPoolClientCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: UpdateUserPoolClientCommandInput;
    constructor(input: UpdateUserPoolClientCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateUserPoolClientCommandInput, UpdateUserPoolClientCommandOutput>;
    private serialize;
    private deserialize;
}
