import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { DeleteItemInput, DeleteItemOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteItemCommandInput = DeleteItemInput;
export declare type DeleteItemCommandOutput = DeleteItemOutput & __MetadataBearer;
export declare class DeleteItemCommand extends $Command<DeleteItemCommandInput, DeleteItemCommandOutput, DynamoDBClientResolvedConfig> {
    readonly input: DeleteItemCommandInput;
    constructor(input: DeleteItemCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteItemCommandInput, DeleteItemCommandOutput>;
    private serialize;
    private deserialize;
}
