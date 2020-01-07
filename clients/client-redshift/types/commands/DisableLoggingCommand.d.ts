import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DisableLoggingMessage, LoggingStatus } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisableLoggingCommandInput = DisableLoggingMessage;
export declare type DisableLoggingCommandOutput = LoggingStatus & __MetadataBearer;
export declare class DisableLoggingCommand extends $Command<DisableLoggingCommandInput, DisableLoggingCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: DisableLoggingCommandInput;
    constructor(input: DisableLoggingCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisableLoggingCommandInput, DisableLoggingCommandOutput>;
    private serialize;
    private deserialize;
}
