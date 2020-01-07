import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { ListGlobalTablesInput, ListGlobalTablesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListGlobalTablesCommandInput = ListGlobalTablesInput;
export declare type ListGlobalTablesCommandOutput = ListGlobalTablesOutput & __MetadataBearer;
export declare class ListGlobalTablesCommand extends $Command<ListGlobalTablesCommandInput, ListGlobalTablesCommandOutput, DynamoDBClientResolvedConfig> {
    readonly input: ListGlobalTablesCommandInput;
    constructor(input: ListGlobalTablesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListGlobalTablesCommandInput, ListGlobalTablesCommandOutput>;
    private serialize;
    private deserialize;
}
