import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { RespondToAuthChallengeRequest, RespondToAuthChallengeResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RespondToAuthChallengeCommandInput = RespondToAuthChallengeRequest;
export declare type RespondToAuthChallengeCommandOutput = RespondToAuthChallengeResponse & __MetadataBearer;
export declare class RespondToAuthChallengeCommand extends $Command<RespondToAuthChallengeCommandInput, RespondToAuthChallengeCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: RespondToAuthChallengeCommandInput;
    constructor(input: RespondToAuthChallengeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RespondToAuthChallengeCommandInput, RespondToAuthChallengeCommandOutput>;
    private serialize;
    private deserialize;
}
