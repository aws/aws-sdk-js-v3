import { SQSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SQSClient";
import { SendMessageBatchRequest, SendMessageBatchResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SendMessageBatchCommandInput = SendMessageBatchRequest;
export declare type SendMessageBatchCommandOutput = SendMessageBatchResult & __MetadataBearer;
export declare class SendMessageBatchCommand extends $Command<SendMessageBatchCommandInput, SendMessageBatchCommandOutput, SQSClientResolvedConfig> {
    readonly input: SendMessageBatchCommandInput;
    constructor(input: SendMessageBatchCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SQSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SendMessageBatchCommandInput, SendMessageBatchCommandOutput>;
    private serialize;
    private deserialize;
}
