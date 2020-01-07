import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { ResendConfirmationCodeRequest, ResendConfirmationCodeResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ResendConfirmationCodeCommandInput = ResendConfirmationCodeRequest;
export declare type ResendConfirmationCodeCommandOutput = ResendConfirmationCodeResponse & __MetadataBearer;
export declare class ResendConfirmationCodeCommand extends $Command<ResendConfirmationCodeCommandInput, ResendConfirmationCodeCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: ResendConfirmationCodeCommandInput;
    constructor(input: ResendConfirmationCodeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ResendConfirmationCodeCommandInput, ResendConfirmationCodeCommandOutput>;
    private serialize;
    private deserialize;
}
