import { ServiceInputTypes, ServiceOutputTypes, kendraClientResolvedConfig } from "../kendraClient";
import { QueryRequest, QueryResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type QueryCommandInput = QueryRequest;
export declare type QueryCommandOutput = QueryResult & __MetadataBearer;
export declare class QueryCommand extends $Command<QueryCommandInput, QueryCommandOutput, kendraClientResolvedConfig> {
    readonly input: QueryCommandInput;
    constructor(input: QueryCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: kendraClientResolvedConfig, options?: __HttpHandlerOptions): Handler<QueryCommandInput, QueryCommandOutput>;
    private serialize;
    private deserialize;
}
