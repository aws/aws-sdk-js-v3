import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { DeleteUserPoolRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteUserPoolCommandInput = DeleteUserPoolRequest;
export declare type DeleteUserPoolCommandOutput = __MetadataBearer;
export declare class DeleteUserPoolCommand extends $Command<DeleteUserPoolCommandInput, DeleteUserPoolCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: DeleteUserPoolCommandInput;
    constructor(input: DeleteUserPoolCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteUserPoolCommandInput, DeleteUserPoolCommandOutput>;
    private serialize;
    private deserialize;
}
