import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { CreateCoreDefinitionVersionRequest, CreateCoreDefinitionVersionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateCoreDefinitionVersionCommandInput = CreateCoreDefinitionVersionRequest;
export declare type CreateCoreDefinitionVersionCommandOutput = CreateCoreDefinitionVersionResponse & __MetadataBearer;
export declare class CreateCoreDefinitionVersionCommand extends $Command<CreateCoreDefinitionVersionCommandInput, CreateCoreDefinitionVersionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: CreateCoreDefinitionVersionCommandInput;
    constructor(input: CreateCoreDefinitionVersionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateCoreDefinitionVersionCommandInput, CreateCoreDefinitionVersionCommandOutput>;
    private serialize;
    private deserialize;
}
