import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { BatchGetItemInput, BatchGetItemOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type BatchGetItemCommandInput = BatchGetItemInput;
export declare type BatchGetItemCommandOutput = BatchGetItemOutput & __MetadataBearer;
export declare class BatchGetItemCommand extends $Command<BatchGetItemCommandInput, BatchGetItemCommandOutput, DynamoDBClientResolvedConfig> {
    readonly input: BatchGetItemCommandInput;
    constructor(input: BatchGetItemCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchGetItemCommandInput, BatchGetItemCommandOutput>;
    private serialize;
    private deserialize;
}
