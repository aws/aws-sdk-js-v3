import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { CreateFunctionDefinitionRequest, CreateFunctionDefinitionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateFunctionDefinitionCommandInput = CreateFunctionDefinitionRequest;
export declare type CreateFunctionDefinitionCommandOutput = CreateFunctionDefinitionResponse & __MetadataBearer;
export declare class CreateFunctionDefinitionCommand extends $Command<CreateFunctionDefinitionCommandInput, CreateFunctionDefinitionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: CreateFunctionDefinitionCommandInput;
    constructor(input: CreateFunctionDefinitionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateFunctionDefinitionCommandInput, CreateFunctionDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
