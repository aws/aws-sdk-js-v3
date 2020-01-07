import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { CreateLogStreamRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateLogStreamCommandInput = CreateLogStreamRequest;
export declare type CreateLogStreamCommandOutput = __MetadataBearer;
export declare class CreateLogStreamCommand extends $Command<CreateLogStreamCommandInput, CreateLogStreamCommandOutput, CloudWatchLogsClientResolvedConfig> {
    readonly input: CreateLogStreamCommandInput;
    constructor(input: CreateLogStreamCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchLogsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateLogStreamCommandInput, CreateLogStreamCommandOutput>;
    private serialize;
    private deserialize;
}
