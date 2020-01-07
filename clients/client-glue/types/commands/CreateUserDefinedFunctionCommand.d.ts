import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { CreateUserDefinedFunctionRequest, CreateUserDefinedFunctionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateUserDefinedFunctionCommandInput = CreateUserDefinedFunctionRequest;
export declare type CreateUserDefinedFunctionCommandOutput = CreateUserDefinedFunctionResponse & __MetadataBearer;
export declare class CreateUserDefinedFunctionCommand extends $Command<CreateUserDefinedFunctionCommandInput, CreateUserDefinedFunctionCommandOutput, GlueClientResolvedConfig> {
    readonly input: CreateUserDefinedFunctionCommandInput;
    constructor(input: CreateUserDefinedFunctionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateUserDefinedFunctionCommandInput, CreateUserDefinedFunctionCommandOutput>;
    private serialize;
    private deserialize;
}
