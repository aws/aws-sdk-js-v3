import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { GetUserAttributeVerificationCodeRequest, GetUserAttributeVerificationCodeResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetUserAttributeVerificationCodeCommandInput = GetUserAttributeVerificationCodeRequest;
export declare type GetUserAttributeVerificationCodeCommandOutput = GetUserAttributeVerificationCodeResponse & __MetadataBearer;
export declare class GetUserAttributeVerificationCodeCommand extends $Command<GetUserAttributeVerificationCodeCommandInput, GetUserAttributeVerificationCodeCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: GetUserAttributeVerificationCodeCommandInput;
    constructor(input: GetUserAttributeVerificationCodeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetUserAttributeVerificationCodeCommandInput, GetUserAttributeVerificationCodeCommandOutput>;
    private serialize;
    private deserialize;
}
