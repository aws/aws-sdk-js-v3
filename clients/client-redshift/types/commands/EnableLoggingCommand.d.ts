import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { EnableLoggingMessage, LoggingStatus } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type EnableLoggingCommandInput = EnableLoggingMessage;
export declare type EnableLoggingCommandOutput = LoggingStatus & __MetadataBearer;
export declare class EnableLoggingCommand extends $Command<EnableLoggingCommandInput, EnableLoggingCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: EnableLoggingCommandInput;
    constructor(input: EnableLoggingCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<EnableLoggingCommandInput, EnableLoggingCommandOutput>;
    private serialize;
    private deserialize;
}
