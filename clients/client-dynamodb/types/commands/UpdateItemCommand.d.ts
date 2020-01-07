import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { UpdateItemInput, UpdateItemOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateItemCommandInput = UpdateItemInput;
export declare type UpdateItemCommandOutput = UpdateItemOutput & __MetadataBearer;
export declare class UpdateItemCommand extends $Command<UpdateItemCommandInput, UpdateItemCommandOutput, DynamoDBClientResolvedConfig> {
    readonly input: UpdateItemCommandInput;
    constructor(input: UpdateItemCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateItemCommandInput, UpdateItemCommandOutput>;
    private serialize;
    private deserialize;
}
