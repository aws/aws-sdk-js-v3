import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { UpdateTableInput, UpdateTableOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateTableCommandInput = UpdateTableInput;
export declare type UpdateTableCommandOutput = UpdateTableOutput & __MetadataBearer;
export declare class UpdateTableCommand extends $Command<UpdateTableCommandInput, UpdateTableCommandOutput, DynamoDBClientResolvedConfig> {
    readonly input: UpdateTableCommandInput;
    constructor(input: UpdateTableCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateTableCommandInput, UpdateTableCommandOutput>;
    private serialize;
    private deserialize;
}
