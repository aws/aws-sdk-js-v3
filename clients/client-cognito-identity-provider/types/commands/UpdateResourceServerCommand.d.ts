import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { UpdateResourceServerRequest, UpdateResourceServerResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateResourceServerCommandInput = UpdateResourceServerRequest;
export declare type UpdateResourceServerCommandOutput = UpdateResourceServerResponse & __MetadataBearer;
export declare class UpdateResourceServerCommand extends $Command<UpdateResourceServerCommandInput, UpdateResourceServerCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: UpdateResourceServerCommandInput;
    constructor(input: UpdateResourceServerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateResourceServerCommandInput, UpdateResourceServerCommandOutput>;
    private serialize;
    private deserialize;
}
