import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { DeleteTableInput, DeleteTableOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteTableCommandInput = DeleteTableInput;
export declare type DeleteTableCommandOutput = DeleteTableOutput & __MetadataBearer;
export declare class DeleteTableCommand extends $Command<DeleteTableCommandInput, DeleteTableCommandOutput, DynamoDBClientResolvedConfig> {
    readonly input: DeleteTableCommandInput;
    constructor(input: DeleteTableCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTableCommandInput, DeleteTableCommandOutput>;
    private serialize;
    private deserialize;
}
