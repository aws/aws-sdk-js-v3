import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { UpdateAuthEventFeedbackRequest, UpdateAuthEventFeedbackResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateAuthEventFeedbackCommandInput = UpdateAuthEventFeedbackRequest;
export declare type UpdateAuthEventFeedbackCommandOutput = UpdateAuthEventFeedbackResponse & __MetadataBearer;
export declare class UpdateAuthEventFeedbackCommand extends $Command<UpdateAuthEventFeedbackCommandInput, UpdateAuthEventFeedbackCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: UpdateAuthEventFeedbackCommandInput;
    constructor(input: UpdateAuthEventFeedbackCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateAuthEventFeedbackCommandInput, UpdateAuthEventFeedbackCommandOutput>;
    private serialize;
    private deserialize;
}
