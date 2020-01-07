import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { CreateLogGroupRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateLogGroupCommandInput = CreateLogGroupRequest;
export declare type CreateLogGroupCommandOutput = __MetadataBearer;
export declare class CreateLogGroupCommand extends $Command<CreateLogGroupCommandInput, CreateLogGroupCommandOutput, CloudWatchLogsClientResolvedConfig> {
    readonly input: CreateLogGroupCommandInput;
    constructor(input: CreateLogGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchLogsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateLogGroupCommandInput, CreateLogGroupCommandOutput>;
    private serialize;
    private deserialize;
}
