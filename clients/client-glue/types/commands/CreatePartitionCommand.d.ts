import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { CreatePartitionRequest, CreatePartitionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreatePartitionCommandInput = CreatePartitionRequest;
export declare type CreatePartitionCommandOutput = CreatePartitionResponse & __MetadataBearer;
export declare class CreatePartitionCommand extends $Command<CreatePartitionCommandInput, CreatePartitionCommandOutput, GlueClientResolvedConfig> {
    readonly input: CreatePartitionCommandInput;
    constructor(input: CreatePartitionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreatePartitionCommandInput, CreatePartitionCommandOutput>;
    private serialize;
    private deserialize;
}
