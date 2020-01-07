import { CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityClient";
import { GetCredentialsForIdentityInput, GetCredentialsForIdentityResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetCredentialsForIdentityCommandInput = GetCredentialsForIdentityInput;
export declare type GetCredentialsForIdentityCommandOutput = GetCredentialsForIdentityResponse & __MetadataBearer;
export declare class GetCredentialsForIdentityCommand extends $Command<GetCredentialsForIdentityCommandInput, GetCredentialsForIdentityCommandOutput, CognitoIdentityClientResolvedConfig> {
    readonly input: GetCredentialsForIdentityCommandInput;
    constructor(input: GetCredentialsForIdentityCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCredentialsForIdentityCommandInput, GetCredentialsForIdentityCommandOutput>;
    private serialize;
    private deserialize;
}
