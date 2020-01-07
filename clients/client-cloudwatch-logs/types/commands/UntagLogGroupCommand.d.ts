import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { UntagLogGroupRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UntagLogGroupCommandInput = UntagLogGroupRequest;
export declare type UntagLogGroupCommandOutput = __MetadataBearer;
export declare class UntagLogGroupCommand extends $Command<UntagLogGroupCommandInput, UntagLogGroupCommandOutput, CloudWatchLogsClientResolvedConfig> {
    readonly input: UntagLogGroupCommandInput;
    constructor(input: UntagLogGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchLogsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UntagLogGroupCommandInput, UntagLogGroupCommandOutput>;
    private serialize;
    private deserialize;
}
