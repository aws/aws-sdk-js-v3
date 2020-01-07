import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { GetUserRequest, GetUserResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetUserCommandInput = GetUserRequest;
export declare type GetUserCommandOutput = GetUserResponse & __MetadataBearer;
export declare class GetUserCommand extends $Command<GetUserCommandInput, GetUserCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: GetUserCommandInput;
    constructor(input: GetUserCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetUserCommandInput, GetUserCommandOutput>;
    private serialize;
    private deserialize;
}
