import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { AdminUpdateAuthEventFeedbackRequest, AdminUpdateAuthEventFeedbackResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AdminUpdateAuthEventFeedbackCommandInput = AdminUpdateAuthEventFeedbackRequest;
export declare type AdminUpdateAuthEventFeedbackCommandOutput = AdminUpdateAuthEventFeedbackResponse & __MetadataBearer;
export declare class AdminUpdateAuthEventFeedbackCommand extends $Command<AdminUpdateAuthEventFeedbackCommandInput, AdminUpdateAuthEventFeedbackCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: AdminUpdateAuthEventFeedbackCommandInput;
    constructor(input: AdminUpdateAuthEventFeedbackCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AdminUpdateAuthEventFeedbackCommandInput, AdminUpdateAuthEventFeedbackCommandOutput>;
    private serialize;
    private deserialize;
}
