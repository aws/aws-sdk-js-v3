import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { SendRawEmailRequest, SendRawEmailResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SendRawEmailCommandInput = SendRawEmailRequest;
export declare type SendRawEmailCommandOutput = SendRawEmailResponse & __MetadataBearer;
export declare class SendRawEmailCommand extends $Command<SendRawEmailCommandInput, SendRawEmailCommandOutput, SESClientResolvedConfig> {
    readonly input: SendRawEmailCommandInput;
    constructor(input: SendRawEmailCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SendRawEmailCommandInput, SendRawEmailCommandOutput>;
    private serialize;
    private deserialize;
}
