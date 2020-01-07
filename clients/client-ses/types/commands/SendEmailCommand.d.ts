import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { SendEmailRequest, SendEmailResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SendEmailCommandInput = SendEmailRequest;
export declare type SendEmailCommandOutput = SendEmailResponse & __MetadataBearer;
export declare class SendEmailCommand extends $Command<SendEmailCommandInput, SendEmailCommandOutput, SESClientResolvedConfig> {
    readonly input: SendEmailCommandInput;
    constructor(input: SendEmailCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SendEmailCommandInput, SendEmailCommandOutput>;
    private serialize;
    private deserialize;
}
