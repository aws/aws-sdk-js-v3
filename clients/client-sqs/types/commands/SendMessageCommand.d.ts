import { SQSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SQSClient";
import { SendMessageRequest, SendMessageResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SendMessageCommandInput = SendMessageRequest;
export declare type SendMessageCommandOutput = SendMessageResult & __MetadataBearer;
export declare class SendMessageCommand extends $Command<SendMessageCommandInput, SendMessageCommandOutput, SQSClientResolvedConfig> {
    readonly input: SendMessageCommandInput;
    constructor(input: SendMessageCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SQSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SendMessageCommandInput, SendMessageCommandOutput>;
    private serialize;
    private deserialize;
}
