import { SQSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SQSClient";
import { DeleteMessageBatchRequest, DeleteMessageBatchResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteMessageBatchCommandInput = DeleteMessageBatchRequest;
export declare type DeleteMessageBatchCommandOutput = DeleteMessageBatchResult & __MetadataBearer;
export declare class DeleteMessageBatchCommand extends $Command<DeleteMessageBatchCommandInput, DeleteMessageBatchCommandOutput, SQSClientResolvedConfig> {
    readonly input: DeleteMessageBatchCommandInput;
    constructor(input: DeleteMessageBatchCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SQSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteMessageBatchCommandInput, DeleteMessageBatchCommandOutput>;
    private serialize;
    private deserialize;
}
