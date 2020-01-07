import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { CreateConnectorDefinitionRequest, CreateConnectorDefinitionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateConnectorDefinitionCommandInput = CreateConnectorDefinitionRequest;
export declare type CreateConnectorDefinitionCommandOutput = CreateConnectorDefinitionResponse & __MetadataBearer;
export declare class CreateConnectorDefinitionCommand extends $Command<CreateConnectorDefinitionCommandInput, CreateConnectorDefinitionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: CreateConnectorDefinitionCommandInput;
    constructor(input: CreateConnectorDefinitionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateConnectorDefinitionCommandInput, CreateConnectorDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
