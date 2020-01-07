import { MediaStoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreClient";
import { StopAccessLoggingInput, StopAccessLoggingOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StopAccessLoggingCommandInput = StopAccessLoggingInput;
export declare type StopAccessLoggingCommandOutput = StopAccessLoggingOutput & __MetadataBearer;
export declare class StopAccessLoggingCommand extends $Command<StopAccessLoggingCommandInput, StopAccessLoggingCommandOutput, MediaStoreClientResolvedConfig> {
    readonly input: StopAccessLoggingCommandInput;
    constructor(input: StopAccessLoggingCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaStoreClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopAccessLoggingCommandInput, StopAccessLoggingCommandOutput>;
    private serialize;
    private deserialize;
}
