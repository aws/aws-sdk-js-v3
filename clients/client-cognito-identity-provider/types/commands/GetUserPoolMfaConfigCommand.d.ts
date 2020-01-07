import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { GetUserPoolMfaConfigRequest, GetUserPoolMfaConfigResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetUserPoolMfaConfigCommandInput = GetUserPoolMfaConfigRequest;
export declare type GetUserPoolMfaConfigCommandOutput = GetUserPoolMfaConfigResponse & __MetadataBearer;
export declare class GetUserPoolMfaConfigCommand extends $Command<GetUserPoolMfaConfigCommandInput, GetUserPoolMfaConfigCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: GetUserPoolMfaConfigCommandInput;
    constructor(input: GetUserPoolMfaConfigCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetUserPoolMfaConfigCommandInput, GetUserPoolMfaConfigCommandOutput>;
    private serialize;
    private deserialize;
}
