import { ServiceInputTypes, ServiceOutputTypes, kendraClientResolvedConfig } from "../kendraClient";
import { CreateIndexRequest, CreateIndexResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateIndexCommandInput = CreateIndexRequest;
export declare type CreateIndexCommandOutput = CreateIndexResponse & __MetadataBearer;
export declare class CreateIndexCommand extends $Command<CreateIndexCommandInput, CreateIndexCommandOutput, kendraClientResolvedConfig> {
    readonly input: CreateIndexCommandInput;
    constructor(input: CreateIndexCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: kendraClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateIndexCommandInput, CreateIndexCommandOutput>;
    private serialize;
    private deserialize;
}
