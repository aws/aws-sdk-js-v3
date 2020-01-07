import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { CreateTableRequest, CreateTableResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateTableCommandInput = CreateTableRequest;
export declare type CreateTableCommandOutput = CreateTableResponse & __MetadataBearer;
export declare class CreateTableCommand extends $Command<CreateTableCommandInput, CreateTableCommandOutput, GlueClientResolvedConfig> {
    readonly input: CreateTableCommandInput;
    constructor(input: CreateTableCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateTableCommandInput, CreateTableCommandOutput>;
    private serialize;
    private deserialize;
}
