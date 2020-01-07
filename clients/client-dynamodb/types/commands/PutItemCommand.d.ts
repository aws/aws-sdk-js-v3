import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { PutItemInput, PutItemOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutItemCommandInput = PutItemInput;
export declare type PutItemCommandOutput = PutItemOutput & __MetadataBearer;
export declare class PutItemCommand extends $Command<PutItemCommandInput, PutItemCommandOutput, DynamoDBClientResolvedConfig> {
    readonly input: PutItemCommandInput;
    constructor(input: PutItemCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutItemCommandInput, PutItemCommandOutput>;
    private serialize;
    private deserialize;
}
