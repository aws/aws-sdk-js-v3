import { SQSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SQSClient";
import { ChangeMessageVisibilityBatchRequest, ChangeMessageVisibilityBatchResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ChangeMessageVisibilityBatchCommandInput = ChangeMessageVisibilityBatchRequest;
export declare type ChangeMessageVisibilityBatchCommandOutput = ChangeMessageVisibilityBatchResult & __MetadataBearer;
export declare class ChangeMessageVisibilityBatchCommand extends $Command<ChangeMessageVisibilityBatchCommandInput, ChangeMessageVisibilityBatchCommandOutput, SQSClientResolvedConfig> {
    readonly input: ChangeMessageVisibilityBatchCommandInput;
    constructor(input: ChangeMessageVisibilityBatchCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SQSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ChangeMessageVisibilityBatchCommandInput, ChangeMessageVisibilityBatchCommandOutput>;
    private serialize;
    private deserialize;
}
