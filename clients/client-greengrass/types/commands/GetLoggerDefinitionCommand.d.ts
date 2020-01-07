import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { GetLoggerDefinitionRequest, GetLoggerDefinitionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetLoggerDefinitionCommandInput = GetLoggerDefinitionRequest;
export declare type GetLoggerDefinitionCommandOutput = GetLoggerDefinitionResponse & __MetadataBearer;
export declare class GetLoggerDefinitionCommand extends $Command<GetLoggerDefinitionCommandInput, GetLoggerDefinitionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: GetLoggerDefinitionCommandInput;
    constructor(input: GetLoggerDefinitionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetLoggerDefinitionCommandInput, GetLoggerDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
