import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { CreateGlobalTableInput, CreateGlobalTableOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateGlobalTableCommandInput = CreateGlobalTableInput;
export declare type CreateGlobalTableCommandOutput = CreateGlobalTableOutput & __MetadataBearer;
export declare class CreateGlobalTableCommand extends $Command<CreateGlobalTableCommandInput, CreateGlobalTableCommandOutput, DynamoDBClientResolvedConfig> {
    readonly input: CreateGlobalTableCommandInput;
    constructor(input: CreateGlobalTableCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateGlobalTableCommandInput, CreateGlobalTableCommandOutput>;
    private serialize;
    private deserialize;
}
