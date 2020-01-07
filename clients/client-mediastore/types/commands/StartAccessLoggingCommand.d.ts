import { MediaStoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreClient";
import { StartAccessLoggingInput, StartAccessLoggingOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartAccessLoggingCommandInput = StartAccessLoggingInput;
export declare type StartAccessLoggingCommandOutput = StartAccessLoggingOutput & __MetadataBearer;
export declare class StartAccessLoggingCommand extends $Command<StartAccessLoggingCommandInput, StartAccessLoggingCommandOutput, MediaStoreClientResolvedConfig> {
    readonly input: StartAccessLoggingCommandInput;
    constructor(input: StartAccessLoggingCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaStoreClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartAccessLoggingCommandInput, StartAccessLoggingCommandOutput>;
    private serialize;
    private deserialize;
}
