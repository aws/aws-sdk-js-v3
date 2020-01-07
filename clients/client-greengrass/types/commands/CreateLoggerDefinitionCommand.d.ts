import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { CreateLoggerDefinitionRequest, CreateLoggerDefinitionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateLoggerDefinitionCommandInput = CreateLoggerDefinitionRequest;
export declare type CreateLoggerDefinitionCommandOutput = CreateLoggerDefinitionResponse & __MetadataBearer;
export declare class CreateLoggerDefinitionCommand extends $Command<CreateLoggerDefinitionCommandInput, CreateLoggerDefinitionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: CreateLoggerDefinitionCommandInput;
    constructor(input: CreateLoggerDefinitionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateLoggerDefinitionCommandInput, CreateLoggerDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
