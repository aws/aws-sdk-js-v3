import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { DeleteLoggerDefinitionRequest, DeleteLoggerDefinitionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteLoggerDefinitionCommandInput = DeleteLoggerDefinitionRequest;
export declare type DeleteLoggerDefinitionCommandOutput = DeleteLoggerDefinitionResponse & __MetadataBearer;
export declare class DeleteLoggerDefinitionCommand extends $Command<DeleteLoggerDefinitionCommandInput, DeleteLoggerDefinitionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: DeleteLoggerDefinitionCommandInput;
    constructor(input: DeleteLoggerDefinitionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteLoggerDefinitionCommandInput, DeleteLoggerDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
