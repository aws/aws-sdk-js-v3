import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { BatchGetQueryExecutionInput, BatchGetQueryExecutionOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type BatchGetQueryExecutionCommandInput = BatchGetQueryExecutionInput;
export declare type BatchGetQueryExecutionCommandOutput = BatchGetQueryExecutionOutput & __MetadataBearer;
export declare class BatchGetQueryExecutionCommand extends $Command<BatchGetQueryExecutionCommandInput, BatchGetQueryExecutionCommandOutput, AthenaClientResolvedConfig> {
    readonly input: BatchGetQueryExecutionCommandInput;
    constructor(input: BatchGetQueryExecutionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AthenaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchGetQueryExecutionCommandInput, BatchGetQueryExecutionCommandOutput>;
    private serialize;
    private deserialize;
}
