import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { ChangePasswordRequest, ChangePasswordResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ChangePasswordCommandInput = ChangePasswordRequest;
export declare type ChangePasswordCommandOutput = ChangePasswordResponse & __MetadataBearer;
export declare class ChangePasswordCommand extends $Command<ChangePasswordCommandInput, ChangePasswordCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: ChangePasswordCommandInput;
    constructor(input: ChangePasswordCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ChangePasswordCommandInput, ChangePasswordCommandOutput>;
    private serialize;
    private deserialize;
}
