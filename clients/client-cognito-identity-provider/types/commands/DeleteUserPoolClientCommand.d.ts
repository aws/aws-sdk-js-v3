import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { DeleteUserPoolClientRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteUserPoolClientCommandInput = DeleteUserPoolClientRequest;
export declare type DeleteUserPoolClientCommandOutput = __MetadataBearer;
export declare class DeleteUserPoolClientCommand extends $Command<DeleteUserPoolClientCommandInput, DeleteUserPoolClientCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: DeleteUserPoolClientCommandInput;
    constructor(input: DeleteUserPoolClientCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteUserPoolClientCommandInput, DeleteUserPoolClientCommandOutput>;
    private serialize;
    private deserialize;
}
