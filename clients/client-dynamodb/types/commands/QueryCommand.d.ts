import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { QueryInput, QueryOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type QueryCommandInput = QueryInput;
export declare type QueryCommandOutput = QueryOutput & __MetadataBearer;
export declare class QueryCommand extends $Command<QueryCommandInput, QueryCommandOutput, DynamoDBClientResolvedConfig> {
    readonly input: QueryCommandInput;
    constructor(input: QueryCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<QueryCommandInput, QueryCommandOutput>;
    private serialize;
    private deserialize;
}
