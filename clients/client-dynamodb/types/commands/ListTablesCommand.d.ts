import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { ListTablesInput, ListTablesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListTablesCommandInput = ListTablesInput;
export declare type ListTablesCommandOutput = ListTablesOutput & __MetadataBearer;
export declare class ListTablesCommand extends $Command<ListTablesCommandInput, ListTablesCommandOutput, DynamoDBClientResolvedConfig> {
    readonly input: ListTablesCommandInput;
    constructor(input: ListTablesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTablesCommandInput, ListTablesCommandOutput>;
    private serialize;
    private deserialize;
}
