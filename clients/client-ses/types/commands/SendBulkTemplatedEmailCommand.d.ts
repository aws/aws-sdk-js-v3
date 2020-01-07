import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { SendBulkTemplatedEmailRequest, SendBulkTemplatedEmailResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SendBulkTemplatedEmailCommandInput = SendBulkTemplatedEmailRequest;
export declare type SendBulkTemplatedEmailCommandOutput = SendBulkTemplatedEmailResponse & __MetadataBearer;
export declare class SendBulkTemplatedEmailCommand extends $Command<SendBulkTemplatedEmailCommandInput, SendBulkTemplatedEmailCommandOutput, SESClientResolvedConfig> {
    readonly input: SendBulkTemplatedEmailCommandInput;
    constructor(input: SendBulkTemplatedEmailCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SendBulkTemplatedEmailCommandInput, SendBulkTemplatedEmailCommandOutput>;
    private serialize;
    private deserialize;
}
