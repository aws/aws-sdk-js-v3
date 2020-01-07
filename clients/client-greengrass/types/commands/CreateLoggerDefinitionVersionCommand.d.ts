import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { CreateLoggerDefinitionVersionRequest, CreateLoggerDefinitionVersionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateLoggerDefinitionVersionCommandInput = CreateLoggerDefinitionVersionRequest;
export declare type CreateLoggerDefinitionVersionCommandOutput = CreateLoggerDefinitionVersionResponse & __MetadataBearer;
export declare class CreateLoggerDefinitionVersionCommand extends $Command<CreateLoggerDefinitionVersionCommandInput, CreateLoggerDefinitionVersionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: CreateLoggerDefinitionVersionCommandInput;
    constructor(input: CreateLoggerDefinitionVersionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateLoggerDefinitionVersionCommandInput, CreateLoggerDefinitionVersionCommandOutput>;
    private serialize;
    private deserialize;
}
