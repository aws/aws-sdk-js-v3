import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { TestEventPatternRequest, TestEventPatternResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type TestEventPatternCommandInput = TestEventPatternRequest;
export declare type TestEventPatternCommandOutput = TestEventPatternResponse & __MetadataBearer;
export declare class TestEventPatternCommand extends $Command<TestEventPatternCommandInput, TestEventPatternCommandOutput, EventBridgeClientResolvedConfig> {
    readonly input: TestEventPatternCommandInput;
    constructor(input: TestEventPatternCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EventBridgeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<TestEventPatternCommandInput, TestEventPatternCommandOutput>;
    private serialize;
    private deserialize;
}
