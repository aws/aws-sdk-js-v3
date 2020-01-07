import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { BatchDetectSentimentRequest, BatchDetectSentimentResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type BatchDetectSentimentCommandInput = BatchDetectSentimentRequest;
export declare type BatchDetectSentimentCommandOutput = BatchDetectSentimentResponse & __MetadataBearer;
export declare class BatchDetectSentimentCommand extends $Command<BatchDetectSentimentCommandInput, BatchDetectSentimentCommandOutput, ComprehendClientResolvedConfig> {
    readonly input: BatchDetectSentimentCommandInput;
    constructor(input: BatchDetectSentimentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchDetectSentimentCommandInput, BatchDetectSentimentCommandOutput>;
    private serialize;
    private deserialize;
}
