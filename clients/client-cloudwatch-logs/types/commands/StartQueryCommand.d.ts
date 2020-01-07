import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { StartQueryRequest, StartQueryResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartQueryCommandInput = StartQueryRequest;
export declare type StartQueryCommandOutput = StartQueryResponse & __MetadataBearer;
export declare class StartQueryCommand extends $Command<StartQueryCommandInput, StartQueryCommandOutput, CloudWatchLogsClientResolvedConfig> {
    readonly input: StartQueryCommandInput;
    constructor(input: StartQueryCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchLogsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartQueryCommandInput, StartQueryCommandOutput>;
    private serialize;
    private deserialize;
}
