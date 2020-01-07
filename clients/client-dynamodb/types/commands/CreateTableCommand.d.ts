import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { CreateTableInput, CreateTableOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateTableCommandInput = CreateTableInput;
export declare type CreateTableCommandOutput = CreateTableOutput & __MetadataBearer;
export declare class CreateTableCommand extends $Command<CreateTableCommandInput, CreateTableCommandOutput, DynamoDBClientResolvedConfig> {
    readonly input: CreateTableCommandInput;
    constructor(input: CreateTableCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateTableCommandInput, CreateTableCommandOutput>;
    private serialize;
    private deserialize;
}
