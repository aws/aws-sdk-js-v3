import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { DeleteConnectorDefinitionRequest, DeleteConnectorDefinitionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteConnectorDefinitionCommandInput = DeleteConnectorDefinitionRequest;
export declare type DeleteConnectorDefinitionCommandOutput = DeleteConnectorDefinitionResponse & __MetadataBearer;
export declare class DeleteConnectorDefinitionCommand extends $Command<DeleteConnectorDefinitionCommandInput, DeleteConnectorDefinitionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: DeleteConnectorDefinitionCommandInput;
    constructor(input: DeleteConnectorDefinitionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteConnectorDefinitionCommandInput, DeleteConnectorDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
