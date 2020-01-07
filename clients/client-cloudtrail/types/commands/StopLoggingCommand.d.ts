import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { StopLoggingRequest, StopLoggingResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StopLoggingCommandInput = StopLoggingRequest;
export declare type StopLoggingCommandOutput = StopLoggingResponse & __MetadataBearer;
export declare class StopLoggingCommand extends $Command<StopLoggingCommandInput, StopLoggingCommandOutput, CloudTrailClientResolvedConfig> {
    readonly input: StopLoggingCommandInput;
    constructor(input: StopLoggingCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudTrailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopLoggingCommandInput, StopLoggingCommandOutput>;
    private serialize;
    private deserialize;
}
