import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { DeleteResourceServerRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteResourceServerCommandInput = DeleteResourceServerRequest;
export declare type DeleteResourceServerCommandOutput = __MetadataBearer;
export declare class DeleteResourceServerCommand extends $Command<DeleteResourceServerCommandInput, DeleteResourceServerCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: DeleteResourceServerCommandInput;
    constructor(input: DeleteResourceServerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteResourceServerCommandInput, DeleteResourceServerCommandOutput>;
    private serialize;
    private deserialize;
}
