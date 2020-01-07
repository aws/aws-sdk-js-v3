import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { UpdateLoggerDefinitionRequest, UpdateLoggerDefinitionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateLoggerDefinitionCommandInput = UpdateLoggerDefinitionRequest;
export declare type UpdateLoggerDefinitionCommandOutput = UpdateLoggerDefinitionResponse & __MetadataBearer;
export declare class UpdateLoggerDefinitionCommand extends $Command<UpdateLoggerDefinitionCommandInput, UpdateLoggerDefinitionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: UpdateLoggerDefinitionCommandInput;
    constructor(input: UpdateLoggerDefinitionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateLoggerDefinitionCommandInput, UpdateLoggerDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
