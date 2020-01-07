import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { BatchApplyUpdateActionMessage, UpdateActionResultsMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type BatchApplyUpdateActionCommandInput = BatchApplyUpdateActionMessage;
export declare type BatchApplyUpdateActionCommandOutput = UpdateActionResultsMessage & __MetadataBearer;
export declare class BatchApplyUpdateActionCommand extends $Command<BatchApplyUpdateActionCommandInput, BatchApplyUpdateActionCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: BatchApplyUpdateActionCommandInput;
    constructor(input: BatchApplyUpdateActionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchApplyUpdateActionCommandInput, BatchApplyUpdateActionCommandOutput>;
    private serialize;
    private deserialize;
}
