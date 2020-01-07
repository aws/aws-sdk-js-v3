import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { PutMetricFilterRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutMetricFilterCommandInput = PutMetricFilterRequest;
export declare type PutMetricFilterCommandOutput = __MetadataBearer;
export declare class PutMetricFilterCommand extends $Command<PutMetricFilterCommandInput, PutMetricFilterCommandOutput, CloudWatchLogsClientResolvedConfig> {
    readonly input: PutMetricFilterCommandInput;
    constructor(input: PutMetricFilterCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchLogsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutMetricFilterCommandInput, PutMetricFilterCommandOutput>;
    private serialize;
    private deserialize;
}
