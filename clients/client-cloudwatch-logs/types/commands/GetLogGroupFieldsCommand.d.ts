import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { GetLogGroupFieldsRequest, GetLogGroupFieldsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetLogGroupFieldsCommandInput = GetLogGroupFieldsRequest;
export declare type GetLogGroupFieldsCommandOutput = GetLogGroupFieldsResponse & __MetadataBearer;
export declare class GetLogGroupFieldsCommand extends $Command<GetLogGroupFieldsCommandInput, GetLogGroupFieldsCommandOutput, CloudWatchLogsClientResolvedConfig> {
    readonly input: GetLogGroupFieldsCommandInput;
    constructor(input: GetLogGroupFieldsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchLogsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetLogGroupFieldsCommandInput, GetLogGroupFieldsCommandOutput>;
    private serialize;
    private deserialize;
}
