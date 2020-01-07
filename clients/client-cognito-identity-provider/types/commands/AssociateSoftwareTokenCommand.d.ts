import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { AssociateSoftwareTokenRequest, AssociateSoftwareTokenResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AssociateSoftwareTokenCommandInput = AssociateSoftwareTokenRequest;
export declare type AssociateSoftwareTokenCommandOutput = AssociateSoftwareTokenResponse & __MetadataBearer;
export declare class AssociateSoftwareTokenCommand extends $Command<AssociateSoftwareTokenCommandInput, AssociateSoftwareTokenCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: AssociateSoftwareTokenCommandInput;
    constructor(input: AssociateSoftwareTokenCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateSoftwareTokenCommandInput, AssociateSoftwareTokenCommandOutput>;
    private serialize;
    private deserialize;
}
