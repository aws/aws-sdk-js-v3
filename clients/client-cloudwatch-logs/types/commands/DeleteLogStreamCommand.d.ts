import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { DeleteLogStreamRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteLogStreamCommandInput = DeleteLogStreamRequest;
export declare type DeleteLogStreamCommandOutput = __MetadataBearer;
export declare class DeleteLogStreamCommand extends $Command<DeleteLogStreamCommandInput, DeleteLogStreamCommandOutput, CloudWatchLogsClientResolvedConfig> {
    readonly input: DeleteLogStreamCommandInput;
    constructor(input: DeleteLogStreamCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchLogsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteLogStreamCommandInput, DeleteLogStreamCommandOutput>;
    private serialize;
    private deserialize;
}
