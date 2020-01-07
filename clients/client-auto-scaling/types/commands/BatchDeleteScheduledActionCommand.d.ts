import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { BatchDeleteScheduledActionAnswer, BatchDeleteScheduledActionType } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type BatchDeleteScheduledActionCommandInput = BatchDeleteScheduledActionType;
export declare type BatchDeleteScheduledActionCommandOutput = BatchDeleteScheduledActionAnswer & __MetadataBearer;
export declare class BatchDeleteScheduledActionCommand extends $Command<BatchDeleteScheduledActionCommandInput, BatchDeleteScheduledActionCommandOutput, AutoScalingClientResolvedConfig> {
    readonly input: BatchDeleteScheduledActionCommandInput;
    constructor(input: BatchDeleteScheduledActionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AutoScalingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchDeleteScheduledActionCommandInput, BatchDeleteScheduledActionCommandOutput>;
    private serialize;
    private deserialize;
}
