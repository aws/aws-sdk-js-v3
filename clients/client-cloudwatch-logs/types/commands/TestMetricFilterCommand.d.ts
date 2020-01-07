import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { TestMetricFilterRequest, TestMetricFilterResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type TestMetricFilterCommandInput = TestMetricFilterRequest;
export declare type TestMetricFilterCommandOutput = TestMetricFilterResponse & __MetadataBearer;
export declare class TestMetricFilterCommand extends $Command<TestMetricFilterCommandInput, TestMetricFilterCommandOutput, CloudWatchLogsClientResolvedConfig> {
    readonly input: TestMetricFilterCommandInput;
    constructor(input: TestMetricFilterCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchLogsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<TestMetricFilterCommandInput, TestMetricFilterCommandOutput>;
    private serialize;
    private deserialize;
}
