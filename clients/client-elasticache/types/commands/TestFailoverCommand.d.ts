import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { TestFailoverMessage, TestFailoverResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type TestFailoverCommandInput = TestFailoverMessage;
export declare type TestFailoverCommandOutput = TestFailoverResult & __MetadataBearer;
export declare class TestFailoverCommand extends $Command<TestFailoverCommandInput, TestFailoverCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: TestFailoverCommandInput;
    constructor(input: TestFailoverCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<TestFailoverCommandInput, TestFailoverCommandOutput>;
    private serialize;
    private deserialize;
}
