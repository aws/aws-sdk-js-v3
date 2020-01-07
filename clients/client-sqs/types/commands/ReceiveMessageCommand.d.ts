import { SQSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SQSClient";
import { ReceiveMessageRequest, ReceiveMessageResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ReceiveMessageCommandInput = ReceiveMessageRequest;
export declare type ReceiveMessageCommandOutput = ReceiveMessageResult & __MetadataBearer;
export declare class ReceiveMessageCommand extends $Command<ReceiveMessageCommandInput, ReceiveMessageCommandOutput, SQSClientResolvedConfig> {
    readonly input: ReceiveMessageCommandInput;
    constructor(input: ReceiveMessageCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SQSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ReceiveMessageCommandInput, ReceiveMessageCommandOutput>;
    private serialize;
    private deserialize;
}
