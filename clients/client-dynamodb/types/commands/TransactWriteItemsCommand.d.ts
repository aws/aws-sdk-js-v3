import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { TransactWriteItemsInput, TransactWriteItemsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type TransactWriteItemsCommandInput = TransactWriteItemsInput;
export declare type TransactWriteItemsCommandOutput = TransactWriteItemsOutput & __MetadataBearer;
export declare class TransactWriteItemsCommand extends $Command<TransactWriteItemsCommandInput, TransactWriteItemsCommandOutput, DynamoDBClientResolvedConfig> {
    readonly input: TransactWriteItemsCommandInput;
    constructor(input: TransactWriteItemsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<TransactWriteItemsCommandInput, TransactWriteItemsCommandOutput>;
    private serialize;
    private deserialize;
}
