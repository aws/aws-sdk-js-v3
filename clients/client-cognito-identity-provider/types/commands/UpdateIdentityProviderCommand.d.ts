import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { UpdateIdentityProviderRequest, UpdateIdentityProviderResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateIdentityProviderCommandInput = UpdateIdentityProviderRequest;
export declare type UpdateIdentityProviderCommandOutput = UpdateIdentityProviderResponse & __MetadataBearer;
export declare class UpdateIdentityProviderCommand extends $Command<UpdateIdentityProviderCommandInput, UpdateIdentityProviderCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: UpdateIdentityProviderCommandInput;
    constructor(input: UpdateIdentityProviderCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateIdentityProviderCommandInput, UpdateIdentityProviderCommandOutput>;
    private serialize;
    private deserialize;
}
