import { DynamoDBStreamsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBStreamsClient";
import { ListStreamsInput, ListStreamsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListStreamsCommandInput = ListStreamsInput;
export declare type ListStreamsCommandOutput = ListStreamsOutput & __MetadataBearer;
export declare class ListStreamsCommand extends $Command<ListStreamsCommandInput, ListStreamsCommandOutput, DynamoDBStreamsClientResolvedConfig> {
    readonly input: ListStreamsCommandInput;
    constructor(input: ListStreamsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBStreamsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListStreamsCommandInput, ListStreamsCommandOutput>;
    private serialize;
    private deserialize;
}
