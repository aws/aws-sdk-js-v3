import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { TestDNSAnswerRequest, TestDNSAnswerResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type TestDNSAnswerCommandInput = TestDNSAnswerRequest;
export declare type TestDNSAnswerCommandOutput = TestDNSAnswerResponse & __MetadataBearer;
export declare class TestDNSAnswerCommand extends $Command<TestDNSAnswerCommandInput, TestDNSAnswerCommandOutput, Route53ClientResolvedConfig> {
    readonly input: TestDNSAnswerCommandInput;
    constructor(input: TestDNSAnswerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<TestDNSAnswerCommandInput, TestDNSAnswerCommandOutput>;
    private serialize;
    private deserialize;
}
