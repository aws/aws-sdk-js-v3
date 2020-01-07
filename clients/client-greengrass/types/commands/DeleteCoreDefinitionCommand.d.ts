import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { DeleteCoreDefinitionRequest, DeleteCoreDefinitionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteCoreDefinitionCommandInput = DeleteCoreDefinitionRequest;
export declare type DeleteCoreDefinitionCommandOutput = DeleteCoreDefinitionResponse & __MetadataBearer;
export declare class DeleteCoreDefinitionCommand extends $Command<DeleteCoreDefinitionCommandInput, DeleteCoreDefinitionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: DeleteCoreDefinitionCommandInput;
    constructor(input: DeleteCoreDefinitionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteCoreDefinitionCommandInput, DeleteCoreDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
