import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { VerifyUserAttributeRequest, VerifyUserAttributeResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type VerifyUserAttributeCommandInput = VerifyUserAttributeRequest;
export declare type VerifyUserAttributeCommandOutput = VerifyUserAttributeResponse & __MetadataBearer;
export declare class VerifyUserAttributeCommand extends $Command<VerifyUserAttributeCommandInput, VerifyUserAttributeCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: VerifyUserAttributeCommandInput;
    constructor(input: VerifyUserAttributeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<VerifyUserAttributeCommandInput, VerifyUserAttributeCommandOutput>;
    private serialize;
    private deserialize;
}
