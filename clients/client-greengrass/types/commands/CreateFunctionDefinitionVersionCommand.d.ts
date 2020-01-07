import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { CreateFunctionDefinitionVersionRequest, CreateFunctionDefinitionVersionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateFunctionDefinitionVersionCommandInput = CreateFunctionDefinitionVersionRequest;
export declare type CreateFunctionDefinitionVersionCommandOutput = CreateFunctionDefinitionVersionResponse & __MetadataBearer;
export declare class CreateFunctionDefinitionVersionCommand extends $Command<CreateFunctionDefinitionVersionCommandInput, CreateFunctionDefinitionVersionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: CreateFunctionDefinitionVersionCommandInput;
    constructor(input: CreateFunctionDefinitionVersionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateFunctionDefinitionVersionCommandInput, CreateFunctionDefinitionVersionCommandOutput>;
    private serialize;
    private deserialize;
}
