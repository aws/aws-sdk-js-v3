import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { DeleteIdentityProviderRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteIdentityProviderCommandInput = DeleteIdentityProviderRequest;
export declare type DeleteIdentityProviderCommandOutput = __MetadataBearer;
export declare class DeleteIdentityProviderCommand extends $Command<DeleteIdentityProviderCommandInput, DeleteIdentityProviderCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: DeleteIdentityProviderCommandInput;
    constructor(input: DeleteIdentityProviderCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteIdentityProviderCommandInput, DeleteIdentityProviderCommandOutput>;
    private serialize;
    private deserialize;
}
