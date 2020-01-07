import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { BatchStopUpdateActionMessage, UpdateActionResultsMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type BatchStopUpdateActionCommandInput = BatchStopUpdateActionMessage;
export declare type BatchStopUpdateActionCommandOutput = UpdateActionResultsMessage & __MetadataBearer;
export declare class BatchStopUpdateActionCommand extends $Command<BatchStopUpdateActionCommandInput, BatchStopUpdateActionCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: BatchStopUpdateActionCommandInput;
    constructor(input: BatchStopUpdateActionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchStopUpdateActionCommandInput, BatchStopUpdateActionCommandOutput>;
    private serialize;
    private deserialize;
}
