import { DataPipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataPipelineClient";
import { QueryObjectsInput, QueryObjectsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type QueryObjectsCommandInput = QueryObjectsInput;
export declare type QueryObjectsCommandOutput = QueryObjectsOutput & __MetadataBearer;
export declare class QueryObjectsCommand extends $Command<QueryObjectsCommandInput, QueryObjectsCommandOutput, DataPipelineClientResolvedConfig> {
    readonly input: QueryObjectsCommandInput;
    constructor(input: QueryObjectsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataPipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<QueryObjectsCommandInput, QueryObjectsCommandOutput>;
    private serialize;
    private deserialize;
}
