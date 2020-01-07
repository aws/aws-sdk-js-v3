import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { CreateConnectionRequest, CreateConnectionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateConnectionCommandInput = CreateConnectionRequest;
export declare type CreateConnectionCommandOutput = CreateConnectionResponse & __MetadataBearer;
export declare class CreateConnectionCommand extends $Command<CreateConnectionCommandInput, CreateConnectionCommandOutput, GlueClientResolvedConfig> {
    readonly input: CreateConnectionCommandInput;
    constructor(input: CreateConnectionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateConnectionCommandInput, CreateConnectionCommandOutput>;
    private serialize;
    private deserialize;
}
