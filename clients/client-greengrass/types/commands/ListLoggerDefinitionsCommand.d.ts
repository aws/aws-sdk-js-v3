import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { ListLoggerDefinitionsRequest, ListLoggerDefinitionsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListLoggerDefinitionsCommandInput = ListLoggerDefinitionsRequest;
export declare type ListLoggerDefinitionsCommandOutput = ListLoggerDefinitionsResponse & __MetadataBearer;
export declare class ListLoggerDefinitionsCommand extends $Command<ListLoggerDefinitionsCommandInput, ListLoggerDefinitionsCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: ListLoggerDefinitionsCommandInput;
    constructor(input: ListLoggerDefinitionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListLoggerDefinitionsCommandInput, ListLoggerDefinitionsCommandOutput>;
    private serialize;
    private deserialize;
}
