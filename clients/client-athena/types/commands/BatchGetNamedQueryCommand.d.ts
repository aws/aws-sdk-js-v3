import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { BatchGetNamedQueryInput, BatchGetNamedQueryOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type BatchGetNamedQueryCommandInput = BatchGetNamedQueryInput;
export declare type BatchGetNamedQueryCommandOutput = BatchGetNamedQueryOutput & __MetadataBearer;
export declare class BatchGetNamedQueryCommand extends $Command<BatchGetNamedQueryCommandInput, BatchGetNamedQueryCommandOutput, AthenaClientResolvedConfig> {
    readonly input: BatchGetNamedQueryCommandInput;
    constructor(input: BatchGetNamedQueryCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AthenaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchGetNamedQueryCommandInput, BatchGetNamedQueryCommandOutput>;
    private serialize;
    private deserialize;
}
