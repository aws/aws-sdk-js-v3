import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { CreateSchemaRequest, CreateSchemaResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateSchemaCommandInput = CreateSchemaRequest;
export declare type CreateSchemaCommandOutput = CreateSchemaResponse & __MetadataBearer;
export declare class CreateSchemaCommand extends $Command<CreateSchemaCommandInput, CreateSchemaCommandOutput, PersonalizeClientResolvedConfig> {
    readonly input: CreateSchemaCommandInput;
    constructor(input: CreateSchemaCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PersonalizeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateSchemaCommandInput, CreateSchemaCommandOutput>;
    private serialize;
    private deserialize;
}
