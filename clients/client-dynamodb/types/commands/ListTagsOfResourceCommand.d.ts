import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { ListTagsOfResourceInput, ListTagsOfResourceOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListTagsOfResourceCommandInput = ListTagsOfResourceInput;
export declare type ListTagsOfResourceCommandOutput = ListTagsOfResourceOutput & __MetadataBearer;
export declare class ListTagsOfResourceCommand extends $Command<ListTagsOfResourceCommandInput, ListTagsOfResourceCommandOutput, DynamoDBClientResolvedConfig> {
    readonly input: ListTagsOfResourceCommandInput;
    constructor(input: ListTagsOfResourceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTagsOfResourceCommandInput, ListTagsOfResourceCommandOutput>;
    private serialize;
    private deserialize;
}
