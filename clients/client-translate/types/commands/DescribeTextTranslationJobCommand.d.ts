import { ServiceInputTypes, ServiceOutputTypes, TranslateClientResolvedConfig } from "../TranslateClient";
import { DescribeTextTranslationJobRequest, DescribeTextTranslationJobResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeTextTranslationJobCommandInput = DescribeTextTranslationJobRequest;
export declare type DescribeTextTranslationJobCommandOutput = DescribeTextTranslationJobResponse & __MetadataBearer;
export declare class DescribeTextTranslationJobCommand extends $Command<DescribeTextTranslationJobCommandInput, DescribeTextTranslationJobCommandOutput, TranslateClientResolvedConfig> {
    readonly input: DescribeTextTranslationJobCommandInput;
    constructor(input: DescribeTextTranslationJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranslateClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTextTranslationJobCommandInput, DescribeTextTranslationJobCommandOutput>;
    private serialize;
    private deserialize;
}
