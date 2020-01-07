import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { SendCustomVerificationEmailRequest, SendCustomVerificationEmailResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SendCustomVerificationEmailCommandInput = SendCustomVerificationEmailRequest;
export declare type SendCustomVerificationEmailCommandOutput = SendCustomVerificationEmailResponse & __MetadataBearer;
export declare class SendCustomVerificationEmailCommand extends $Command<SendCustomVerificationEmailCommandInput, SendCustomVerificationEmailCommandOutput, SESClientResolvedConfig> {
    readonly input: SendCustomVerificationEmailCommandInput;
    constructor(input: SendCustomVerificationEmailCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SendCustomVerificationEmailCommandInput, SendCustomVerificationEmailCommandOutput>;
    private serialize;
    private deserialize;
}
