import { CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityClient";
import { GetIdentityPoolRolesInput, GetIdentityPoolRolesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetIdentityPoolRolesCommandInput = GetIdentityPoolRolesInput;
export declare type GetIdentityPoolRolesCommandOutput = GetIdentityPoolRolesResponse & __MetadataBearer;
export declare class GetIdentityPoolRolesCommand extends $Command<GetIdentityPoolRolesCommandInput, GetIdentityPoolRolesCommandOutput, CognitoIdentityClientResolvedConfig> {
    readonly input: GetIdentityPoolRolesCommandInput;
    constructor(input: GetIdentityPoolRolesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetIdentityPoolRolesCommandInput, GetIdentityPoolRolesCommandOutput>;
    private serialize;
    private deserialize;
}
