import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { StartLoggingRequest, StartLoggingResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartLoggingCommandInput = StartLoggingRequest;
export declare type StartLoggingCommandOutput = StartLoggingResponse & __MetadataBearer;
export declare class StartLoggingCommand extends $Command<StartLoggingCommandInput, StartLoggingCommandOutput, CloudTrailClientResolvedConfig> {
    readonly input: StartLoggingCommandInput;
    constructor(input: StartLoggingCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudTrailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartLoggingCommandInput, StartLoggingCommandOutput>;
    private serialize;
    private deserialize;
}
