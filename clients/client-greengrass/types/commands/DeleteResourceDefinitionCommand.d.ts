import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { DeleteResourceDefinitionRequest, DeleteResourceDefinitionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteResourceDefinitionCommandInput = DeleteResourceDefinitionRequest;
export declare type DeleteResourceDefinitionCommandOutput = DeleteResourceDefinitionResponse & __MetadataBearer;
export declare class DeleteResourceDefinitionCommand extends $Command<DeleteResourceDefinitionCommandInput, DeleteResourceDefinitionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: DeleteResourceDefinitionCommandInput;
    constructor(input: DeleteResourceDefinitionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteResourceDefinitionCommandInput, DeleteResourceDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
