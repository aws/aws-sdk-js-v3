import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { SignUpRequest, SignUpResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SignUpCommandInput = SignUpRequest;
export declare type SignUpCommandOutput = SignUpResponse & __MetadataBearer;
export declare class SignUpCommand extends $Command<SignUpCommandInput, SignUpCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: SignUpCommandInput;
    constructor(input: SignUpCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SignUpCommandInput, SignUpCommandOutput>;
    private serialize;
    private deserialize;
}
