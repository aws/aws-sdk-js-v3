import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { GetLoggerDefinitionVersionRequest, GetLoggerDefinitionVersionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetLoggerDefinitionVersionCommandInput = GetLoggerDefinitionVersionRequest;
export declare type GetLoggerDefinitionVersionCommandOutput = GetLoggerDefinitionVersionResponse & __MetadataBearer;
export declare class GetLoggerDefinitionVersionCommand extends $Command<GetLoggerDefinitionVersionCommandInput, GetLoggerDefinitionVersionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: GetLoggerDefinitionVersionCommandInput;
    constructor(input: GetLoggerDefinitionVersionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetLoggerDefinitionVersionCommandInput, GetLoggerDefinitionVersionCommandOutput>;
    private serialize;
    private deserialize;
}
