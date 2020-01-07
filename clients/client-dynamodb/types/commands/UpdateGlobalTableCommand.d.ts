import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { UpdateGlobalTableInput, UpdateGlobalTableOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateGlobalTableCommandInput = UpdateGlobalTableInput;
export declare type UpdateGlobalTableCommandOutput = UpdateGlobalTableOutput & __MetadataBearer;
export declare class UpdateGlobalTableCommand extends $Command<UpdateGlobalTableCommandInput, UpdateGlobalTableCommandOutput, DynamoDBClientResolvedConfig> {
    readonly input: UpdateGlobalTableCommandInput;
    constructor(input: UpdateGlobalTableCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateGlobalTableCommandInput, UpdateGlobalTableCommandOutput>;
    private serialize;
    private deserialize;
}
