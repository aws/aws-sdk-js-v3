import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { BatchWriteItemInput, BatchWriteItemOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type BatchWriteItemCommandInput = BatchWriteItemInput;
export declare type BatchWriteItemCommandOutput = BatchWriteItemOutput & __MetadataBearer;
export declare class BatchWriteItemCommand extends $Command<BatchWriteItemCommandInput, BatchWriteItemCommandOutput, DynamoDBClientResolvedConfig> {
    readonly input: BatchWriteItemCommandInput;
    constructor(input: BatchWriteItemCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchWriteItemCommandInput, BatchWriteItemCommandOutput>;
    private serialize;
    private deserialize;
}
