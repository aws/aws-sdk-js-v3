import { CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityClient";
import { GetOpenIdTokenForDeveloperIdentityInput, GetOpenIdTokenForDeveloperIdentityResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetOpenIdTokenForDeveloperIdentityCommandInput = GetOpenIdTokenForDeveloperIdentityInput;
export declare type GetOpenIdTokenForDeveloperIdentityCommandOutput = GetOpenIdTokenForDeveloperIdentityResponse & __MetadataBearer;
export declare class GetOpenIdTokenForDeveloperIdentityCommand extends $Command<GetOpenIdTokenForDeveloperIdentityCommandInput, GetOpenIdTokenForDeveloperIdentityCommandOutput, CognitoIdentityClientResolvedConfig> {
    readonly input: GetOpenIdTokenForDeveloperIdentityCommandInput;
    constructor(input: GetOpenIdTokenForDeveloperIdentityCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetOpenIdTokenForDeveloperIdentityCommandInput, GetOpenIdTokenForDeveloperIdentityCommandOutput>;
    private serialize;
    private deserialize;
}
