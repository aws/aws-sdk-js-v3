import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { DeleteLogGroupRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteLogGroupCommandInput = DeleteLogGroupRequest;
export declare type DeleteLogGroupCommandOutput = __MetadataBearer;
export declare class DeleteLogGroupCommand extends $Command<DeleteLogGroupCommandInput, DeleteLogGroupCommandOutput, CloudWatchLogsClientResolvedConfig> {
    readonly input: DeleteLogGroupCommandInput;
    constructor(input: DeleteLogGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchLogsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteLogGroupCommandInput, DeleteLogGroupCommandOutput>;
    private serialize;
    private deserialize;
}
