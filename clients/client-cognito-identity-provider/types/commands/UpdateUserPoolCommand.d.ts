import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { UpdateUserPoolRequest, UpdateUserPoolResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateUserPoolCommandInput = UpdateUserPoolRequest;
export declare type UpdateUserPoolCommandOutput = UpdateUserPoolResponse & __MetadataBearer;
export declare class UpdateUserPoolCommand extends $Command<UpdateUserPoolCommandInput, UpdateUserPoolCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: UpdateUserPoolCommandInput;
    constructor(input: UpdateUserPoolCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateUserPoolCommandInput, UpdateUserPoolCommandOutput>;
    private serialize;
    private deserialize;
}
