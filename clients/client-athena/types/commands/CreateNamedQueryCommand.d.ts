import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { CreateNamedQueryInput, CreateNamedQueryOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateNamedQueryCommandInput = CreateNamedQueryInput;
export declare type CreateNamedQueryCommandOutput = CreateNamedQueryOutput & __MetadataBearer;
export declare class CreateNamedQueryCommand extends $Command<CreateNamedQueryCommandInput, CreateNamedQueryCommandOutput, AthenaClientResolvedConfig> {
    readonly input: CreateNamedQueryCommandInput;
    constructor(input: CreateNamedQueryCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AthenaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateNamedQueryCommandInput, CreateNamedQueryCommandOutput>;
    private serialize;
    private deserialize;
}
