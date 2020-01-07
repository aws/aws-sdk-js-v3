import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { BatchGetAggregateResourceConfigRequest, BatchGetAggregateResourceConfigResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type BatchGetAggregateResourceConfigCommandInput = BatchGetAggregateResourceConfigRequest;
export declare type BatchGetAggregateResourceConfigCommandOutput = BatchGetAggregateResourceConfigResponse & __MetadataBearer;
export declare class BatchGetAggregateResourceConfigCommand extends $Command<BatchGetAggregateResourceConfigCommandInput, BatchGetAggregateResourceConfigCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: BatchGetAggregateResourceConfigCommandInput;
    constructor(input: BatchGetAggregateResourceConfigCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchGetAggregateResourceConfigCommandInput, BatchGetAggregateResourceConfigCommandOutput>;
    private serialize;
    private deserialize;
}
