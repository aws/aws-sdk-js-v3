import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { AdminRespondToAuthChallengeRequest, AdminRespondToAuthChallengeResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AdminRespondToAuthChallengeCommandInput = AdminRespondToAuthChallengeRequest;
export declare type AdminRespondToAuthChallengeCommandOutput = AdminRespondToAuthChallengeResponse & __MetadataBearer;
export declare class AdminRespondToAuthChallengeCommand extends $Command<AdminRespondToAuthChallengeCommandInput, AdminRespondToAuthChallengeCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: AdminRespondToAuthChallengeCommandInput;
    constructor(input: AdminRespondToAuthChallengeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AdminRespondToAuthChallengeCommandInput, AdminRespondToAuthChallengeCommandOutput>;
    private serialize;
    private deserialize;
}
