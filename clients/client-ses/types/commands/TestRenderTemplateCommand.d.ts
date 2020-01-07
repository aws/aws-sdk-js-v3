import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { TestRenderTemplateRequest, TestRenderTemplateResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type TestRenderTemplateCommandInput = TestRenderTemplateRequest;
export declare type TestRenderTemplateCommandOutput = TestRenderTemplateResponse & __MetadataBearer;
export declare class TestRenderTemplateCommand extends $Command<TestRenderTemplateCommandInput, TestRenderTemplateCommandOutput, SESClientResolvedConfig> {
    readonly input: TestRenderTemplateCommandInput;
    constructor(input: TestRenderTemplateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<TestRenderTemplateCommandInput, TestRenderTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
