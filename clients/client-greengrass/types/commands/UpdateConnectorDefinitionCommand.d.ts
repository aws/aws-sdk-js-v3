import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { UpdateConnectorDefinitionRequest, UpdateConnectorDefinitionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateConnectorDefinitionCommandInput = UpdateConnectorDefinitionRequest;
export declare type UpdateConnectorDefinitionCommandOutput = UpdateConnectorDefinitionResponse & __MetadataBearer;
export declare class UpdateConnectorDefinitionCommand extends $Command<UpdateConnectorDefinitionCommandInput, UpdateConnectorDefinitionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: UpdateConnectorDefinitionCommandInput;
    constructor(input: UpdateConnectorDefinitionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateConnectorDefinitionCommandInput, UpdateConnectorDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
