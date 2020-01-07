import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { GetItemInput, GetItemOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetItemCommandInput = GetItemInput;
export declare type GetItemCommandOutput = GetItemOutput & __MetadataBearer;
export declare class GetItemCommand extends $Command<GetItemCommandInput, GetItemCommandOutput, DynamoDBClientResolvedConfig> {
    readonly input: GetItemCommandInput;
    constructor(input: GetItemCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetItemCommandInput, GetItemCommandOutput>;
    private serialize;
    private deserialize;
}
