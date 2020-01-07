import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { VerifySoftwareTokenRequest, VerifySoftwareTokenResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type VerifySoftwareTokenCommandInput = VerifySoftwareTokenRequest;
export declare type VerifySoftwareTokenCommandOutput = VerifySoftwareTokenResponse & __MetadataBearer;
export declare class VerifySoftwareTokenCommand extends $Command<VerifySoftwareTokenCommandInput, VerifySoftwareTokenCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: VerifySoftwareTokenCommandInput;
    constructor(input: VerifySoftwareTokenCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<VerifySoftwareTokenCommandInput, VerifySoftwareTokenCommandOutput>;
    private serialize;
    private deserialize;
}
