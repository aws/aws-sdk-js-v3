import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { SetIdentityFeedbackForwardingEnabledRequest, SetIdentityFeedbackForwardingEnabledResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SetIdentityFeedbackForwardingEnabledCommandInput = SetIdentityFeedbackForwardingEnabledRequest;
export declare type SetIdentityFeedbackForwardingEnabledCommandOutput = SetIdentityFeedbackForwardingEnabledResponse & __MetadataBearer;
export declare class SetIdentityFeedbackForwardingEnabledCommand extends $Command<SetIdentityFeedbackForwardingEnabledCommandInput, SetIdentityFeedbackForwardingEnabledCommandOutput, SESClientResolvedConfig> {
    readonly input: SetIdentityFeedbackForwardingEnabledCommandInput;
    constructor(input: SetIdentityFeedbackForwardingEnabledCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetIdentityFeedbackForwardingEnabledCommandInput, SetIdentityFeedbackForwardingEnabledCommandOutput>;
    private serialize;
    private deserialize;
}
