import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { TransactGetItemsInput, TransactGetItemsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type TransactGetItemsCommandInput = TransactGetItemsInput;
export declare type TransactGetItemsCommandOutput = TransactGetItemsOutput & __MetadataBearer;
export declare class TransactGetItemsCommand extends $Command<TransactGetItemsCommandInput, TransactGetItemsCommandOutput, DynamoDBClientResolvedConfig> {
    readonly input: TransactGetItemsCommandInput;
    constructor(input: TransactGetItemsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<TransactGetItemsCommandInput, TransactGetItemsCommandOutput>;
    private serialize;
    private deserialize;
}
