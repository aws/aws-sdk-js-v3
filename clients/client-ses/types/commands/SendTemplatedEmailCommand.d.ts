import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { SendTemplatedEmailRequest, SendTemplatedEmailResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SendTemplatedEmailCommandInput = SendTemplatedEmailRequest;
export declare type SendTemplatedEmailCommandOutput = SendTemplatedEmailResponse & __MetadataBearer;
export declare class SendTemplatedEmailCommand extends $Command<SendTemplatedEmailCommandInput, SendTemplatedEmailCommandOutput, SESClientResolvedConfig> {
    readonly input: SendTemplatedEmailCommandInput;
    constructor(input: SendTemplatedEmailCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SendTemplatedEmailCommandInput, SendTemplatedEmailCommandOutput>;
    private serialize;
    private deserialize;
}
