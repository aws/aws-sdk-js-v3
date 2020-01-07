import { CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityClient";
import { GetOpenIdTokenInput, GetOpenIdTokenResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetOpenIdTokenCommandInput = GetOpenIdTokenInput;
export declare type GetOpenIdTokenCommandOutput = GetOpenIdTokenResponse & __MetadataBearer;
export declare class GetOpenIdTokenCommand extends $Command<GetOpenIdTokenCommandInput, GetOpenIdTokenCommandOutput, CognitoIdentityClientResolvedConfig> {
    readonly input: GetOpenIdTokenCommandInput;
    constructor(input: GetOpenIdTokenCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetOpenIdTokenCommandInput, GetOpenIdTokenCommandOutput>;
    private serialize;
    private deserialize;
}
